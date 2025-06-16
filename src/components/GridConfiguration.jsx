import React from 'react';
import { Settings, Grid3X3 } from 'lucide-react';

const GridConfiguration = ({ 
  gridSize, 
  freeSpace, 
  randomize, 
  identicalCopies,
  dynamicResize, 
  maxChars, 
  copies,
  onGridSizeChange,
  onFreeSpaceChange,
  onRandomizeChange,
  onIdenticalCopiesChange,
  onDynamicResizeChange,
  onMaxCharsChange,
  onCopiesChange,
  hasCenter
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
          <div className="grid grid-cols-3 gap-2">
            {[3, 4, 5].map(size => (
              <button
                key={size}
                onClick={() => onGridSizeChange(size)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  gridSize === size 
                    ? 'border-primary-500 bg-primary-50 text-primary-700' 
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
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
