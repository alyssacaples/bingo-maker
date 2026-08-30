import { useCallback } from 'react';
import PDFGenerator from './PDFGenerator';
import { BingoDocument } from './BingoDocument';

// Bundles everything that pulls in @react-pdf/renderer (a large dependency)
// behind one lazy-loaded chunk, loaded via React.lazy() in App.jsx.
const PDFSection = ({
  hasEnoughPhrases,
  requiredCells,
  gridSize,
  freeSpace,
  phrases,
  title,
  subtitle,
  setSubtitle,
  copies,
  dynamicResize,
  fontSize,
  generateBingoCard,
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
  autoOpenPreview = false,
}) => {
  // Create BingoDocument component with current settings
  const BingoDocumentWithProps = useCallback(() => (
    <BingoDocument
      copies={copies}
      title={title}
      subtitle={subtitle}
      gridSize={gridSize}
      freeSpace={freeSpace}
      dynamicResize={dynamicResize}
      fontSize={fontSize}
      generateBingoCard={(cardIndex) => generateBingoCard(phrases, cardIndex)}
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
  ), [copies, title, subtitle, gridSize, freeSpace, dynamicResize, fontSize, generateBingoCard, phrases, titleFont, titleColor, cellFont, backgroundColor, useGradient, gradientColor1, gradientColor2, borderColor, freeSpaceBackgroundColor, freeSpaceFontColor, cellTextColor, subtitleColor, borderWidth, gridBorderRadius, cellBackgroundMode, cellBackgroundTint, freeSpaceLabel, printerFriendly, gradientDirection, gradientColor3, cardMatEnabled, backgroundPattern, backgroundPatternOpacity]);

  return (
    <PDFGenerator
      autoOpenPreview={autoOpenPreview}
      hasEnoughPhrases={hasEnoughPhrases}
      requiredCells={requiredCells}
      gridSize={gridSize}
      freeSpace={freeSpace}
      phrases={phrases}
      title={title}
      subtitle={subtitle}
      setSubtitle={setSubtitle}
      BingoDocument={BingoDocumentWithProps}
      titleFont={titleFont}
      setTitleFont={setTitleFont}
      titleColor={titleColor}
      setTitleColor={setTitleColor}
      cellFont={cellFont}
      setCellFont={setCellFont}
      backgroundColor={backgroundColor}
      setBackgroundColor={setBackgroundColor}
      useGradient={useGradient}
      setUseGradient={setUseGradient}
      gradientColor1={gradientColor1}
      setGradientColor1={setGradientColor1}
      gradientColor2={gradientColor2}
      setGradientColor2={setGradientColor2}
      borderColor={borderColor}
      setBorderColor={setBorderColor}
      freeSpaceBackgroundColor={freeSpaceBackgroundColor}
      setFreeSpaceBackgroundColor={setFreeSpaceBackgroundColor}
      freeSpaceFontColor={freeSpaceFontColor}
      setFreeSpaceFontColor={setFreeSpaceFontColor}
      cellTextColor={cellTextColor}
      setCellTextColor={setCellTextColor}
      subtitleColor={subtitleColor}
      setSubtitleColor={setSubtitleColor}
      borderWidth={borderWidth}
      setBorderWidth={setBorderWidth}
      gridBorderRadius={gridBorderRadius}
      setGridBorderRadius={setGridBorderRadius}
      cellBackgroundMode={cellBackgroundMode}
      setCellBackgroundMode={setCellBackgroundMode}
      cellBackgroundTint={cellBackgroundTint}
      setCellBackgroundTint={setCellBackgroundTint}
      freeSpaceLabel={freeSpaceLabel}
      setFreeSpaceLabel={setFreeSpaceLabel}
      printerFriendly={printerFriendly}
      setPrinterFriendly={setPrinterFriendly}
      gradientDirection={gradientDirection}
      setGradientDirection={setGradientDirection}
      gradientColor3={gradientColor3}
      setGradientColor3={setGradientColor3}
      cardMatEnabled={cardMatEnabled}
      setCardMatEnabled={setCardMatEnabled}
      backgroundPattern={backgroundPattern}
      setBackgroundPattern={setBackgroundPattern}
      backgroundPatternOpacity={backgroundPatternOpacity}
      setBackgroundPatternOpacity={setBackgroundPatternOpacity}
    />
  );
};

export default PDFSection;
