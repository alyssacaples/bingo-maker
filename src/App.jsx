import React from 'react';

import Header from './components/Header';
import PhraseInput from './components/PhraseInput';
import TitleConfiguration from './components/TitleConfiguration';
import GridConfiguration from './components/GridConfiguration';
import PDFGenerator from './components/PDFGenerator';
import ProTips from './components/ProTips';
import { BingoDocument } from './components/BingoDocument';

import usePhraseManager from './hooks/usePhraseManager';
import useBingoConfiguration from './hooks/useBingoConfiguration';

const App = () => {
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
    gridSize,
    setGridSize,
    freeSpace,
    setFreeSpace,
    randomize,
    setRandomize,
    copies,
    setCopies,
    dynamicResize,
    setDynamicResize,
    maxChars,
    setMaxChars,
    generateBingoCard,
    requiredCells,
    hasCenter
  } = useBingoConfiguration();

  const hasEnoughPhrases = phrases.length >= requiredCells;

  // Create a bound version of generateBingoCard with current phrases
  const boundGenerateBingoCard = (cardIndex) => generateBingoCard(phrases, cardIndex);

  // Create BingoDocument component with all needed props
  const DocumentComponent = () => (
    <BingoDocument
      copies={copies}
      title={title}
      gridSize={gridSize}
      freeSpace={freeSpace}
      dynamicResize={dynamicResize}
      generateBingoCard={boundGenerateBingoCard}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            <PhraseInput
              phraseInput={phraseInput}
              phrases={phrases}
              onPhraseInputChange={handlePhraseInputChange}
              onAddSamplePhrases={addSamplePhrases}
              onClearAll={clearAll}
            />

            <TitleConfiguration
              title={title}
              onTitleChange={setTitle}
            />
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            
            <GridConfiguration
              gridSize={gridSize}
              freeSpace={freeSpace}
              randomize={randomize}
              dynamicResize={dynamicResize}
              maxChars={maxChars}
              copies={copies}
              hasCenter={hasCenter}
              onGridSizeChange={setGridSize}
              onFreeSpaceChange={setFreeSpace}
              onRandomizeChange={setRandomize}
              onDynamicResizeChange={setDynamicResize}
              onMaxCharsChange={setMaxChars}
              onCopiesChange={setCopies}
            />

            <PDFGenerator
              hasEnoughPhrases={hasEnoughPhrases}
              requiredCells={requiredCells}
              gridSize={gridSize}
              freeSpace={freeSpace}
              phrases={phrases}
              title={title}
              BingoDocument={DocumentComponent}
            />

            <ProTips />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
