import { useState, useCallback } from 'react';

const useBingoConfiguration = () => {
  const [title, setTitle] = useState('BINGO');
  const [gridSize, setGridSize] = useState(5);
  const [freeSpace, setFreeSpace] = useState(true);
  const [randomize, setRandomize] = useState(true);
  const [identicalCopies, setIdenticalCopies] = useState(false);
  const [copies, setCopies] = useState(1);
  const [dynamicResize, setDynamicResize] = useState(true);
  const [maxChars, setMaxChars] = useState(25);
  const [fontSize, setFontSize] = useState(12);

  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const generateBingoCard = useCallback((phrases, cardIndex = 0) => {
    const totalCells = gridSize * gridSize;
    
    // Calculate center index - only applies to odd-numbered grids (3x3, 5x5)
    // For 4x4 grids, there is no true center, so free space is disabled
    const hasCenter = gridSize % 2 === 1;
    const centerIndex = hasCenter ? Math.floor(totalCells / 2) : -1;
    
    let availablePhrases = [...phrases];
    
    if (randomize && !identicalCopies) {
      // Use cardIndex as seed for different randomization per card
      const seed = cardIndex * 1000;
      for (let i = 0; i < seed; i++) {
        Math.random();
      }
      availablePhrases = shuffleArray(availablePhrases);
    } else if (randomize && identicalCopies && cardIndex === 0) {
      // Only shuffle once for the first card when identical copies is enabled
      availablePhrases = shuffleArray(availablePhrases);
    }

    const cardPhrases = [];
    for (let i = 0; i < totalCells; i++) {
      let currPhrase = '';
      if (freeSpace && hasCenter && i === centerIndex) {
        currPhrase = 'FREE SPACE';
      } else {
        const phraseIndex = (i + cardIndex * totalCells) % availablePhrases.length;
        let phrase = availablePhrases[phraseIndex] || '';
        
        if (!dynamicResize && phrase.length > maxChars) {
          phrase = phrase.substring(0, maxChars - 3) + '...';
        }
        currPhrase = phrase;
      }
      cardPhrases.push(currPhrase);
    }
    
    return cardPhrases;
  }, [gridSize, freeSpace, randomize, identicalCopies, dynamicResize, maxChars, shuffleArray]);

  // Calculate required cells - for 4x4 grids, free space is not available
  const hasCenter = gridSize % 2 === 1;
  const requiredCells = (freeSpace && hasCenter) ? gridSize * gridSize - 1 : gridSize * gridSize;

  // Calculate if current settings might cause text overflow
  const getTextOverflowWarning = useCallback(() => {
    if (dynamicResize) return null;
    
    // Rough estimation: larger fonts need fewer characters to fit
    // Grid size also affects available space per cell
    const baseLimit = gridSize === 3 ? 40 : gridSize === 4 ? 30 : 25;
    const fontSizeMultiplier = fontSize / 12; // 12px is baseline
    const adjustedLimit = Math.floor(baseLimit / fontSizeMultiplier);
    
    if (maxChars > adjustedLimit) {
      return {
        isWarning: true,
        message: `With ${fontSize}px font size and ${gridSize}×${gridSize} grid, phrases longer than ~${adjustedLimit} characters may exceed cell boundaries. Current limit: ${maxChars} characters.`,
        suggestedMaxChars: adjustedLimit
      };
    }
    return null;
  }, [dynamicResize, fontSize, gridSize, maxChars]);

  return {
    title,
    setTitle,
    gridSize,
    setGridSize,
    freeSpace,
    setFreeSpace,
    randomize,
    setRandomize,
    identicalCopies,
    setIdenticalCopies,
    copies,
    setCopies,
    dynamicResize,
    setDynamicResize,
    maxChars,
    setMaxChars,
    fontSize,
    setFontSize,
    generateBingoCard,
    requiredCells,
    hasCenter,
    getTextOverflowWarning
  };
};

export default useBingoConfiguration;
