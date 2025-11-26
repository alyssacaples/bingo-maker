import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Use built-in fonts for better compatibility
// No need to register external fonts - React-PDF has built-in fonts

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

// Calculate dynamic font size based on text length and grid size
const getDynamicFontSize = (text, isCenter = false, gridSize = 5) => {
  if (isCenter) return 24;
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
    gradientColor2 = '#E0E7FF',
    borderColor = '#1e40af',
    freeSpaceBackgroundColor = '#dbeafe',
    freeSpaceFontColor = '#1e40af'
  } = customization;

  return StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: useGradient ? gradientColor1 : backgroundColor,
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
      color: titleColor,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 0,
      fontFamily: 'Helvetica',
      color: '#4b5563',
      fontStyle: 'italic',
    },
    grid: {
      flexDirection: 'column',
      border: `3pt solid ${borderColor}`,
      width: '100%',
      maxWidth: '500pt',
      aspectRatio: '1',
      borderRadius: 8,
      alignSelf: 'center',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    cell: {
      flex: 1,
      border: `1.5pt solid ${borderColor}`,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
      minHeight: 60,
      backgroundColor: '#ffffff',
    },
    cellText: {
      textAlign: 'center',
      fontWeight: 'normal',
      lineHeight: 1.3,
      color: '#1f2937',
      fontFamily: cellFont,
    },
    freeCell: {
      backgroundColor: freeSpaceBackgroundColor,
    },
    freeCellText: {
      textAlign: 'center',
      fontFamily: 'Helvetica-Bold',
      color: freeSpaceFontColor,
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
  freeSpaceFontColor
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
    freeSpaceFontColor
  });
  const cardPhrases = generateBingoCard(cardIndex);
  
  // Debug logging
  console.log('BingoCard Debug:', {
    cardIndex,
    title,
    gridSize,
    freeSpace,
    cardPhrases: cardPhrases.slice(0, 5), // First 5 phrases
    totalPhrases: cardPhrases.length
  });
  
  // Only calculate center for odd-numbered grids (3x3, 5x5)
  const hasCenter = gridSize % 2 === 1;
  const centerIndex = hasCenter ? Math.floor((gridSize * gridSize) / 2) : -1;

  // Create gradient layers for smooth gradient effect
  // Using 30 layers for smooth gradient while maintaining performance
  const gradientLayers = useGradient ? Array.from({ length: 30 }, (_, i) => {
    const factor = i / 29; // 0 to 1
    const layerColor = interpolateColor(gradientColor1, gradientColor2, factor);
    return (
      <View
        key={i}
        style={[
          styles.gradientLayer,
          { backgroundColor: layerColor }
        ]}
      />
    );
  }) : null;

  return (
    <Page size="Letter" style={styles.page}>
      {useGradient && (
        <View style={styles.gradientContainer}>
          {gradientLayers}
        </View>
      )}
      <View style={styles.header}>
        <Text style={styles.title}>{title || 'BINGO'}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={styles.pageContent}>
        <View style={styles.grid}>
        {Array.from({ length: gridSize }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: gridSize }, (_, colIndex) => {
              const cellIndex = rowIndex * gridSize + colIndex;
              const isCenter = freeSpace && hasCenter && cellIndex === centerIndex;
              
              // Get phrase from array or use FREE SPACE for center
              const phrase = cardPhrases[cellIndex] || '';
              const calculatedFontSize = dynamicResize ? getDynamicFontSize(phrase, isCenter, gridSize) : fontSize;
              
              // Debug logging
              if (isCenter) {
                console.log(`Center cell at index ${cellIndex}: phrase="${phrase}", isCenter=${isCenter}, freeSpace=${freeSpace}`);
              }
              
              return (
                <View 
                  key={colIndex} 
                  style={[styles.cell, isCenter && styles.freeCell]}
                >
                  {isCenter ? (
                    <Text style={styles.freeCellText}>
                      FREE SPACE
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
  freeSpaceFontColor
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
      />
    ))}
  </Document>
);

export { BingoDocument, BingoCard, getDynamicFontSize };
