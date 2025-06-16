import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Use built-in fonts for better compatibility
// No need to register external fonts - React-PDF has built-in fonts

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

const createStyles = () => StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'column',
    border: '3pt solid #1e40af',
    width: '100%',
    aspectRatio: '1',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  cell: {
    flex: 1,
    border: '1.5pt solid #1e40af',
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
    fontFamily: 'Helvetica',
  },
  freeCell: {
    backgroundColor: '#dbeafe',
  },
  freeCellText: {
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    color: '#1e40af',
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

const BingoCard = ({ 
  cardIndex, 
  title, 
  gridSize, 
  freeSpace, 
  dynamicResize, 
  fontSize,
  generateBingoCard, 
  copies 
}) => {
  const styles = createStyles();
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

  return (
    <Page size="Letter" style={styles.page}>
      <Text style={styles.title}>{title || 'BINGO'}</Text>
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
      <Text style={styles.footer}>
        Generated with Try Again? Bingo Card Maker • Card {cardIndex + 1} of {copies}
      </Text>
    </Page>
  );
};

const BingoDocument = ({ 
  copies, 
  title, 
  gridSize, 
  freeSpace, 
  dynamicResize, 
  fontSize,
  generateBingoCard 
}) => (
  <Document>
    {Array.from({ length: copies }, (_, index) => (
      <BingoCard 
        key={index} 
        cardIndex={index}
        title={title}
        gridSize={gridSize}
        freeSpace={freeSpace}
        dynamicResize={dynamicResize}
        fontSize={fontSize}
        generateBingoCard={generateBingoCard}
        copies={copies}
      />
    ))}
  </Document>
);

export { BingoDocument, BingoCard, getDynamicFontSize };
