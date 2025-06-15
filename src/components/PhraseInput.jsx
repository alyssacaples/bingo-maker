import React from 'react';
import { FileText, Plus, Trash2 } from 'lucide-react';

const PhraseInput = ({ 
  phraseInput, 
  phrases, 
  onPhraseInputChange, 
  onAddSamplePhrases, 
  onClearAll 
}) => {
  return (
    <div className="card animate-fade-in">
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-primary-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            Bingo Phrases ({phrases.length})
          </h2>
        </div>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your phrases (one per line, or separated by commas/semicolons)
            </label>
            <textarea
              value={phraseInput}
              onChange={(e) => onPhraseInputChange(e.target.value)}
              className="input-field resize-none"
              rows={8}
              placeholder="Type your bingo phrases here...&#10;&#10;Examples:&#10;Free parking&#10;Long checkout line&#10;Forgot shopping list&#10;&#10;Or use commas: Free parking, Long line, Forgot list"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onAddSamplePhrases('shopping')}
              className="btn-secondary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Shopping Bingo
            </button>
            <button
              onClick={() => onAddSamplePhrases('motivational')}
              className="btn-secondary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Motivational
            </button>
            <button
              onClick={() => onAddSamplePhrases('simple')}
              className="btn-secondary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Numbers
            </button>
            <button
              onClick={onClearAll}
              className="btn-secondary"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </button>
          </div>

          {phrases.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Preview of detected phrases:</p>
              <div className="max-h-32 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                  {phrases.slice(0, 10).map((phrase, index) => (
                    <div key={index} className="text-gray-700 truncate">
                      {index + 1}. {phrase}
                    </div>
                  ))}
                  {phrases.length > 10 && (
                    <div className="text-gray-500 italic">
                      ...and {phrases.length - 10} more
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhraseInput;
