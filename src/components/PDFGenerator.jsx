import { useState, useEffect, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Eye } from 'lucide-react';
import PDFPreview from './PDFPreview';
import { trackPdfDownload, trackPdfPreview } from '../utils/analytics';

const PDFGenerator = ({ 
  copies,
  autoOpenPreview = false,
  autoStartDownload = false,
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

  // Someone clicked "Preview" on the lightweight placeholder and waited for
  // this chunk to arrive. Honour that click instead of making them click again.
  // The loader already reported the event, so this path stays untracked.
  useEffect(() => {
    if (autoOpenPreview) setShowPreview(true);
  }, [autoOpenPreview]);

  // Same idea for Download. PDFDownloadLink only becomes a real href once the
  // blob is built, which is after the click that loaded this chunk, so the
  // anchor is clicked on the user's behalf as soon as it goes live. Its own
  // onClick fires from this too, so the event is still counted exactly once.
  //
  // If the browser refuses a programmatic download because the original user
  // gesture has expired, nothing breaks: the link is on screen and labelled.
  const downloadWrapRef = useRef(null);
  const autoDownloadFired = useRef(false);
  useEffect(() => {
    if (!autoStartDownload || autoDownloadFired.current) return;
    const wrap = downloadWrapRef.current;
    if (!wrap) return;

    const clickWhenLive = () => {
      const a = wrap.querySelector('a[href^="blob:"]');
      if (!a || autoDownloadFired.current) return false;
      autoDownloadFired.current = true;
      a.click();
      return true;
    };

    if (clickWhenLive()) return;
    const obs = new MutationObserver(() => {
      if (clickWhenLive()) obs.disconnect();
    });
    obs.observe(wrap, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href'],
    });
    return () => obs.disconnect();
  }, [autoStartDownload]);

  return (
    <>
      <div className="card">
        <div className="card-body space-y-2">
          {hasEnoughPhrases ? (
            <>
              <div ref={downloadWrapRef}>
              <PDFDownloadLink
                document={<BingoDocument />}
                fileName={`${title || 'Bingo'}_Cards.pdf`}
                className="btn-download"
                onClick={() => trackPdfDownload(title, gridSize, copies, phrases.length)}
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
              </div>

              <button
                onClick={() => {
                  trackPdfPreview(title, gridSize);
                  setShowPreview(true);
                }}
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
        title={title}
        gridSize={gridSize}
        copies={copies}
        phraseCount={phrases.length}
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
