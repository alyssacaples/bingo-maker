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
              placeholder="Type your bingo phrases here...&#10;&#10;Examples:&#10;Has traveled to more than 3 countries&#10;Speaks more than one language&#10;Has a hidden talent&#10;&#10;Or use commas: Has traveled abroad, Speaks multiple languages, Has hidden talent"
            />
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Icebreakers & Party Games</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onAddSamplePhrases('icebreakers')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Get to Know You
                </button>
                <button
                  onClick={() => onAddSamplePhrases('party-icebreakers')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Party Icebreakers
                </button>
                <button
                  onClick={() => onAddSamplePhrases('office-party')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Office Party
                </button>
                <button
                  onClick={() => onAddSamplePhrases('college-life')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  College Life
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Special Events</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onAddSamplePhrases('wedding-reception')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Wedding Reception
                </button>
                <button
                  onClick={() => onAddSamplePhrases('baby-shower')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Baby Shower
                </button>
                <button
                  onClick={() => onAddSamplePhrases('classroom-activities')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Classroom Fun
                </button>
                <button
                  onClick={() => onAddSamplePhrases('holiday-traditions')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Holiday Traditions
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Seasonal Activities</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onAddSamplePhrases('summer-bucketlist')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Summer Bucket List
                </button>
                <button
                  onClick={() => onAddSamplePhrases('fall-activities')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Fall Activities
                </button>
                <button
                  onClick={() => onAddSamplePhrases('winter-activities')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Winter Activities
                </button>
                <button
                  onClick={() => onAddSamplePhrases('spring-activities')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Spring Activities
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Hobbies & Interests</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onAddSamplePhrases('book-reading')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Reading Challenge
                </button>
                <button
                  onClick={() => onAddSamplePhrases('acclaimed-books')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Acclaimed Books
                </button>
                <button
                  onClick={() => onAddSamplePhrases('movies-2025')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Popular Movies
                </button>
                <button
                  onClick={() => onAddSamplePhrases('hiking')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Hiking Adventures
                </button>
                <button
                  onClick={() => onAddSamplePhrases('workout-fitness')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Fitness Challenge
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Experiences</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onAddSamplePhrases('travel-experiences')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Travel Adventures
                </button>
                <button
                  onClick={() => onAddSamplePhrases('food-adventures')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Foodie Adventures
                </button>
                <button
                  onClick={() => onAddSamplePhrases('numbers')}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Numbers
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={onClearAll}
                className="btn-secondary text-sm"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Clear All
              </button>
            </div>
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
