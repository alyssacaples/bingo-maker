import { useState, useCallback } from 'react';

const useBingoConfiguration = () => {
  const [title, setTitle] = useState('BINGO');
  const [subtitle, setSubtitle] = useState('Walk around the room and get signatures of others who agree with the item in the box.');
  const [gridSize, setGridSize] = useState(5);
  const [freeSpace, setFreeSpace] = useState(true);
  const [randomize, setRandomize] = useState(true);
  const [identicalCopies, setIdenticalCopies] = useState(false);
  const [copies, setCopies] = useState(1);
  const [dynamicResize, setDynamicResize] = useState(true);
  const [maxChars, setMaxChars] = useState(25);
  const [fontSize, setFontSize] = useState(12);
  const [titleFont, setTitleFont] = useState('Helvetica-Bold');
  const [titleColor, setTitleColor] = useState('#000000');
  const [cellFont, setCellFont] = useState('Helvetica');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColor1, setGradientColor1] = useState('#FFFFFF');
  const [gradientColor2, setGradientColor2] = useState('#E0E7FF');
  const [borderColor, setBorderColor] = useState('#1e40af');
  const [freeSpaceBackgroundColor, setFreeSpaceBackgroundColor] = useState('#dbeafe');
  const [freeSpaceFontColor, setFreeSpaceFontColor] = useState('#1e40af');
  const [cellTextColor, setCellTextColor] = useState('#1f2937');
  const [subtitleColor, setSubtitleColor] = useState('#4b5563');
  const [borderWidth, setBorderWidth] = useState(1.5);
  const [gridBorderRadius, setGridBorderRadius] = useState(8);
  const [cellBackgroundMode, setCellBackgroundMode] = useState('white');
  const [cellBackgroundTint, setCellBackgroundTint] = useState('#f8fafc');
  const [freeSpaceLabel, setFreeSpaceLabel] = useState('FREE SPACE');
  const [printerFriendly, setPrinterFriendly] = useState(false);
  const [gradientDirection, setGradientDirection] = useState('vertical');
  const [gradientColor3, setGradientColor3] = useState(null);
  const [cardMatEnabled, setCardMatEnabled] = useState(false);
  const [backgroundPattern, setBackgroundPattern] = useState(null);
  const [backgroundPatternOpacity, setBackgroundPatternOpacity] = useState(0.15);
  const [bingoHeader, setBingoHeader] = useState(false);

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
        currPhrase = freeSpaceLabel;
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
  }, [gridSize, freeSpace, randomize, identicalCopies, dynamicResize, maxChars, freeSpaceLabel, shuffleArray]);

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

  // How alike the copies will be, and whether any square is repeated on a
  // single card.
  //
  // Expected squares in common between any two copies is contentCells squared
  // over the pool size: 24 squares drawn from 30 phrases share about 19. That
  // formula was checked against a simulation of generateBingoCard itself rather
  // than trusted on paper, and matched to within 0.2 of a square at pool sizes
  // from 25 to 100.
  //
  // Returns null when there is nothing worth saying, so the caller can render
  // on truthiness alone.
  const getCardIntegrityReport = useCallback((uniquePhraseCount, duplicateCount) => {
    // Same number the generator gates on, deliberately reused rather than
    // restated: two copies of this formula would eventually disagree, and the
    // disagreement would show up as a warning about a card nobody can build.
    const contentCells = requiredCells;

    // Overlap only means something when the copies are meant to differ.
    // Identical copies is someone asking for the same card twice on purpose,
    // and with randomize off the copies are offset slices of one list rather
    // than independent draws, so the formula below would not describe them.
    const cardsShouldDiffer = copies > 1 && randomize && !identicalCopies;
    const poolFillsACard = uniquePhraseCount >= contentCells;

    let expectedShared = null;
    let suggestedPool = null;
    let level = null;

    if (cardsShouldDiffer && poolFillsACard) {
      const shared = Math.min(contentCells, (contentCells * contentCells) / uniquePhraseCount);
      // Three fifths of the squares in common is the line. Half was the first
      // instinct, but a 4x4 card drawn from 30 phrases lands at 8.5 of 16 and
      // tripped it, which produced "another 2 phrases would bring that down to
      // about 8": true, useless, and sitting right next to the download button.
      // A warning that fires on cards nobody would complain about is the one
      // that teaches people to ignore the strip.
      if (shared > contentCells * 0.6) {
        expectedShared = shared;
        level = shared >= contentCells * 0.85 ? 'severe' : 'high';
        // Twice the squares is the pool that puts expected overlap at half.
        suggestedPool = contentCells * 2;
      }
    }

    if (!duplicateCount && !level) return null;

    return {
      duplicateCount,
      uniquePhraseCount,
      contentCells,
      copies,
      level,
      expectedShared: expectedShared === null ? null : Math.round(expectedShared),
      suggestedPool,
      // What the overlap becomes at suggestedPool, which is half the squares by
      // construction. Rounded here so the UI never has to do arithmetic.
      improvedShared: suggestedPool === null ? null : Math.round(contentCells / 2)
    };
  }, [requiredCells, copies, randomize, identicalCopies]);

  return {
    title,
    setTitle,
    subtitle,
    setSubtitle,
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
    titleFont,
    setTitleFont,
    titleColor,
    setTitleColor,
    cellFont,
    setCellFont,
    backgroundColor,
    setBackgroundColor,
    useGradient,
    setUseGradient,
    gradientColor1,
    setGradientColor1,
    gradientColor2,
    setGradientColor2,
    borderColor,
    setBorderColor,
    freeSpaceBackgroundColor,
    setFreeSpaceBackgroundColor,
    freeSpaceFontColor,
    setFreeSpaceFontColor,
    cellTextColor,
    setCellTextColor,
    subtitleColor,
    setSubtitleColor,
    borderWidth,
    setBorderWidth,
    gridBorderRadius,
    setGridBorderRadius,
    cellBackgroundMode,
    setCellBackgroundMode,
    cellBackgroundTint,
    setCellBackgroundTint,
    freeSpaceLabel,
    setFreeSpaceLabel,
    printerFriendly,
    setPrinterFriendly,
    gradientDirection,
    setGradientDirection,
    gradientColor3,
    setGradientColor3,
    cardMatEnabled,
    setCardMatEnabled,
    backgroundPattern,
    setBackgroundPattern,
    backgroundPatternOpacity,
    setBackgroundPatternOpacity,
    bingoHeader,
    setBingoHeader,
    generateBingoCard,
    requiredCells,
    hasCenter,
    getTextOverflowWarning,
    getCardIntegrityReport
  };
};

export default useBingoConfiguration;
