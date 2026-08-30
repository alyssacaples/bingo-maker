import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { registerPdfFonts } from '../utils/pdfFonts';

// Runs once, at module load, which only happens inside the lazily loaded PDF
// chunk. Nothing is fetched until someone actually intends to make a PDF.
registerPdfFonts();

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Helper function to interpolate between two colors
const interpolateColor = (color1, color2, factor) => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  if (!rgb1 || !rgb2) return color1;
  
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
  
  return `rgb(${r}, ${g}, ${b})`;
};

// Helper for three-stop color interpolation
const interpolateThreeColors = (color1, color2, color3, factor) => {
  if (!color3) {
    return interpolateColor(color1, color2, factor);
  }
  if (factor < 0.5) {
    return interpolateColor(color1, color2, factor * 2);
  } else {
    return interpolateColor(color2, color3, (factor - 0.5) * 2);
  }
};

// Calculate cell background color dynamically
const getCellBgColor = (rowIndex, colIndex, isCenter, cellBackgroundMode, cellBackgroundTint, freeSpaceBackgroundColor) => {
  if (isCenter) return freeSpaceBackgroundColor;
  if (cellBackgroundMode === 'softTint') return cellBackgroundTint;
  if (cellBackgroundMode === 'alternating') {
    const isAlternating = (rowIndex + colIndex) % 2 === 1;
    return isAlternating ? cellBackgroundTint : '#ffffff';
  }
  return '#ffffff';
};

// Calculate dynamic font size based on text length and grid size
const getDynamicFontSize = (text, isCenter = false, gridSize = 5) => {
  if (isCenter) return 16;
  if (!text) return 8;
  
  const baseSize = gridSize === 3 ? 24 : gridSize === 4 ? 20 : 18;
  const textLength = text.length;
  
  if (textLength <= 15) return baseSize;
  if (textLength <= 30) return Math.max(6, baseSize - 2);
  if (textLength <= 50) return Math.max(5, baseSize - 3);
  return Math.max(4, baseSize - 4);
};

const createStyles = (customization = {}) => {
  const {
    titleFont = 'Helvetica-Bold',
    titleColor = '#000000',
    cellFont = 'Helvetica',
    backgroundColor = '#FFFFFF',
    useGradient = false,
    gradientColor1 = '#FFFFFF',
    borderColor = '#1e40af',
    freeSpaceFontColor = '#1e40af',
    
    cellTextColor = '#1f2937',
    subtitleColor = '#4b5563',
    borderWidth = 1.5,
    gridBorderRadius = 8,
    printerFriendly = false
  } = customization;

  const isPrinter = printerFriendly === true;

  const actualUseGradient = isPrinter ? false : (useGradient || false);
  const actualBgColor = isPrinter ? '#FFFFFF' : (backgroundColor || '#FFFFFF');
  const actualTitleColor = isPrinter ? '#000000' : (titleColor || '#000000');
  const actualSubtitleColor = isPrinter ? '#000000' : (subtitleColor || '#4b5563');
  const actualCellTextColor = isPrinter ? '#000000' : (cellTextColor || '#1f2937');
  const actualBorderColor = isPrinter ? '#000000' : (borderColor || '#1e40af');
  const actualBorderWidth = isPrinter ? 0.5 : (borderWidth !== undefined ? borderWidth : 1.5);
  const actualGridBorderWidth = isPrinter ? 0.5 : (borderWidth !== undefined ? borderWidth * 2 : 3);
  const actualGridRadius = isPrinter ? 0 : (gridBorderRadius !== undefined ? gridBorderRadius : 8);
  const actualFreeFontColor = isPrinter ? '#000000' : (freeSpaceFontColor || '#1e40af');

  return StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: actualUseGradient ? gradientColor1 : actualBgColor,
      padding: 30,
      fontFamily: 'Helvetica',
      position: 'relative',
    },
    gradientContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'column',
    },
    gradientLayer: {
      flex: 1,
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    header: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 20,
      paddingTop: 20,
    },
    pageContent: {
      flexDirection: 'column',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    title: {
      fontSize: 36,
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: titleFont,
      color: actualTitleColor,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 0,
      fontFamily: 'Helvetica',
      color: actualSubtitleColor,
      fontStyle: 'italic',
    },
    cardMat: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 12,
      alignSelf: 'center',
      width: '100%',
      maxWidth: '520pt',
    },
    grid: {
      flexDirection: 'column',
      border: `${actualGridBorderWidth}pt solid ${actualBorderColor}`,
      width: '100%',
      maxWidth: '500pt',
      aspectRatio: '1',
      borderRadius: actualGridRadius,
      alignSelf: 'center',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    cell: {
      flex: 1,
      border: `${actualBorderWidth}pt solid ${actualBorderColor}`,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
      minHeight: 60,
    },
    cellText: {
      textAlign: 'center',
      fontWeight: 'normal',
      lineHeight: 1.3,
      color: actualCellTextColor,
      fontFamily: cellFont,
    },
    freeCellText: {
      textAlign: 'center',
      fontFamily: 'Helvetica-Bold',
      color: actualFreeFontColor,
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    footer: {
      position: 'absolute',
      bottom: 15,
      left: 30,
      right: 30,
      textAlign: 'center',
      fontSize: 8,
      color: '#6b7280',
    }
  });
};

const BingoCard = ({ 
  cardIndex, 
  title,
  subtitle,
  gridSize, 
  freeSpace, 
  dynamicResize, 
  fontSize,
  generateBingoCard, 
  copies,
  titleFont,
  titleColor,
  cellFont,
  backgroundColor,
  useGradient,
  gradientColor1,
  gradientColor2,
  borderColor,
  freeSpaceBackgroundColor,
  freeSpaceFontColor,
  
  cellTextColor,
  subtitleColor,
  borderWidth,
  gridBorderRadius,
  cellBackgroundMode,
  cellBackgroundTint,
  freeSpaceLabel,
  printerFriendly,
  gradientDirection,
  gradientColor3,
  cardMatEnabled,
  backgroundPattern,
  backgroundPatternOpacity
}) => {
  const styles = createStyles({
    titleFont,
    titleColor,
    cellFont,
    backgroundColor,
    useGradient,
    gradientColor1,
    gradientColor2,
    borderColor,
    freeSpaceBackgroundColor,
    freeSpaceFontColor,
    cellTextColor,
    subtitleColor,
    borderWidth,
    gridBorderRadius,
    printerFriendly
  });
  
  const cardPhrases = generateBingoCard(cardIndex);
  
  const hasCenter = gridSize % 2 === 1;
  const centerIndex = hasCenter ? Math.floor((gridSize * gridSize) / 2) : -1;

  const isPrinter = printerFriendly === true;
  const actualUseGradient = isPrinter ? false : useGradient;
  const actualCardMatEnabled = isPrinter ? false : cardMatEnabled;
  const actualBackgroundPattern = isPrinter ? null : backgroundPattern;

  // Render gradient layers based on direction and color stops
  let gradientLayers = null;
  if (actualUseGradient) {
    if (gradientDirection === 'diagonal') {
      const layers = [];
      for (let r = 0; r < 15; r++) {
        const rowCells = [];
        for (let c = 0; c < 15; c++) {
          const factor = (r + c) / 28;
          const cellColor = interpolateThreeColors(gradientColor1, gradientColor2, gradientColor3, factor);
          rowCells.push(
            <View key={c} style={{ flex: 1, backgroundColor: cellColor }} />
          );
        }
        layers.push(
          <View key={r} style={{ flex: 1, flexDirection: 'row' }}>
            {rowCells}
          </View>
        );
      }
      gradientLayers = layers;
    } else {
      gradientLayers = Array.from({ length: 30 }, (_, i) => {
        const factor = i / 29;
        const layerColor = interpolateThreeColors(gradientColor1, gradientColor2, gradientColor3, factor);
        return (
          <View
            key={i}
            style={[
              styles.gradientLayer,
              { backgroundColor: layerColor }
            ]}
          />
        );
      });
    }
  }

  const gridContent = (
    <View style={styles.grid}>
      {Array.from({ length: gridSize }, (_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {Array.from({ length: gridSize }, (_, colIndex) => {
            const cellIndex = rowIndex * gridSize + colIndex;
            const isCenter = freeSpace && hasCenter && cellIndex === centerIndex;
            const phrase = cardPhrases[cellIndex] || '';
            const calculatedFontSize = dynamicResize ? getDynamicFontSize(phrase, isCenter, gridSize) : fontSize;
            
            const actualFreeBg = isPrinter ? '#FFFFFF' : freeSpaceBackgroundColor;
            const cellBg = isPrinter 
              ? '#FFFFFF' 
              : getCellBgColor(rowIndex, colIndex, isCenter, cellBackgroundMode, cellBackgroundTint, actualFreeBg);

            return (
              <View 
                key={colIndex} 
                style={[styles.cell, { backgroundColor: cellBg }]}
              >
                {isCenter ? (
                  <Text style={styles.freeCellText}>
                    {phrase || freeSpaceLabel || 'FREE SPACE'}
                  </Text>
                ) : (
                  <Text style={[styles.cellText, { fontSize: calculatedFontSize }]}>
                    {phrase}
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );

  return (
    <Page size="Letter" style={styles.page}>
      {actualUseGradient && (
        <View 
          style={[
            styles.gradientContainer, 
            { flexDirection: gradientDirection === 'horizontal' ? 'row' : 'column' }
          ]}
        >
          {gradientLayers}
        </View>
      )}
      {actualBackgroundPattern && (
        <Image
          src={`/backgrounds/${actualBackgroundPattern}.png`}
          style={[styles.backgroundPattern, { opacity: backgroundPatternOpacity }]}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.title}>{title || 'BINGO'}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={styles.pageContent}>
        {actualCardMatEnabled ? (
          <View style={styles.cardMat}>
            {gridContent}
          </View>
        ) : gridContent}
      </View>
      <Text style={styles.footer}>
        Generated with makebingocard.com • Card {cardIndex + 1} of {copies}
      </Text>
    </Page>
  );
};

const BingoDocument = ({ 
  copies, 
  title,
  subtitle,
  gridSize, 
  freeSpace, 
  dynamicResize, 
  fontSize,
  generateBingoCard,
  titleFont,
  titleColor,
  cellFont,
  backgroundColor,
  useGradient,
  gradientColor1,
  gradientColor2,
  borderColor,
  freeSpaceBackgroundColor,
  freeSpaceFontColor,
  
  cellTextColor,
  subtitleColor,
  borderWidth,
  gridBorderRadius,
  cellBackgroundMode,
  cellBackgroundTint,
  freeSpaceLabel,
  printerFriendly,
  gradientDirection,
  gradientColor3,
  cardMatEnabled,
  backgroundPattern,
  backgroundPatternOpacity
}) => (
  <Document>
    {Array.from({ length: copies }, (_, index) => (
      <BingoCard 
        key={index} 
        cardIndex={index}
        title={title}
        subtitle={subtitle}
        gridSize={gridSize}
        freeSpace={freeSpace}
        dynamicResize={dynamicResize}
        fontSize={fontSize}
        generateBingoCard={generateBingoCard}
        copies={copies}
        titleFont={titleFont}
        titleColor={titleColor}
        cellFont={cellFont}
        backgroundColor={backgroundColor}
        useGradient={useGradient}
        gradientColor1={gradientColor1}
        gradientColor2={gradientColor2}
        borderColor={borderColor}
        freeSpaceBackgroundColor={freeSpaceBackgroundColor}
        freeSpaceFontColor={freeSpaceFontColor}
        cellTextColor={cellTextColor}
        subtitleColor={subtitleColor}
        borderWidth={borderWidth}
        gridBorderRadius={gridBorderRadius}
        cellBackgroundMode={cellBackgroundMode}
        cellBackgroundTint={cellBackgroundTint}
        freeSpaceLabel={freeSpaceLabel}
        printerFriendly={printerFriendly}
        gradientDirection={gradientDirection}
        gradientColor3={gradientColor3}
        cardMatEnabled={cardMatEnabled}
        backgroundPattern={backgroundPattern}
        backgroundPatternOpacity={backgroundPatternOpacity}
      />
    ))}
  </Document>
);

export { BingoDocument, BingoCard };
