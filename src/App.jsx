import { useCallback, useEffect, lazy, Suspense } from 'react';
import './App.css';

// Import custom hooks
import usePhraseManager from './hooks/usePhraseManager';
import useBingoConfiguration from './hooks/useBingoConfiguration';

// Import components
import Header from './components/Header';
import PhraseInput from './components/PhraseInput';
import GridConfiguration from './components/GridConfiguration';
import ProTips from './components/ProTips';
import BugReportButton from './components/BugReportButton';
import AdBanner from './components/AdBanner';

// @react-pdf/renderer is a large dependency; defer it to its own chunk
// so it's only downloaded once someone actually generates/previews a PDF.
const PDFSection = lazy(() => import('./components/PDFSection'));

// Reads the template slug from a real /templates/<slug> path, if present.
const getTemplateSlugFromPath = () => {
  const match = window.location.pathname.match(/^\/templates\/([a-z0-9-]+)\/?$/);
  return match ? match[1] : null;
};

function App() {
  // Initialize hooks
  const {
    phraseInput,
    phrases,
    handlePhraseInputChange,
    addSamplePhrases,
    clearAll
  } = usePhraseManager();

  const {
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
    generateBingoCard,
    requiredCells,
    hasCenter,
    getTextOverflowWarning
  } = useBingoConfiguration();

  // Enhanced sample phrases handler
  const handleAddSamplePhrases = useCallback((type) => {
    const suggestedTitle = addSamplePhrases(type);
    setTitle(suggestedTitle);

    // Normalize the URL to the real template path (idempotent if already there).
    window.history.pushState({}, '', `/templates/${type}`);
  }, [addSamplePhrases, setTitle]);

  // Enhanced clear handler
  const handleClearAll = useCallback(() => {
    clearAll();
    setTitle('BINGO');
    window.history.pushState({}, '', '/');
  }, [clearAll, setTitle]);

  // Synchronize document title, description, canonical link, and Open Graph tags for SEO
  useEffect(() => {
    // Find or create canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    // Helpers to find or create meta tags
    const setMetaTag = (property, val) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', val);
    };

    const setMetaNameTag = (name, val) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', val);
    };

    const pathSlug = getTemplateSlugFromPath();
    const queryTemplate = new URLSearchParams(window.location.search).get('template');
    const slug = pathSlug || queryTemplate;

    if (title && title !== 'BINGO') {
      const fullTitle = `${title} - Free Bingo Card Maker`;
      const fullDesc = `Generate and print custom cards for "${title}". Add your own phrases, customize colors, and download print-ready PDFs.`;
      const fullUrl = slug ? `https://makebingocard.com/templates/${slug}` : 'https://makebingocard.com/';

      document.title = fullTitle;
      setMetaNameTag('description', fullDesc);
      canonicalLink.setAttribute('href', fullUrl);

      // Open Graph Tags
      setMetaTag('og:title', fullTitle);
      setMetaTag('og:description', fullDesc);
      setMetaTag('og:url', fullUrl);

      // Twitter Cards
      setMetaNameTag('twitter:title', fullTitle);
      setMetaNameTag('twitter:description', fullDesc);
    } else {
      const defaultTitle = 'Free Bingo Card Maker - Create Custom Printable Bingo Cards';
      const defaultDesc = 'Create, customize, and print your own custom bingo cards for free. Generate PDF files with randomized squares for any event or theme.';
      const defaultUrl = 'https://makebingocard.com/';

      document.title = defaultTitle;
      setMetaNameTag('description', defaultDesc);
      canonicalLink.setAttribute('href', defaultUrl);

      // Open Graph Tags
      setMetaTag('og:title', defaultTitle);
      setMetaTag('og:description', defaultDesc);
      setMetaTag('og:url', defaultUrl);

      // Twitter Cards
      setMetaNameTag('twitter:title', defaultTitle);
      setMetaNameTag('twitter:description', defaultDesc);
    }
  }, [title]);

  // Check the URL (path or legacy query param) on load to populate template
  useEffect(() => {
    const pathSlug = getTemplateSlugFromPath();
    const queryTemplate = new URLSearchParams(window.location.search).get('template');
    const slug = pathSlug || queryTemplate;
    if (slug) {
      const timer = setTimeout(() => {
        handleAddSamplePhrases(slug);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [handleAddSamplePhrases]);

  // Check if we have enough phrases
  const hasEnoughPhrases = phrases.length >= requiredCells;
  
  // Get text overflow warning
  const textOverflowWarning = getTextOverflowWarning();

  return (
    <div className="App min-h-screen bg-ground">
      <Header activeTitle={title} />

      {/* Top Banner Ad */}
      <AdBanner slot="" style={{ marginBottom: '20px' }} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Phrase Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Input */}
            <div className="title-card">
              <div className="card-header">Your card</div>
              <div className="card-body space-y-3.5">
                <div>
                  <label className="title-input-label" htmlFor="card-title">Title</label>
                  <input
                    id="card-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input-field"
                    placeholder="Name your card…"
                  />
                </div>
                <div>
                  <label className="title-input-label" htmlFor="card-subtitle">Subtitle</label>
                  <input
                    id="card-subtitle"
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="input-field"
                    placeholder="e.g. First to get 5 in a row wins"
                  />
                </div>
              </div>
            </div>

            {/* Phrase Input Component */}
            <PhraseInput
              phraseInput={phraseInput}
              phrases={phrases}
              onPhraseInputChange={handlePhraseInputChange}
              onAddSamplePhrases={handleAddSamplePhrases}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Right Column - Configuration and Generation */}
          <div className="space-y-6">
            {/* Grid Configuration */}
            <GridConfiguration
              gridSize={gridSize}
              freeSpace={freeSpace}
              randomize={randomize}
              identicalCopies={identicalCopies}
              dynamicResize={dynamicResize}
              maxChars={maxChars}
              fontSize={fontSize}
              copies={copies}
              onGridSizeChange={setGridSize}
              onFreeSpaceChange={setFreeSpace}
              onRandomizeChange={setRandomize}
              onIdenticalCopiesChange={setIdenticalCopies}
              onDynamicResizeChange={setDynamicResize}
              onMaxCharsChange={setMaxChars}
              onFontSizeChange={setFontSize}
              onCopiesChange={setCopies}
              hasCenter={hasCenter}
              textOverflowWarning={textOverflowWarning}
            />

            {/* PDF Generator */}
            <Suspense fallback={
              <div className="card">
                <div className="card-body text-center font-mono text-[10px] text-ink-2 py-6">
                  Loading PDF tools...
                </div>
              </div>
            }>
            <PDFSection
              hasEnoughPhrases={hasEnoughPhrases}
              requiredCells={requiredCells}
              gridSize={gridSize}
              freeSpace={freeSpace}
              phrases={phrases}
              title={title}
              subtitle={subtitle}
              setSubtitle={setSubtitle}
              copies={copies}
              dynamicResize={dynamicResize}
              fontSize={fontSize}
              generateBingoCard={generateBingoCard}
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
            </Suspense>

            {/* Pro Tips */}
            <ProTips />
            
            {/* Sidebar Ad */}
            <AdBanner slot="" style={{ marginTop: '20px' }} />
          </div>
        </div>
      </main>
      
      {/* Bottom Banner Ad */}
      <AdBanner slot="" style={{ marginTop: '40px', marginBottom: '20px' }} />

      <BugReportButton />
    </div>
  );
}

export default App;
