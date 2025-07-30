import React, { useCallback } from 'react';
import './App.css';

// Import custom hooks
import usePhraseManager from './hooks/usePhraseManager';
import useBingoConfiguration from './hooks/useBingoConfiguration';

// Import components
import Header from './components/Header';
import PhraseInput from './components/PhraseInput';
import GridConfiguration from './components/GridConfiguration';
import ProTips from './components/ProTips';
import PDFGenerator from './components/PDFGenerator';
import { BingoDocument } from './components/BingoDocument';
import BugReportButton from './components/BugReportButton';
import EnvDebugger from './components/EnvDebugger';

function App() {
  // Initialize hooks
  const {
    phraseInput,
    phrases,
    handlePhraseInputChange,
    addSamplePhrases,
    getSuggestedTitle,
    clearAll
  } = usePhraseManager();

  const {
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
  } = useBingoConfiguration();

  // Enhanced sample phrases handler
  const handleAddSamplePhrases = useCallback((type) => {
    const suggestedTitle = addSamplePhrases(type);
    setTitle(suggestedTitle);
  }, [addSamplePhrases, setTitle]);

  // Enhanced clear handler
  const handleClearAll = useCallback(() => {
    clearAll();
    setTitle('BINGO');
  }, [clearAll, setTitle]);

  // Check if we have enough phrases
  const hasEnoughPhrases = phrases.length >= requiredCells;
  
  // Get text overflow warning
  const textOverflowWarning = getTextOverflowWarning();

  // Create BingoDocument component with current settings
  const BingoDocumentWithProps = useCallback(() => (
    <BingoDocument
      copies={copies}
      title={title}
      gridSize={gridSize}
      freeSpace={freeSpace}
      dynamicResize={dynamicResize}
      fontSize={fontSize}
      generateBingoCard={(cardIndex) => generateBingoCard(phrases, cardIndex)}
    />
  ), [copies, title, gridSize, freeSpace, dynamicResize, fontSize, generateBingoCard, phrases]);

  return (
    <div className="App min-h-screen bg-blue-25">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Phrase Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Input */}
            <div className="title-card">
              <div className="card-header">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">Bingo Card Title</span>
                </div>
              </div>
              <div className="card-body">
                <label className="title-input-label">
                  Enter your bingo card title or use Bingo by default
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-field"
                  placeholder="Enter your bingo card title..."
                />
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
            <PDFGenerator
              hasEnoughPhrases={hasEnoughPhrases}
              requiredCells={requiredCells}
              gridSize={gridSize}
              freeSpace={freeSpace}
              phrases={phrases}
              title={title}
              BingoDocument={BingoDocumentWithProps}
            />

            {/* Pro Tips */}
            <ProTips />
          </div>
        </div>
      </main>

      {/* Bug reporting and debugging */}
      <BugReportButton />
      <EnvDebugger />
    </div>
  );
}

export default App;
