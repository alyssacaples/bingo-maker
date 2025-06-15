import React, { useState, useCallback } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { 
  Download, 
  Plus, 
  Trash2, 
  Grid3X3, 
  Copy, 
  Shuffle, 
  FileText,
  Settings,
  Sparkles
} from 'lucide-react';

// Register fonts for better text rendering
Font.register({
  family: 'Helvetica',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2'
});

Font.register({
  family: 'HelveticaBold',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2'
});

const BingoCardMaker = () => {
  const [title, setTitle] = useState('BINGO');
  const [phrases, setPhrases] = useState([]);
  const [phraseInput, setPhraseInput] = useState('');
  const [gridSize, setGridSize] = useState(5);
  const [freeSpace, setFreeSpace] = useState(true);
  const [randomize, setRandomize] = useState(true);
  const [copies, setCopies] = useState(1);
  const [dynamicResize, setDynamicResize] = useState(true);
  const [maxChars, setMaxChars] = useState(25);

  // Sample data
  const samplePhrases = {
    shopping: [
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
    ],
    motivational: [
      'Dream big, start small.',
      'Believe in yourself.',
      'Keep moving forward.',
      'You are stronger than you think.',
      'The best is yet to come.',
      'Stay positive, work hard.',
      'Never stop learning.',
      'Your potential is limitless.',
      'Be the change you seek.',
      'Make today count.',
      'Progress, not perfection.',
      'One step at a time.',
      'Never give up.',
      'Your only limit is you.',
      'Live with purpose.',
      'Choose joy.',
      'Embrace the journey.',
      'Success starts with belief.',
      'Find strength in challenges.',
      'Keep going, you\'re almost there.',
      'Believe in the power of now.',
      'Turn dreams into plans.',
      'Every day is a fresh start.',
      'You are capable of amazing things.',
      'Success is a journey, not a destination.'
    ],
    simple: [
      'hello',
      'alyssa',
      'i believe in you',
      'hang in there',
      'sweet baby',
      'dobby',
      'voldemort',
      'cowabunga',
      'balrog',
      'you shall not pass',
      'the skin of our teeth',
      'perfectly fine'
    ]
  };

  // Auto-detect delimiters and parse phrases
  const parsePhrases = useCallback((text) => {
    if (!text.trim()) return [];
    
    // Try different delimiters in order of preference
    const delimiters = ['\n', ';', ',', '|'];
    
    for (const delimiter of delimiters) {
      const parts = text.split(delimiter);
      if (parts.length > 1) {
        return parts
          .map(phrase => phrase.trim())
          .filter(phrase => phrase.length > 0);
      }
    }
    
    // If no delimiters found, treat as single phrase
    return [text.trim()];
  }, []);

  const handlePhraseInputChange = (value) => {
    setPhraseInput(value);
    const parsedPhrases = parsePhrases(value);
    setPhrases(parsedPhrases);
  };

  const addSamplePhrases = (type = 'shopping') => {
    const selectedPhrases = samplePhrases[type] || samplePhrases.shopping;
    const sampleText = selectedPhrases.join('\n');
    setPhraseInput(sampleText);
    setPhrases(selectedPhrases);
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
      // Use cardIndex as seed for different randomization per card
      const seed = cardIndex * 1000;
      for (let i = 0; i < seed; i++) {
        Math.random();
      }
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

  // Calculate dynamic font size based on text length and grid size
  const getDynamicFontSize = (text, isCenter = false) => {
    if (isCenter) return 18;
    
    const baseSize = gridSize === 3 ? 12 : gridSize === 4 ? 10 : 8;
    const textLength = text.length;
    
    if (textLength <= 15) return baseSize;
    if (textLength <= 30) return Math.max(6, baseSize - 2);
    if (textLength <= 50) return Math.max(5, baseSize - 3);
    return Math.max(4, baseSize - 4);
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      padding: 30,
      fontFamily: 'Helvetica',
    },
    title: {
      fontSize: 32,
      textAlign: 'center',
      marginBottom: 25,
      fontFamily: 'HelveticaBold',
      letterSpacing: 6,
      color: '#1e40af',
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
    },
    freeCell: {
      backgroundColor: '#dbeafe',
    },
    freeCellText: {
      fontSize: 18,
      fontFamily: 'HelveticaBold',
      color: '#1e40af',
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
                const fontSize = dynamicResize ? getDynamicFontSize(phrase, isCenter) : 8;
                
                return (
                  <View 
                    key={colIndex} 
                    style={[styles.cell, isCenter && styles.freeCell]}
                  >
                    <Text style={[
                      styles.cellText,
                      { fontSize },
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
        <Text style={styles.footer}>
          Generated with Bingo Card Maker • Card {cardIndex + 1} of {copies}
        </Text>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Sparkles className="w-8 h-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900 font-display">
              Bingo Card Maker
            </h1>
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Create beautiful, customizable bingo cards in seconds
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Phrases Input */}
            <div className="card animate-fade-in">
              <div className="card-header">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Bingo Phrases ({phrases.length})
                  </h2>
                </div>
              </div>
              <div className="card-body">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter your phrases (one per line, or separated by commas/semicolons)
                    </label>
                    <textarea
                      value={phraseInput}
                      onChange={(e) => handlePhraseInputChange(e.target.value)}
                      className="input-field resize-none"
                      rows={8}
                      placeholder="Type your bingo phrases here...&#10;&#10;Examples:&#10;Free parking&#10;Long checkout line&#10;Forgot shopping list&#10;&#10;Or use commas: Free parking, Long line, Forgot list"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => addSamplePhrases('shopping')}
                      className="btn-secondary"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Shopping Bingo
                    </button>
                    <button
                      onClick={() => addSamplePhrases('motivational')}
                      className="btn-secondary"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Motivational
                    </button>
                    <button
                      onClick={() => addSamplePhrases('simple')}
                      className="btn-secondary"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Simple Test
                    </button>
                    <button
                      onClick={() => {
                        setPhraseInput('');
                        setPhrases([]);
                      }}
                      className="btn-secondary"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear All
                    </button>
                  </div>

                  {phrases.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Preview of detected phrases:</p>
                      <div className="max-h-32 overflow-y-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                          {phrases.slice(0, 10).map((phrase, index) => (
                            <div key={index} className="text-gray-700 truncate">
                              {index + 1}. {phrase}
                            </div>
                          ))}
                          {phrases.length > 10 && (
                            <div className="text-gray-500 italic">
                              ...and {phrases.length - 10} more
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Title Configuration */}
            <div className="card animate-slide-up">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-field"
                  placeholder="Enter bingo card title (e.g., BINGO, HOLIDAY BINGO)"
                />
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            
            {/* Grid Configuration */}
            <div className="card animate-slide-up">
              <div className="card-header">
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Configuration</h3>
                </div>
              </div>
              <div className="card-body space-y-6">
                
                {/* Grid Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Grid Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[3, 4, 5].map(size => (
                      <button
                        key={size}
                        onClick={() => setGridSize(size)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          gridSize === size 
                            ? 'border-primary-500 bg-primary-50 text-primary-700' 
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <Grid3X3 className="w-5 h-5 mx-auto mb-1" />
                        <div className="text-sm font-medium">{size}×{size}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      Free space in center
                    </label>
                    <input
                      type="checkbox"
                      checked={freeSpace}
                      onChange={(e) => setFreeSpace(e.target.checked)}
                      className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      Randomize phrases
                    </label>
                    <input
                      type="checkbox"
                      checked={randomize}
                      onChange={(e) => setRandomize(e.target.checked)}
                      className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      Dynamic text sizing
                    </label>
                    <input
                      type="checkbox"
                      checked={dynamicResize}
                      onChange={(e) => setDynamicResize(e.target.checked)}
                      className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                    />
                  </div>
                </div>

                {!dynamicResize && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Characters: {maxChars}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="80"
                      value={maxChars}
                      onChange={(e) => setMaxChars(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                {/* Number of Copies */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Copies
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={copies}
                    onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            {/* Generation */}
            <div className="card">
              <div className="card-body">
                {hasEnoughPhrases ? (
                  <PDFDownloadLink
                    document={<BingoDocument />}
                    fileName={`${(title || 'bingo').toLowerCase().replace(/\s+/g, '-')}-cards.pdf`}
                    className="btn-primary w-full text-center animate-bounce-gentle"
                  >
                    {({ loading }) => (
                      <>
                        <Download className="w-5 h-5 mr-2" />
                        {loading ? 'Generating PDF...' : 'Download Bingo Cards'}
                      </>
                    )}
                  </PDFDownloadLink>
                ) : (
                  <div className="text-center">
                    <div className="text-red-600 text-sm mb-2 font-medium">
                      Need at least {requiredCells} phrases
                    </div>
                    <div className="text-gray-500 text-xs">
                      for {gridSize}×{gridSize} grid{freeSpace && ' (with free space)'}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      Currently have: {phrases.length} phrases
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">💡 Pro Tips</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Use line breaks for best phrase separation</li>
                <li>• Dynamic sizing automatically adjusts font size</li>
                <li>• Randomize creates unique cards for each copy</li>
                <li>• Free space is always in the center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BingoCardMaker;
