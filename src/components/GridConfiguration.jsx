import { AlertTriangle } from 'lucide-react';

// Defined at module scope on purpose. While this lived inside GridConfiguration
// it was a brand new component type on every render, so React tore down and
// rebuilt the checkbox each time one was toggled and focus fell back to <body>.
// Toggling with the keyboard meant losing your place on every single option.
const Option = ({ label, hint, checked, onChange, disabled }) => (
  <div className="flex items-start justify-between gap-3 py-2.5 border-b border-rule last:border-b-0">
    <span className="flex flex-col">
      <span className="text-[14px] text-ink">{label}</span>
      {hint && <span className="text-[12px] text-ink-2 mt-0.5">{hint}</span>}
    </span>
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange(e.target.checked)}
      className="custom-checkbox mt-0.5 flex-none disabled:opacity-40 disabled:cursor-not-allowed"
    />
  </div>
);

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
    <div className="card">
      <div className="card-header">Setup</div>
      <div className="card-body space-y-5">

        <div>
          <label className="title-input-label">Grid size</label>
          <div className="grid grid-cols-3 gap-0.5">
            {[3, 4, 5].map(size => (
              <button
                key={size}
                type="button"
                onClick={() => onGridSizeChange(size)}
                aria-pressed={gridSize === size}
                className={`grid-size-btn ${gridSize === size ? 'selected' : ''}`}
              >
                {size}×{size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Option
            label="Free space in center"
            hint={!hasCenter ? 'Not available on 4×4 grids' : null}
            checked={freeSpace && hasCenter}
            onChange={onFreeSpaceChange}
            disabled={!hasCenter}
          />
          <Option
            label="Randomize order of phrases"
            checked={randomize}
            onChange={onRandomizeChange}
          />
          <Option
            label="Generate identical copies"
            hint="Every copy gets the same phrase arrangement"
            checked={identicalCopies}
            onChange={onIdenticalCopiesChange}
          />
          <Option
            label="Dynamic text sizing"
            checked={dynamicResize}
            onChange={onDynamicResizeChange}
          />
        </div>

        {!dynamicResize && (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between title-input-label">
                <span>Font size</span>
                <span>{fontSize}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="20"
                value={fontSize}
                onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
                className="custom-range"
              />
            </div>

            <div>
              <div className="flex justify-between title-input-label">
                <span>Max characters</span>
                <span>{maxChars}</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={maxChars}
                onChange={(e) => onMaxCharsChange(parseInt(e.target.value))}
                className="custom-range"
              />
            </div>

            {textOverflowWarning && (
              <div className="border border-accent p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent flex-none mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[13px] text-ink font-semibold m-0">Text may overflow</p>
                    <p className="text-[13px] text-ink-2 mt-1 mb-0">{textOverflowWarning.message}</p>
                    {textOverflowWarning.suggestedMaxChars && (
                      <button
                        type="button"
                        onClick={() => onMaxCharsChange(textOverflowWarning.suggestedMaxChars)}
                        className="font-mono text-[10px] text-accent underline mt-1.5"
                      >
                        Use {textOverflowWarning.suggestedMaxChars} characters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div>
          <label className="title-input-label" htmlFor="copies">Number of copies</label>
          <input
            id="copies"
            type="number"
            min="1"
            max="50"
            value={copies}
            onChange={(e) =>
              onCopiesChange(Math.min(50, Math.max(1, parseInt(e.target.value, 10) || 1)))
            }
            className="input-field"
          />
        </div>
      </div>
    </div>
  );
};

export default GridConfiguration;
