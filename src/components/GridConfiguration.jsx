import React from 'react';
import { Settings, Grid3X3 } from 'lucide-react';

const GridConfiguration = ({ 
  gridSize, 
  freeSpace, 
  randomize, 
  identicalCopies,
  dynamicResize, 
  maxChars, 
  fontSize,
  copies,
  onGridSizeChange,
  onFreeSpaceChange,
  onRandomizeChange,
  onIdenticalCopiesChange,
  onDynamicResizeChange,
  onMaxCharsChange,
  onFontSizeChange,
  onCopiesChange,
  hasCenter,
  textOverflowWarning
}) => {
  return (
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
          <div className="grid grid-cols-3 gap-4 px-2 py-4">
            {[3, 4, 5].map(size => (
              <button
                key={size}
                onClick={() => onGridSizeChange(size)}
                className={`grid-size-btn ${
                  gridSize === size ? 'selected' : ''
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
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Free space in center
              </label>
              {!hasCenter && (
                <span className="text-xs text-gray-500 mt-1">
                  Not available for 4×4 grids (no center cell)
                </span>
              )}
            </div>
            <input
              type="checkbox"
              checked={freeSpace && hasCenter}
              onChange={(e) => onFreeSpaceChange(e.target.checked)}
              disabled={!hasCenter}
              className={`w-4 h-4 rounded focus:ring-primary-500 ${
                hasCenter 
                  ? 'text-primary-600' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Randomize order of phrases
            </label>
            <input
              type="checkbox"
              checked={randomize}
              onChange={(e) => onRandomizeChange(e.target.checked)}
              className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Generate identical copies
              </label>
              <span className="text-xs text-gray-500 mt-1">
                When checked, all copies will have the same phrase arrangement
              </span>
            </div>
            <input
              type="checkbox"
              checked={identicalCopies}
              onChange={(e) => onIdenticalCopiesChange(e.target.checked)}
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
              onChange={(e) => onDynamicResizeChange(e.target.checked)}
              className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
            />
          </div>
        </div>

        {!dynamicResize && (
          <div className="space-y-4">
            {/* Font Size Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size: {fontSize}px
              </label>
              <input
                type="range"
                min="8"
                max="20"
                value={fontSize}
                onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>8px</span>
                <span>20px</span>
              </div>
            </div>

            {/* Max Characters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Characters: {maxChars}
              </label>
              <input
                type="range"
                min="10"
                max="80"
                value={maxChars}
                onChange={(e) => onMaxCharsChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Text Overflow Warning */}
            {textOverflowWarning && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <h4 className="text-sm font-medium text-yellow-800">Text Overflow Warning</h4>
                    <p className="text-sm text-yellow-700 mt-1">{textOverflowWarning.message}</p>
                    {textOverflowWarning.suggestedMaxChars && (
                      <button
                        onClick={() => onMaxCharsChange(textOverflowWarning.suggestedMaxChars)}
                        className="text-sm text-yellow-800 font-medium hover:text-yellow-900 mt-1 underline"
                      >
                        Set to recommended {textOverflowWarning.suggestedMaxChars} characters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
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
            onChange={(e) => onCopiesChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="input-field"
          />
        </div>
      </div>
    </div>
  );
};

export default GridConfiguration;
