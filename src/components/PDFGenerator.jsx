import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Eye } from 'lucide-react';
import PDFPreview from './PDFPreview';

const PDFGenerator = ({ 
  hasEnoughPhrases, 
  requiredCells, 
  gridSize, 
  freeSpace, 
  phrases, 
  title,
  subtitle,
  setSubtitle,
  BingoDocument,
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
  setBackgroundPatternOpacity
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card-body space-y-2">
          {hasEnoughPhrases ? (
            <>
              <PDFDownloadLink
                document={<BingoDocument />}
                fileName={`${title || 'Bingo'}_Cards.pdf`}
                className="btn-download"
              >
                {({ loading }) => (
                  loading ? 'Preparing PDF…' : (
                    <span className="inline-flex items-center">
                      <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                      Download cards
                    </span>
                  )
                )}
              </PDFDownloadLink>

              <button
                onClick={() => setShowPreview(true)}
                className="btn-secondary w-full"
              >
                <Eye className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                Preview &amp; customize
              </button>
            </>
          ) : (
            <div className="border border-rule p-3">
              <p className="font-display text-[12px] uppercase text-accent m-0">
                Need {requiredCells} phrases
              </p>
              <p className="text-[13px] text-ink-2 mt-1 mb-0">
                A {gridSize}×{gridSize} grid{freeSpace && hasEnoughPhrases === false ? ' with free space' : ''} needs {requiredCells}.
                You have {phrases.length}.
              </p>
            </div>
          )}
        </div>
      </div>

      <PDFPreview
        BingoDocument={BingoDocument}
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
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
    </>
  );
};

export default PDFGenerator;
