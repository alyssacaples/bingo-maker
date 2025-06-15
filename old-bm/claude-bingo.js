import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { Download, Plus, Trash2, Shuffle, Grid3X3, Grid2X2 } from 'lucide-react';

// Register a font for better text rendering
Font.register({
  family: 'Helvetica',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2'
});

const BingoMaker = () => {
  const [title, setTitle] = useState('BINGO');
  const [phrases, setPhrases] = useState([
    'Free parking at mall',
    'Someone cuts in line',
    'Baby crying loudly',
    'Person on phone in quiet area',
    'Elevator takes forever',
    'Can\'t find what you need',
    'Long checkout line',
    'Forgot shopping list',
    'Price check needed',
    'Cart with wobbly wheel',
    'Someone blocking aisle',
    'Coupon doesn\'t work',
    'Item not in stock',
    'Kids running around',
    'Overhead announcement',
    'Self-checkout error',
    'Someone cuts you off',
    'Parking spot taken',
    'Door won\'t open easily',
    'Credit card declined',
    'Wrong size selected',
    'Employee nowhere to find',
    'Long wait for help',
    'Forget where you parked',
    'Impulse buy at checkout'
  ]);
  const [newPhrase, setNewPhrase] = useState('');
  const [gridSize, setGridSize] = useState(5);
  const [freeSpace, setFreeSpace] = useState(true);
  const [randomize, setRandomize] = useState(true);
  const [copies, setCopies] = useState(1);
  const [dynamicResize, setDynamicResize] = useState(true);
  const [maxChars, setMaxChars] = useState(25);

  const addPhrase = () => {
    if (newPhrase.trim()) {
      setPhrases([...phrases, newPhrase.trim()]);
      setNewPhrase('');
    }
  };

  const removePhrase = (index) => {
    setPhrases(phrases.filter((_, i) => i !== index));
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateBingoCard = (cardIndex = 0) => {
    const totalCells = gridSize * gridSize;
    const centerIndex = Math.floor(totalCells / 2);
    let availablePhrases = [...phrases];
    
    if (randomize) {
      availablePhrases = shuffleArray(availablePhrases);
    }

    const cardPhrases = [];
    for (let i = 0; i < totalCells; i++) {
      if (freeSpace && i === centerIndex) {
        cardPhrases.push('FREE');
      } else {
        const phraseIndex = (i + cardIndex * totalCells) % availablePhrases.length;
        let phrase = availablePhrases[phraseIndex] || '';
        
        if (!dynamicResize && phrase.length > maxChars) {
          phrase = phrase.substring(0, maxChars - 3) + '...';
        }
        
        cardPhrases.push(phrase);
      }
    }
    
    return cardPhrases;
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      padding: 40,
    },
    title: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: 'bold',
      letterSpacing: 4,
    },
    grid: {
      flexDirection: 'column',
      border: '2pt solid #000',
      width: '100%',
      aspectRatio: '1',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    cell: {
      flex: 1,
      border: '1pt solid #000',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
      minHeight: 60,
    },
    cellText: {
      fontSize: dynamicResize ? (gridSize === 3 ? 11 : gridSize === 4 ? 9 : 7) : 8,
      textAlign: 'center',
      fontWeight: 'normal',
      lineHeight: 1.2,
    },
    freeCell: {
      backgroundColor: '#f0f0f0',
    },
    freeCellText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    pageBreak: {
      pageBreakBefore: 'always',
    }
  });

  const BingoCard = ({ cardIndex }) => {
    const cardPhrases = generateBingoCard(cardIndex);
    const centerIndex = Math.floor((gridSize * gridSize) / 2);

    return (
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{title || 'BINGO'}</Text>
        <View style={styles.grid}>
          {Array.from({ length: gridSize }, (_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {Array.from({ length: gridSize }, (_, colIndex) => {
                const cellIndex = rowIndex * gridSize + colIndex;
                const isCenter = freeSpace && cellIndex === centerIndex;
                const phrase = cardPhrases[cellIndex];
                
                return (
                  <View 
                    key={colIndex} 
                    style={[styles.cell, isCenter && styles.freeCell]}
                  >
                    <Text style={[
                      styles.cellText, 
                      isCenter && styles.freeCellText
                    ]}>
                      {phrase}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </Page>
    );
  };

  const BingoDocument = () => (
    <Document>
      {Array.from({ length: copies }, (_, index) => (
        <BingoCard key={index} cardIndex={index} />
      ))}
    </Document>
  );

  const requiredCells = gridSize * gridSize - (freeSpace ? 1 : 0);
  const hasEnoughPhrases = phrases.length >= requiredCells;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Bingo Card Maker
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Configuration</h2>
            
            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bingo Card Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter title (e.g., BINGO)"
              />
            </div>

            {/* Grid Size */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grid Size
              </label>
              <div className="flex space-x-2">
                {[3, 4, 5].map(size => (
                  <button
                    key={size}
                    onClick={() => setGridSize(size)}
                    className={`flex items-center px-3 py-2 rounded-md ${
                      gridSize === size 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {size === 3 && <Grid3X3 className="w-4 h-4 mr-1" />}
                    {size === 4 && <Grid2X2 className="w-4 h-4 mr-1" />}
                    {size === 5 && <Grid3X3 className="w-4 h-4 mr-1" />}
                    {size}×{size}
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={freeSpace}
                  onChange={(e) => setFreeSpace(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">Free space in center</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={randomize}
                  onChange={(e) => setRandomize(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">Randomize phrases</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dynamicResize}
                  onChange={(e) => setDynamicResize(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">Dynamic text sizing</span>
              </label>
            </div>

            {!dynamicResize && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Characters: {maxChars}
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={maxChars}
                  onChange={(e) => setMaxChars(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            {/* Number of Copies */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Copies
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={copies}
                onChange={(e) => setCopies(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Download Button */}
            <div className="text-center">
              {hasEnoughPhrases ? (
                <PDFDownloadLink
                  document={<BingoDocument />}
                  fileName={`${title || 'bingo'}-cards.pdf`}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {({ loading }) => (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      {loading ? 'Generating PDF...' : 'Download PDF'}
                    </>
                  )}
                </PDFDownloadLink>
              ) : (
                <div className="text-red-600 text-sm">
                  Need at least {requiredCells} phrases for {gridSize}×{gridSize} grid
                  {freeSpace && ' (with free space)'}
                </div>
              )}
            </div>
          </div>

          {/* Phrases Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Phrases ({phrases.length})
            </h2>
            
            {/* Add Phrase */}
            <div className="flex mb-4">
              <input
                type="text"
                value={newPhrase}
                onChange={(e) => setNewPhrase(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPhrase()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Add new phrase..."
              />
              <button
                onClick={addPhrase}
                className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Phrases List */}
            <div className="max-h-96 overflow-y-auto space-y-2">
              {phrases.map((phrase, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700 flex-1">{phrase}</span>
                  <button
                    onClick={() => removePhrase(index)}
                    className="ml-2 p-1 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {phrases.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No phrases added yet. Add some phrases to get started!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BingoMaker;