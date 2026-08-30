import { useState, useEffect } from 'react';
import { FileText, Plus, Trash2 } from 'lucide-react';
import { trackTemplateSelect } from '../utils/analytics';
import { templateTitles } from '../data/templates';

const travelOptions = [
  {
    "key": "amsterdam-travel",
    "label": "Amsterdam"
  },
  {
    "key": "athens-travel",
    "label": "Athens"
  },
  {
    "key": "austin-travel",
    "label": "Austin"
  },
  {
    "key": "australia-travel",
    "label": "Australia"
  },
  {
    "key": "bali-travel",
    "label": "Bali"
  },
  {
    "key": "banff-travel",
    "label": "Banff"
  },
  {
    "key": "bangkok-travel",
    "label": "Bangkok"
  },
  {
    "key": "barcelona-travel",
    "label": "Barcelona"
  },
  {
    "key": "berlin-travel",
    "label": "Berlin"
  },
  {
    "key": "boston-travel",
    "label": "Boston"
  },
  {
    "key": "cartagena-travel",
    "label": "Cartagena"
  },
  {
    "key": "chicago-travel",
    "label": "Chicago"
  },
  {
    "key": "copenhagen-travel",
    "label": "Copenhagen"
  },
  {
    "key": "costa-rica-travel",
    "label": "Costa Rica"
  },
  {
    "key": "cusco-travel",
    "label": "Cusco"
  },
  {
    "key": "dublin-travel",
    "label": "Dublin"
  },
  {
    "key": "edinburgh-travel",
    "label": "Edinburgh"
  },
  {
    "key": "finland-travel",
    "label": "Finland"
  },
  {
    "key": "greece-travel",
    "label": "Greece"
  },
  {
    "key": "iceland-travel",
    "label": "Iceland"
  },
  {
    "key": "ireland-travel",
    "label": "Ireland"
  },
  {
    "key": "kyoto-travel",
    "label": "Kyoto"
  },
  {
    "key": "lisbon-travel",
    "label": "Lisbon"
  },
  {
    "key": "london-travel",
    "label": "London"
  },
  {
    "key": "los-angeles-travel",
    "label": "Los Angeles"
  },
  {
    "key": "marrakech-travel",
    "label": "Marrakech"
  },
  {
    "key": "maui-travel",
    "label": "Maui"
  },
  {
    "key": "mexico-city-travel",
    "label": "Mexico City"
  },
  {
    "key": "miami-travel",
    "label": "Miami"
  },
  {
    "key": "nashville-travel",
    "label": "Nashville"
  },
  {
    "key": "new-orleans-travel",
    "label": "New Orleans"
  },
  {
    "key": "new-york-city-travel",
    "label": "New York City"
  },
  {
    "key": "orlando-travel",
    "label": "Orlando"
  },
  {
    "key": "paris-travel",
    "label": "Paris"
  },
  {
    "key": "portland-travel",
    "label": "Portland"
  },
  {
    "key": "prague-travel",
    "label": "Prague"
  },
  {
    "key": "puerto-rico-travel",
    "label": "Puerto Rico"
  },
  {
    "key": "rome-travel",
    "label": "Rome"
  },
  {
    "key": "san-francisco-travel",
    "label": "San Francisco"
  },
  {
    "key": "san-juan-islands-travel",
    "label": "San Juan Islands"
  },
  {
    "key": "scotland-travel",
    "label": "Scotland"
  },
  {
    "key": "seattle-travel",
    "label": "Seattle"
  },
  {
    "key": "seoul-travel",
    "label": "Seoul"
  },
  {
    "key": "singapore-travel",
    "label": "Singapore"
  },
  {
    "key": "sydney-travel",
    "label": "Sydney"
  },
  {
    "key": "tokyo-travel",
    "label": "Tokyo"
  },
  {
    "key": "vancouver-bc-travel",
    "label": "Vancouver BC"
  },
  {
    "key": "vietnam-travel",
    "label": "Vietnam"
  }
];

const bookOptions = [
  {
    "key": "book-reading",
    "label": "Reading Challenge"
  },
  {
    "key": "acclaimed-books",
    "label": "Acclaimed Books"
  },
  {
    "key": "summer-stories-and-feelings",
    "label": "Summer Stories and Feelings"
  },
  {
    "key": "summer-reading-prompts",
    "label": "Summer Reading Prompts"
  },
  {
    "key": "more-summer-reading-prompts",
    "label": "More Summer Reading Prompts"
  },
  {
    "key": "teen-summer-reading",
    "label": "Teen Summer Reading"
  },
  {
    "key": "kids-summer-reading-bingo",
    "label": "Kids Summer Reading Bingo"
  },
  {
    "key": "summer-genre-challenge",
    "label": "Summer Genre Challenge"
  },
  {
    "key": "summer-reading-experiences",
    "label": "Summer Reading Experiences"
  },
  {
    "key": "elementary-summer-picks",
    "label": "Elementary Summer Picks"
  },
  {
    "key": "middle-school-summer-picks",
    "label": "Middle School Summer Picks"
  },
  {
    "key": "high-school-summer-picks",
    "label": "High School Summer Picks"
  },
  {
    "key": "nyt-fiction-bestsellers",
    "label": "NYT Fiction Bestsellers"
  },
  {
    "key": "most-anticipated-summer-2026",
    "label": "Most Anticipated Summer 2026"
  },
  {
    "key": "popular-book-club-picks",
    "label": "Popular Book Club Picks"
  },
  {
    "key": "pacific-northwest-books",
    "label": "Pacific Northwest Books"
  },
  {
    "key": "southern-books",
    "label": "Southern Books"
  },
  {
    "key": "new-england-books",
    "label": "New England Books"
  },
  {
    "key": "midwest-books",
    "label": "Midwest Books"
  },
  {
    "key": "california-books",
    "label": "California Books"
  }
];

const stateOptions = [
  {
    "key": "alaska-highlights",
    "label": "Alaska"
  },
  {
    "key": "arizona-highlights",
    "label": "Arizona"
  },
  {
    "key": "california-highlights",
    "label": "California"
  },
  {
    "key": "colorado-highlights",
    "label": "Colorado"
  },
  {
    "key": "florida-highlights",
    "label": "Florida"
  },
  {
    "key": "georgia-highlights",
    "label": "Georgia"
  },
  {
    "key": "hawaii-highlights",
    "label": "Hawaii"
  },
  {
    "key": "idaho-highlights",
    "label": "Idaho"
  },
  {
    "key": "louisiana-highlights",
    "label": "Louisiana"
  },
  {
    "key": "maine-highlights",
    "label": "Maine"
  },
  {
    "key": "massachusetts-highlights",
    "label": "Massachusetts"
  },
  {
    "key": "michigan-highlights",
    "label": "Michigan"
  },
  {
    "key": "minnesota-highlights",
    "label": "Minnesota"
  },
  {
    "key": "montana-highlights",
    "label": "Montana"
  },
  {
    "key": "nevada-highlights",
    "label": "Nevada"
  },
  {
    "key": "new-mexico-highlights",
    "label": "New Mexico"
  },
  {
    "key": "new-york-state-highlights",
    "label": "New York State"
  },
  {
    "key": "north-carolina-highlights",
    "label": "North Carolina"
  },
  {
    "key": "oregon-highlights",
    "label": "Oregon"
  },
  {
    "key": "pennsylvania-highlights",
    "label": "Pennsylvania"
  },
  {
    "key": "south-carolina-highlights",
    "label": "South Carolina"
  },
  {
    "key": "south-dakota-highlights",
    "label": "South Dakota"
  },
  {
    "key": "tennessee-highlights",
    "label": "Tennessee"
  },
  {
    "key": "texas-highlights",
    "label": "Texas"
  },
  {
    "key": "utah-highlights",
    "label": "Utah"
  },
  {
    "key": "vermont-highlights",
    "label": "Vermont"
  },
  {
    "key": "virginia-highlights",
    "label": "Virginia"
  },
  {
    "key": "washington-state-highlights",
    "label": "Washington State"
  },
  {
    "key": "wisconsin-highlights",
    "label": "Wisconsin"
  },
  {
    "key": "wyoming-highlights",
    "label": "Wyoming"
  }
];

const PhraseInput = ({ 
  phraseInput, 
  phrases, 
  onPhraseInputChange, 
  onAddSamplePhrases, 
  onClearAll,
  activeSlug
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState(activeSlug ?? null);

  // Follow whatever App says is loaded, so a template picked from the homepage
  // shortlist, or arrived at directly by URL, highlights its button here too.
  useEffect(() => {
    setSelectedTemplate(activeSlug ?? null);
  }, [activeSlug]);

  const handleSampleClick = (templateKey) => {
    // Single funnel for all 155 template buttons and the category dropdowns,
    // so one call here covers every way a template gets picked.
    trackTemplateSelect(templateKey, templateTitles[templateKey] || templateKey);
    setSelectedTemplate(templateKey);
    onAddSamplePhrases(templateKey);
  };

  const handleClearAll = () => {
    setSelectedTemplate(null);
    onClearAll();
  };

  // Date-based section ordering logic
  const now = new Date();
  const feb1_2026 = new Date('2026-02-01');
  const jan10_2026 = new Date('2026-01-10');
  const show2025WrappedAtTop = now < feb1_2026;
  const showHolidaySeasonalAtTop = now < jan10_2026;

  return (
    <div className="card animate-fade-in">
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-primary-600" />
          <h2 className="font-display text-[14px] uppercase tracking-[0.005em] text-ink">
            Bingo Phrases ({phrases.length})
          </h2>
        </div>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="title-input-label">
                Enter your phrases (one per line, or separated by commas/semicolons)
              </label>
              {phrases.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="btn-secondary text-sm whitespace-nowrap"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Clear all
                </button>
              )}
            </div>
            <textarea
              value={phraseInput}
              onChange={(e) => onPhraseInputChange(e.target.value)}
              className="input-field resize-none"
              rows={8}
              placeholder="Type your bingo phrases here...&#10;&#10;Examples:&#10;Has traveled to more than 3 countries&#10;Speaks more than one language&#10;Has a hidden talent&#10;&#10;Or use commas: Has traveled abroad, Speaks multiple languages, Has hidden talent"
            />
          </div>

          {phrases.length > 0 && (
            <div className="bg-ground-2 border border-rule p-3">
              <p className="title-input-label">Preview of detected phrases:</p>
              <div className="max-h-32 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                  {phrases.slice(0, 10).map((phrase, index) => (
                    <div key={index} className="text-ink truncate">
                      {index + 1}. {phrase}
                    </div>
                  ))}
                  {phrases.length > 10 && (
                    <div className="text-ink-2 italic">
                      ...and {phrases.length - 10} more
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            {show2025WrappedAtTop && (
              <div>
                <h4 className="title-input-label">2025 Wrapped</h4>
                <div className="btn-group">
                  <button
                    onClick={() => handleSampleClick('books-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'books-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Books
                  </button>
                  <button
                    onClick={() => handleSampleClick('movies-2025-new')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'movies-2025-new' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Movies
                  </button>
                  <button
                    onClick={() => handleSampleClick('tv-shows-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'tv-shows-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 TV Shows
                  </button>
                  <button
                    onClick={() => handleSampleClick('trends-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'trends-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Trends
                  </button>
                  <button
                    onClick={() => handleSampleClick('resolutions-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'resolutions-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Resolutions
                  </button>
                  <button
                    onClick={() => handleSampleClick('ultra-specific-resolutions')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'ultra-specific-resolutions' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Ultra Specific Resolutions
                  </button>
                </div>
              </div>
            )}

            {showHolidaySeasonalAtTop && (
              <div>
                <h4 className="title-input-label">Holiday/Seasonal</h4>
                <div className="btn-group">
                  <button
                    onClick={() => handleSampleClick('thanksgiving')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'thanksgiving' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Thanksgiving
                  </button>
                  <button
                    onClick={() => handleSampleClick('christmas-bucketlist')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'christmas-bucketlist' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Christmas Bucket List
                  </button>
                  <button
                    onClick={() => handleSampleClick('indoor-winter-adult')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'indoor-winter-adult' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Indoor Winter (Adult)
                  </button>
                  <button
                    onClick={() => handleSampleClick('indoor-winter-family')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'indoor-winter-family' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Indoor Winter (Family)
                  </button>
                  <button
                    onClick={() => handleSampleClick('outdoor-winter-adult')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'outdoor-winter-adult' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Outdoor Winter (Adult)
                  </button>
                  <button
                    onClick={() => handleSampleClick('outdoor-winter-family')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'outdoor-winter-family' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Outdoor Winter (Family)
                  </button>
                  <button
                    onClick={() => handleSampleClick('winter-adult-all')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'winter-adult-all' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Winter All (Adult)
                  </button>
                  <button
                    onClick={() => handleSampleClick('winter-family-all')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'winter-family-all' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Winter All (Family)
                  </button>
                  <button
                    onClick={() => handleSampleClick('family-gathering')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'family-gathering' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Family Gathering
                  </button>
                </div>
              </div>
            )}

            <div>
              <h4 className="title-input-label">Icebreakers & Party Games</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('icebreakers')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'icebreakers' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Get to Know You
                </button>
                <button
                  onClick={() => handleSampleClick('party-icebreakers')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'party-icebreakers' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Party Icebreakers
                </button>
                <button
                  onClick={() => handleSampleClick('deep-questions')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'deep-questions' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Deep Questions
                </button>
                <button
                  onClick={() => handleSampleClick('office-party')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'office-party' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Office Party
                </button>
                <button
                  onClick={() => handleSampleClick('college-life')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'college-life' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  College Life
                </button>
                <button
                  onClick={() => handleSampleClick('alma-maters')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'alma-maters' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Alma Maters
                </button>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">Special Events</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('wedding-reception')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'wedding-reception' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Wedding Reception
                </button>
                <button
                  onClick={() => handleSampleClick('baby-shower')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'baby-shower' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Baby Shower
                </button>
                <button
                  onClick={() => handleSampleClick('classroom-activities')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'classroom-activities' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Classroom Fun
                </button>
                <button
                  onClick={() => handleSampleClick('holiday-traditions')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'holiday-traditions' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Holiday Traditions
                </button>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">Seasonal Activities</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('summer-bucketlist')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'summer-bucketlist' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Summer Bucket List
                </button>
                <button
                  onClick={() => handleSampleClick('fall-activities')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'fall-activities' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Fall Activities
                </button>
                <button
                  onClick={() => handleSampleClick('winter-activities')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'winter-activities' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Winter Activities
                </button>
                <button
                  onClick={() => handleSampleClick('spring-activities')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'spring-activities' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Spring Activities
                </button>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">Book & Reading Challenges</h4>
              <div className="bg-ground-2 border border-rule p-3 mb-3">
                <label htmlFor="book-preset-select" className="title-input-label">
                  Select a Challenge or Genre
                </label>
                <select
                  id="book-preset-select"
                  value={bookOptions.some(opt => opt.key === selectedTemplate) ? selectedTemplate : ""}
                  onChange={(e) => {
                    if (e.target.value) handleSampleClick(e.target.value);
                  }}
                  className="input-field cursor-pointer"
                >
                  <option value="">Select a reading template...</option>
                  {bookOptions.map(opt => (
                    <option key={opt.key} value={opt.key}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">Hobbies & Interests</h4>
              <div className="btn-group">
                
                <button
                  onClick={() => handleSampleClick('movies-2025')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'movies-2025' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Popular Movies
                </button>
                <button
                  onClick={() => handleSampleClick('hiking')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'hiking' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Hiking Adventures
                </button>
                <button
                  onClick={() => handleSampleClick('multi-day-backpacking')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'multi-day-backpacking' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Multi-Day Backpacking
                </button>
                <button
                  onClick={() => handleSampleClick('bouldering-gym')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'bouldering-gym' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Bouldering Gym
                </button>
                <button
                  onClick={() => handleSampleClick('progression-fantasy')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'progression-fantasy' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Progression Fantasy & LitRPG
                </button>
                <button
                  onClick={() => handleSampleClick('crafting-fiber-arts')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'crafting-fiber-arts' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Crafting & Fiber Arts
                </button>
                <button
                  onClick={() => handleSampleClick('workout-fitness')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'workout-fitness' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Fitness Challenge
                </button>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">Experiences</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('travel-experiences')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'travel-experiences' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Travel Adventures
                </button>
                <button
                  onClick={() => handleSampleClick('food-adventures')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'food-adventures' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Foodie Adventures
                </button>
                <button
                  onClick={() => handleSampleClick('fast-food-brands')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'fast-food-brands' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Fast Food Chains
                </button>
                <button
                  onClick={() => handleSampleClick('vacation-styles')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'vacation-styles' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Types of Vacation
                </button>
                <button
                  onClick={() => handleSampleClick('numbers')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'numbers' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Numbers
                </button>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">PNW & Outdoors</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('washington-trails')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'washington-trails' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Washington Trails
                </button>
                <button
                  onClick={() => handleSampleClick('backpacking-gear')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'backpacking-gear' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Backpacking Gear
                </button>
                 <button
                  onClick={() => handleSampleClick('after-work-seattle')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'after-work-seattle' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Seattle Hiking
                </button>
                <button
                  onClick={() => handleSampleClick('garmin-hike-stats')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'garmin-hike-stats' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Garmin & Hiking Stats
                </button>
                <button
                  onClick={() => handleSampleClick('enchantments-day')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'enchantments-day' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Enchantments Day Hike
                </button>
                <button
                  onClick={() => handleSampleClick('snow-camping-winter')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'snow-camping-winter' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Winter Snow Camping
                </button>
                <button
                  onClick={() => handleSampleClick('pnw-ski-season')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'pnw-ski-season' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  PNW Ski Season
                </button>
                <button
                  onClick={() => handleSampleClick('san-juan-islands')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'san-juan-islands' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  San Juan Islands Weekend
                </button>
                <button
                  onClick={() => handleSampleClick('battling-seattle-freeze')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'battling-seattle-freeze' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Seattle Freeze
                </button>
                <button
                  onClick={() => handleSampleClick('road-trip-west')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'road-trip-west' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  West Coast Road Trip
                </button>
              </div>
            </div>

            {!showHolidaySeasonalAtTop && (
              <div>
                <h4 className="title-input-label">Holiday/Seasonal</h4>
                <div className="btn-group">
                  <button
                    onClick={() => handleSampleClick('thanksgiving')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'thanksgiving' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Thanksgiving
                  </button>
                  <button
                    onClick={() => handleSampleClick('christmas-bucketlist')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'christmas-bucketlist' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Christmas Bucket List
                  </button>
                  <button
                    onClick={() => handleSampleClick('indoor-winter-adult')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'indoor-winter-adult' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Indoor Winter (Adult)
                  </button>
                  <button
                    onClick={() => handleSampleClick('indoor-winter-family')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'indoor-winter-family' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Indoor Winter (Family)
                  </button>
                  <button
                    onClick={() => handleSampleClick('outdoor-winter-adult')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'outdoor-winter-adult' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Outdoor Winter (Adult)
                  </button>
                  <button
                    onClick={() => handleSampleClick('outdoor-winter-family')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'outdoor-winter-family' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Outdoor Winter (Family)
                  </button>
                  <button
                    onClick={() => handleSampleClick('winter-adult-all')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'winter-adult-all' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Winter All (Adult)
                  </button>
                  <button
                    onClick={() => handleSampleClick('winter-family-all')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'winter-family-all' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Winter All (Family)
                  </button>
                  <button
                    onClick={() => handleSampleClick('family-gathering')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'family-gathering' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Family Gathering
                  </button>
                </div>
              </div>
            )}

            {!show2025WrappedAtTop && (
              <div>
                <h4 className="title-input-label">2025 Wrapped</h4>
                <div className="btn-group">
                  <button
                    onClick={() => handleSampleClick('books-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'books-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Books
                  </button>
                  <button
                    onClick={() => handleSampleClick('movies-2025-new')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'movies-2025-new' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Movies
                  </button>
                  <button
                    onClick={() => handleSampleClick('tv-shows-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'tv-shows-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 TV Shows
                  </button>
                  <button
                    onClick={() => handleSampleClick('trends-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'trends-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Trends
                  </button>
                  <button
                    onClick={() => handleSampleClick('resolutions-2025')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'resolutions-2025' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    2025 Resolutions
                  </button>
                  <button
                    onClick={() => handleSampleClick('ultra-specific-resolutions')}
                    className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'ultra-specific-resolutions' ? 'selected' : ''}`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Ultra Specific Resolutions
                  </button>
                </div>
              </div>
            )}

            <div>
              <h4 className="title-input-label">Places & Travel</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-ground-2 border border-rule p-3">
                <div>
                  <label htmlFor="travel-preset-select" className="title-input-label">
                    Travel Destinations
                  </label>
                  <select
                    id="travel-preset-select"
                    value={travelOptions.some(opt => opt.key === selectedTemplate) ? selectedTemplate : ""}
                    onChange={(e) => {
                      if (e.target.value) handleSampleClick(e.target.value);
                    }}
                    className="input-field cursor-pointer"
                  >
                    <option value="">Select a city or country...</option>
                    {travelOptions.map(opt => (
                      <option key={opt.key} value={opt.key}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="state-preset-select" className="title-input-label">
                    US State Highlights
                  </label>
                  <select
                    id="state-preset-select"
                    value={stateOptions.some(opt => opt.key === selectedTemplate) ? selectedTemplate : ""}
                    onChange={(e) => {
                      if (e.target.value) handleSampleClick(e.target.value);
                    }}
                    className="input-field cursor-pointer"
                  >
                    <option value="">Select a US state...</option>
                    {stateOptions.map(opt => (
                      <option key={opt.key} value={opt.key}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">2026 Wrapped</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('movies-out-now-2026')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'movies-out-now-2026' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  2026 Movies Out Now
                </button>
                <button
                  onClick={() => handleSampleClick('movies-coming-soon-2026')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'movies-coming-soon-2026' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  2026 Movies Coming Soon
                </button>
                <button
                  onClick={() => handleSampleClick('hit-songs-2026')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'hit-songs-2026' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  2026 Hit Songs
                </button>
                <button
                  onClick={() => handleSampleClick('artists-2026')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'artists-2026' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  2026 Artists
                </button>
                <button
                  onClick={() => handleSampleClick('albums-forward-2026')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'albums-forward-2026' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  2026 Albums
                </button>
              </div>
            </div>

            <div>
              <h4 className="title-input-label">Good News</h4>
              <div className="btn-group">
                <button
                  onClick={() => handleSampleClick('happy-news-2026')}
                  className={`btn-secondary text-sm sample-btn ${selectedTemplate === 'happy-news-2026' ? 'selected' : ''}`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Happy News 2026
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhraseInput;
