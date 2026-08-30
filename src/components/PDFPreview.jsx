import { useState, useEffect, useRef } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Eye, X, Download, Settings } from 'lucide-react';
import CardCustomization from './CardCustomization';
import { trackPdfDownload } from '../utils/analytics';

const PDFPreview = ({ 
  BingoDocument, 
  isOpen, 
  onClose,
  title,
  gridSize,
  copies,
  phraseCount,
  subtitle,
  setSubtitle,
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
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCustomization, setShowCustomization] = useState(true);
  // pdfUrlRef is the authority on which blob is currently held, and is written
  // in the same statement that sets state. It is deliberately not synced from
  // pdfUrl by an effect: revocation has to be able to run outside React's
  // render cycle.
  const pdfUrlRef = useRef(null);

  // Regenerate whenever the modal is open and any setting changes.
  //
  // This deliberately does NOT revoke on cleanup. Cleanup fires on every one of
  // the ~25 dependencies below, so revoking here tore down the blob the iframe
  // was still displaying and left it pointed at a dead URL until the next
  // render finished. Revocation now happens where the replacement happens, in
  // generatePreview, and on close/unmount in the two effects after this one.
  useEffect(() => {
    if (isOpen && BingoDocument) {
      generatePreview();
    }
  }, [isOpen, BingoDocument, subtitle, titleFont, titleColor, cellFont, backgroundColor, useGradient, gradientColor1, gradientColor2, borderColor, freeSpaceBackgroundColor, freeSpaceFontColor, cellTextColor, subtitleColor, borderWidth, gridBorderRadius, cellBackgroundMode, cellBackgroundTint, freeSpaceLabel, printerFriendly, gradientDirection, gradientColor3, cardMatEnabled, backgroundPattern, backgroundPatternOpacity]);

  // Dragging a slider in the customization panel fires this on every change,
  // and each render takes long enough that several are in flight at once. The
  // run counter makes the newest request the only one allowed to land, so an
  // earlier render finishing late can no longer overwrite a newer preview, and
  // its blob is released instead of being stranded for the life of the page.
  const runRef = useRef(0);

  const generatePreview = async () => {
    const myRun = ++runRef.current;
    setLoading(true);
    setError(null);

    try {
      const doc = <BingoDocument />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();

      // Superseded while rendering, or the modal closed. Drop it; never build
      // an object URL we would only have to revoke.
      if (myRun !== runRef.current) return;

      // Revoked here rather than inside a setPdfUrl updater. StrictMode
      // double-invokes updaters, and React may discard a render entirely, which
      // would revoke the blob the iframe is still showing without ever
      // committing its replacement.
      const previous = pdfUrlRef.current;
      const url = URL.createObjectURL(blob);
      pdfUrlRef.current = url;
      setPdfUrl(url);
      if (previous) URL.revokeObjectURL(previous);
    } catch (err) {
      if (myRun !== runRef.current) return;
      console.error('Error generating preview:', err);
      setError('Failed to generate preview');
    } finally {
      if (myRun === runRef.current) setLoading(false);
    }
  };

  // Closing the modal releases the blob and invalidates any in-flight render,
  // so reopening starts from the loading state rather than briefly showing a
  // revoked URL in the iframe.
  useEffect(() => {
    if (isOpen) return;
    runRef.current++;
    if (pdfUrlRef.current) {
      URL.revokeObjectURL(pdfUrlRef.current);
      pdfUrlRef.current = null;
    }
    setPdfUrl(null);
    setError(null);
  }, [isOpen]);

  // Last line of defence: unmounting while a preview is open.
  useEffect(() => () => {
    if (pdfUrlRef.current) URL.revokeObjectURL(pdfUrlRef.current);
  }, []);

  const handleDownload = () => {
    if (pdfUrl) {
      // This path was invisible to analytics: everything downloaded from inside
      // the preview went uncounted, and the preview is the main route to a
      // customized card.
      trackPdfDownload(title, gridSize, copies, phraseCount);
      const link = document.createElement('a');
      link.href = pdfUrl;
      // Was hardcoded to bingo-cards-preview.pdf, which did not match the
      // filename the same card gets from the main download button.
      link.download = `${title || 'Bingo'}_Cards.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-ink/60 flex items-center justify-center z-50 p-4">
      <div className={`bg-surface border-2 border-ink ${showCustomization ? 'max-w-7xl' : 'max-w-5xl'} max-h-[95vh] w-full flex flex-col`}>
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b-2 border-ink bg-ground-2">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-accent" />
            <h3 className="font-display text-[14px] uppercase text-ink">PDF Preview</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowCustomization(!showCustomization)}
              className="btn-secondary text-sm"
              title={showCustomization ? 'Hide customization' : 'Show customization'}
            >
              <Settings className="w-4 h-4 mr-1" />
              {showCustomization ? 'Hide' : 'Customize'}
            </button>
            {pdfUrl && (
              <button
                onClick={handleDownload}
                className="btn-secondary text-sm"
                title="Download this preview"
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-ground-2"
              title="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-hidden flex">
          {/* Customization Panel */}
          {showCustomization && (
            <div className="w-80 border-r border-rule bg-surface overflow-y-auto">
              <div className="p-4">
                <CardCustomization
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
                  compact={true}
                />
              </div>
            </div>
          )}
          
          {/* PDF Preview Area */}
          <div className="flex-1 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-accent mx-auto mb-4"></div>
                <div className="text-ink">Generating preview…</div>
                <div className="font-mono text-[10px] text-ink-2 mt-1">This may take a moment</div>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="font-display text-[12px] uppercase text-accent mb-2">Preview error</div>
                <div className="text-[13px] text-ink-2">{error}</div>
                <button
                  onClick={generatePreview}
                  className="mt-4 btn-secondary text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : pdfUrl ? (
            <div className="h-full p-4">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border border-rule"
                title="PDF Preview"
                // colorScheme opts the embedded viewer OUT of a dark root so the
                // browser's own PDF toolbar doesn't render dark against white paper.
                style={{ minHeight: '70vh', colorScheme: 'light' }}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-ink-2">Unable to generate preview</div>
            </div>
          )}
          </div>
        </div>
        
        {/* Footer */}
        {pdfUrl && (
          <div className="border-t border-rule bg-ground-2 px-4 py-2.5">
            <div className="font-mono text-[10px] tracking-[0.06em] text-ink-2 text-center">
              Use the PDF viewer controls above to page through and zoom
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFPreview;