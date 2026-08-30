import { useState } from 'react';
import { Palette, Layers, Grid, Sliders, Type, Printer } from 'lucide-react';
import { themes, applyTheme } from '../utils/themes';
import { TITLE_FONT_OPTIONS, CELL_FONT_OPTIONS } from '../utils/pdfFontOptions';

const CardCustomization = ({
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
  compact = false
}) => {
  const [activeTheme, setActiveTheme] = useState(null);
  const [use3rdColor, setUse3rdColor] = useState(gradientColor3 !== null);
  const [freeSpacePreset, setFreeSpacePreset] = useState(
    ['FREE SPACE', 'FREE', '★'].includes(freeSpaceLabel) ? freeSpaceLabel : 'custom'
  );

  const handleThemeClick = (theme) => {
    applyTheme(theme, {
      setTitleFont,
      setTitleColor,
      setCellFont,
      setBackgroundColor,
      setUseGradient,
      setGradientColor1,
      setGradientColor2,
      setBorderColor,
      setFreeSpaceBackgroundColor,
      setFreeSpaceFontColor,
      setCellTextColor,
      setSubtitleColor,
      setBorderWidth,
      setGridBorderRadius,
      setCellBackgroundMode,
      setCellBackgroundTint,
      setGradientDirection,
      setGradientColor3,
      setCardMatEnabled,
      setBackgroundPattern,
      setBackgroundPatternOpacity
    });
    setActiveTheme(theme.id);
    setUse3rdColor(theme.gradientColor3 !== null && theme.gradientColor3 !== undefined);
  };

  const fontOptions = TITLE_FONT_OPTIONS;
  const cellFontOptions = CELL_FONT_OPTIONS;

  const freeSpacePresets = [
    { value: 'FREE SPACE', label: 'FREE SPACE' },
    { value: 'FREE', label: 'FREE' },
    { value: '★', label: '★ Star' },
    { value: 'custom', label: 'Custom text...' }
  ];

  const handleFreeSpacePresetChange = (preset) => {
    setFreeSpacePreset(preset);
    if (preset !== 'custom') {
      setFreeSpaceLabel(preset);
    }
  };

  const handleCustomLabelChange = (text) => {
    const sanitized = text.substring(0, 12); // Hard character limit
    setFreeSpaceLabel(sanitized);
  };

  const content = (
    <div className={compact ? "space-y-6" : "card-body space-y-6"}>
      
      {/* 0. Printer Friendly Override */}
      <div className="border border-ink p-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Printer className="w-4 h-4 text-accent" />
          <div>
            <h4 className="text-[13px] font-semibold text-ink">Printer-Friendly Mode</h4>
            <p className="text-[12px] text-ink-2">Strips background colors & prints ink-safe B&W</p>
          </div>
        </div>
        <input
          type="checkbox"
          checked={printerFriendly}
          onChange={(e) => setPrinterFriendly(e.target.checked)}
          className="custom-checkbox w-4 h-4 cursor-pointer"
        />
      </div>

      {/* 1. Theme Presets */}
      <div>
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Palette className="w-3.5 h-3.5 mr-2 text-accent" /> Theme Presets
        </h4>
        <div className="grid grid-cols-4 gap-2">
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => handleThemeClick(theme)}
              disabled={printerFriendly}
              className={`relative h-12 border border-paper-ink overflow-hidden ${
                printerFriendly ? 'opacity-40 cursor-not-allowed' : 'hover:ring-1 hover:ring-ink'
              } ${
                activeTheme === theme.id && !printerFriendly ? 'ring-2 ring-accent' : ''
              }`}
              title={theme.name}
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="h-2/3 flex">
                  <div className="flex-1" style={{ backgroundColor: theme.gradientColor1 || theme.backgroundColor }} />
                  <div className="flex-1" style={{ backgroundColor: theme.gradientColor2 || theme.backgroundColor }} />
                </div>
                <div className="h-1/3 flex border-t border-paper-ink bg-paper items-center justify-center">
                  <span className="font-medium text-[8px] text-paper-ink truncate px-1">{theme.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Typography & Colors */}
      <div className="border-t border-rule pt-4">
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Type className="w-3.5 h-3.5 mr-2 text-accent" /> Typography & Colors
        </h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="title-input-label" htmlFor="cc-title-font">Title Font</label>
              <select id="cc-title-font"
                value={titleFont}
                onChange={(e) => setTitleFont(e.target.value)}
                disabled={printerFriendly}
                className="input-field text-sm py-2"
              >
                {fontOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="title-input-label" htmlFor="cc-cell-font">Cell Font</label>
              <select id="cc-cell-font"
                value={cellFont}
                onChange={(e) => setCellFont(e.target.value)}
                disabled={printerFriendly}
                className="input-field text-sm py-2"
              >
                {cellFontOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="title-input-label" htmlFor="cc-title">Title</label>
              <div className="flex items-center space-x-1">
                <input id="cc-title"
                  type="color"
                  value={titleColor}
                  onChange={(e) => setTitleColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                />
                <span className="text-[10px] text-ink-2 font-mono select-all truncate">{titleColor}</span>
              </div>
            </div>

            <div>
              <label className="title-input-label" htmlFor="cc-subtitle">Subtitle</label>
              <div className="flex items-center space-x-1">
                <input id="cc-subtitle"
                  type="color"
                  value={subtitleColor}
                  onChange={(e) => setSubtitleColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                />
                <span className="text-[10px] text-ink-2 font-mono select-all truncate">{subtitleColor}</span>
              </div>
            </div>

            <div>
              <label className="title-input-label" htmlFor="cc-cell-text">Cell Text</label>
              <div className="flex items-center space-x-1">
                <input id="cc-cell-text"
                  type="color"
                  value={cellTextColor}
                  onChange={(e) => setCellTextColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                />
                <span className="text-[10px] text-ink-2 font-mono select-all truncate">{cellTextColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Grid Borders & Corners */}
      <div className="border-t border-rule pt-4">
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Grid className="w-3.5 h-3.5 mr-2 text-accent" /> Grid Layout
        </h4>
        <div className="space-y-4">
          <div>
            <label className="title-input-label" htmlFor="cc-grid-border-color">Grid Border Color</label>
            <div className="flex items-center space-x-3">
              <input id="cc-grid-border-color"
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                disabled={printerFriendly}
                className="w-9 h-9 rounded-full border border-paper-ink cursor-pointer"
              />
              <input
                type="text"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                disabled={printerFriendly}
                className="input-field text-sm font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex justify-between title-input-label">
                <span>Border Width</span>
                <span className="text-ink-2 font-normal">{borderWidth} pt</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={borderWidth}
                onChange={(e) => setBorderWidth(parseFloat(e.target.value))}
                disabled={printerFriendly}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            <div>
              <label className="flex justify-between title-input-label">
                <span>Corner Radius</span>
                <span className="text-ink-2 font-normal">{gridBorderRadius} pt</span>
              </label>
              <input
                type="range"
                min="0"
                max="24"
                step="2"
                value={gridBorderRadius}
                onChange={(e) => setGridBorderRadius(parseInt(e.target.value))}
                disabled={printerFriendly}
                className="w-full accent-accent cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Cell Background Config */}
      <div className="border-t border-rule pt-4">
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Layers className="w-3.5 h-3.5 mr-2 text-accent" /> Cell Styles
        </h4>
        <div className="space-y-4">
          <div>
            <label className="title-input-label" htmlFor="cc-background-mode">Background Mode</label>
            <select id="cc-background-mode"
              value={cellBackgroundMode}
              onChange={(e) => setCellBackgroundMode(e.target.value)}
              disabled={printerFriendly}
              className="input-field text-sm py-2"
            >
              <option value="white">All White Cells</option>
              <option value="softTint">Soft Tint Overlay</option>
              <option value="alternating">Alternating Checkers</option>
            </select>
          </div>

          {cellBackgroundMode !== 'white' && (
            <div>
              <label className="title-input-label" htmlFor="cc-cell-tint-color">Cell Tint Color</label>
              <div className="flex items-center space-x-3">
                <input id="cc-cell-tint-color"
                  type="color"
                  value={cellBackgroundTint}
                  onChange={(e) => setCellBackgroundTint(e.target.value)}
                  disabled={printerFriendly}
                  className="w-9 h-9 rounded-full border border-paper-ink cursor-pointer"
                />
                <input
                  type="text"
                  value={cellBackgroundTint}
                  onChange={(e) => setCellBackgroundTint(e.target.value)}
                  disabled={printerFriendly}
                  className="input-field text-sm font-mono"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Free Space Customizable Text */}
      <div className="border-t border-rule pt-4">
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Palette className="w-3.5 h-3.5 mr-2 text-accent" /> Free Space Cell
        </h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="title-input-label" htmlFor="cc-label-preset">Label Preset</label>
              <select id="cc-label-preset"
                value={freeSpacePreset}
                onChange={(e) => handleFreeSpacePresetChange(e.target.value)}
                className="input-field text-sm py-2"
              >
                {freeSpacePresets.map(preset => (
                  <option key={preset.value} value={preset.value}>{preset.label}</option>
                ))}
              </select>
            </div>

            {freeSpacePreset === 'custom' && (
              <div>
                <label className="title-input-label" htmlFor="cc-custom-text">Custom Text</label>
                <input id="cc-custom-text"
                  type="text"
                  value={freeSpaceLabel}
                  onChange={(e) => handleCustomLabelChange(e.target.value)}
                  maxLength={12}
                  className="input-field text-sm py-2"
                  placeholder="Max 12 chars"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="title-input-label" htmlFor="cc-background">Background</label>
              <div className="flex items-center space-x-1">
                <input id="cc-background"
                  type="color"
                  value={freeSpaceBackgroundColor}
                  onChange={(e) => setFreeSpaceBackgroundColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                />
                <span className="text-[10px] text-ink-2 font-mono truncate">{freeSpaceBackgroundColor}</span>
              </div>
            </div>

            <div>
              <label className="title-input-label" htmlFor="cc-font-color">Font Color</label>
              <div className="flex items-center space-x-1">
                <input id="cc-font-color"
                  type="color"
                  value={freeSpaceFontColor}
                  onChange={(e) => setFreeSpaceFontColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                />
                <span className="text-[10px] text-ink-2 font-mono truncate">{freeSpaceFontColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Background Gradients & Colors */}
      <div className="border-t border-rule pt-4">
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Sliders className="w-3.5 h-3.5 mr-2 text-accent" /> Background style
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 hover:bg-ground-2">
            <span className="text-[13px] text-ink">Use Gradient Background</span>
            <input
              type="checkbox"
              checked={useGradient}
              onChange={(e) => setUseGradient(e.target.checked)}
              disabled={printerFriendly}
              className="custom-checkbox w-4 h-4 cursor-pointer"
            />
          </div>

          {!useGradient ? (
            <div>
              <label className="title-input-label" htmlFor="cc-solid-color">Solid Color</label>
              <div className="flex items-center space-x-3">
                <input id="cc-solid-color"
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-9 h-9 rounded-full border border-paper-ink cursor-pointer"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  disabled={printerFriendly}
                  className="input-field text-sm font-mono"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 bg-ground-2 p-3 border border-rule">
              <div>
                <label className="title-input-label" htmlFor="cc-direction">Direction</label>
                <select id="cc-direction"
                  value={gradientDirection}
                  onChange={(e) => setGradientDirection(e.target.value)}
                  disabled={printerFriendly}
                  className="input-field text-[12px] py-1.5"
                >
                  <option value="vertical">Vertical</option>
                  <option value="horizontal">Horizontal</option>
                  <option value="diagonal">Diagonal</option>
                </select>
              </div>

              <div>
                <label className="title-input-label" htmlFor="cc-color-1-start">Color 1 (Start)</label>
                <div className="flex items-center space-x-2">
                  <input id="cc-color-1-start"
                    type="color"
                    value={gradientColor1}
                    onChange={(e) => setGradientColor1(e.target.value)}
                    disabled={printerFriendly}
                    className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                  />
                  <input
                    type="text"
                    value={gradientColor1}
                    onChange={(e) => setGradientColor1(e.target.value)}
                    disabled={printerFriendly}
                    className="input-field text-[12px] font-mono py-1"
                  />
                </div>
              </div>

              <div>
                <label className="title-input-label" htmlFor="cc-color-2-middle">Color 2 (Middle)</label>
                <div className="flex items-center space-x-2">
                  <input id="cc-color-2-middle"
                    type="color"
                    value={gradientColor2}
                    onChange={(e) => setGradientColor2(e.target.value)}
                    disabled={printerFriendly}
                    className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                  />
                  <input
                    type="text"
                    value={gradientColor2}
                    onChange={(e) => setGradientColor2(e.target.value)}
                    disabled={printerFriendly}
                    className="input-field text-[12px] font-mono py-1"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-1.5 border-t border-rule mt-2">
                <span className="text-[12px] text-ink-2">Use 3-Stop Gradient</span>
                <input
                  type="checkbox"
                  checked={use3rdColor}
                  onChange={(e) => {
                    setUse3rdColor(e.target.checked);
                    if (!e.target.checked) setGradientColor3(null);
                    else if (!gradientColor3) setGradientColor3('#C7D2FE'); // Default nice pastel stop
                  }}
                  disabled={printerFriendly}
                  className="custom-checkbox w-4 h-4 cursor-pointer"
                />
              </div>

              {use3rdColor && (
                <div>
                  <label className="title-input-label" htmlFor="cc-color-3-end">Color 3 (End)</label>
                  <div className="flex items-center space-x-2">
                    <input id="cc-color-3-end"
                      type="color"
                      value={gradientColor3 || '#C7D2FE'}
                      onChange={(e) => setGradientColor3(e.target.value)}
                      disabled={printerFriendly}
                      className="w-7 h-7 rounded-full border border-paper-ink cursor-pointer overflow-hidden p-0"
                    />
                    <input
                      type="text"
                      value={gradientColor3 || '#C7D2FE'}
                      onChange={(e) => setGradientColor3(e.target.value)}
                      disabled={printerFriendly}
                      className="input-field text-[12px] font-mono py-1"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 7. Card Frame & Repeating Patterns */}
      <div className="border-t border-rule pt-4">
        <h4 className="flex items-center font-display font-normal text-[13px] uppercase tracking-[0.13em] text-ink-2 mb-3">
          <Layers className="w-3.5 h-3.5 mr-2 text-accent" /> Frame & Patterns
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 hover:bg-ground-2">
            <div>
              <span className="text-[13px] text-ink block">Card Mat Frame</span>
              <span className="text-[12px] text-ink-2">Adds white borders around the grid card</span>
            </div>
            <input
              type="checkbox"
              checked={cardMatEnabled}
              onChange={(e) => setCardMatEnabled(e.target.checked)}
              disabled={printerFriendly}
              className="custom-checkbox w-4 h-4 cursor-pointer"
            />
          </div>

          <div>
            <label className="title-input-label" htmlFor="cc-repeating-pattern">Repeating Pattern</label>
            <select id="cc-repeating-pattern"
              value={backgroundPattern || ""}
              onChange={(e) => setBackgroundPattern(e.target.value || null)}
              disabled={printerFriendly}
              className="input-field text-sm py-2"
            >
              <option value="">None</option>
              <option value="dots">Dots Pattern</option>
              <option value="hearts">Hearts Pattern</option>
              <option value="linen">Linen Texture</option>
              <option value="watercolor">Watercolor Effect</option>
              <option value="stripes">Stripes Pattern</option>
            </select>
          </div>

          {backgroundPattern && (
            <div>
              <label className="flex justify-between title-input-label">
                <span>Pattern Opacity</span>
                <span className="text-ink-2 font-normal">{Math.round(backgroundPatternOpacity * 100)}%</span>
              </label>
              <input
                type="range"
                min="0.05"
                max="0.5"
                step="0.05"
                value={backgroundPatternOpacity}
                onChange={(e) => setBackgroundPatternOpacity(parseFloat(e.target.value))}
                disabled={printerFriendly}
                className="w-full accent-accent cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

    </div>
  );

  if (compact) {
    return content;
  }

  return (
    <div className="card animate-slide-up">
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <Palette className="w-4 h-4 text-accent" />
          <h3 className="font-display font-bold text-[14px] uppercase tracking-[0.12em] text-ink">Card Customization</h3>
        </div>
      </div>
      {content}
    </div>
  );
};

export default CardCustomization;
