import React, { useState } from 'react';
import { Palette, Layers, Grid, Sliders, Type, Printer } from 'lucide-react';
import { themes, applyTheme } from '../utils/themes';

const CardCustomization = ({
  subtitle,
  setSubtitle,
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

  const fontOptions = [
    { value: 'Helvetica-Bold', label: 'Helvetica Bold' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times-Roman', label: 'Times Roman' },
    { value: 'Courier', label: 'Courier' }
  ];

  const cellFontOptions = [
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times-Roman', label: 'Times Roman' },
    { value: 'Courier', label: 'Courier' }
  ];

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
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <Printer className="w-5 h-5 text-amber-700" />
          <div>
            <h4 className="text-sm font-semibold text-amber-900">Printer-Friendly Mode</h4>
            <p className="text-xs text-amber-700">Strips background colors & prints ink-safe B&W</p>
          </div>
        </div>
        <input
          type="checkbox"
          checked={printerFriendly}
          onChange={(e) => setPrinterFriendly(e.target.checked)}
          className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 cursor-pointer"
        />
      </div>

      {/* 1. Theme Presets */}
      <div>
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Palette className="w-4 h-4 mr-2 text-primary-600" /> Theme Presets
        </h4>
        <div className="grid grid-cols-4 gap-2">
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => handleThemeClick(theme)}
              disabled={printerFriendly}
              className={`relative h-12 rounded-xl border transition-all duration-200 overflow-hidden shadow-sm ${
                printerFriendly ? 'opacity-40 cursor-not-allowed' : 'hover:scale-[1.03] hover:shadow'
              } ${
                activeTheme === theme.id && !printerFriendly
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-gray-200'
              }`}
              title={theme.name}
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="h-2/3 flex">
                  <div className="flex-1" style={{ backgroundColor: theme.gradientColor1 || theme.backgroundColor }} />
                  <div className="flex-1" style={{ backgroundColor: theme.gradientColor2 || theme.backgroundColor }} />
                </div>
                <div className="h-1/3 flex border-t border-gray-100 bg-white items-center justify-center">
                  <span className="text-[9px] font-medium text-gray-700 truncate px-1">{theme.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Typography & Colors */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Type className="w-4 h-4 mr-2 text-primary-600" /> Typography & Colors
        </h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Title Font</label>
              <select
                value={titleFont}
                onChange={(e) => setTitleFont(e.target.value)}
                disabled={printerFriendly}
                className="input-field rounded-xl text-sm py-2"
              >
                {fontOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Cell Font</label>
              <select
                value={cellFont}
                onChange={(e) => setCellFont(e.target.value)}
                disabled={printerFriendly}
                className="input-field rounded-xl text-sm py-2"
              >
                {cellFontOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Title</label>
              <div className="flex items-center space-x-1">
                <input
                  type="color"
                  value={titleColor}
                  onChange={(e) => setTitleColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer overflow-hidden p-0"
                />
                <span className="text-xs text-gray-600 font-mono select-all truncate">{titleColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Subtitle</label>
              <div className="flex items-center space-x-1">
                <input
                  type="color"
                  value={subtitleColor}
                  onChange={(e) => setSubtitleColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer overflow-hidden p-0"
                />
                <span className="text-xs text-gray-600 font-mono select-all truncate">{subtitleColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Cell Text</label>
              <div className="flex items-center space-x-1">
                <input
                  type="color"
                  value={cellTextColor}
                  onChange={(e) => setCellTextColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer overflow-hidden p-0"
                />
                <span className="text-xs text-gray-600 font-mono select-all truncate">{cellTextColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Grid Borders & Corners */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Grid className="w-4 h-4 mr-2 text-primary-600" /> Grid Layout
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Grid Border Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                disabled={printerFriendly}
                className="w-10 h-10 rounded-xl border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                disabled={printerFriendly}
                className="input-field rounded-xl text-sm font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex justify-between text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                <span>Border Width</span>
                <span className="text-gray-500 font-normal">{borderWidth} pt</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={borderWidth}
                onChange={(e) => setBorderWidth(parseFloat(e.target.value))}
                disabled={printerFriendly}
                className="w-full accent-primary-600 cursor-pointer"
              />
            </div>

            <div>
              <label className="flex justify-between text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                <span>Corner Radius</span>
                <span className="text-gray-500 font-normal">{gridBorderRadius} pt</span>
              </label>
              <input
                type="range"
                min="0"
                max="24"
                step="2"
                value={gridBorderRadius}
                onChange={(e) => setGridBorderRadius(parseInt(e.target.value))}
                disabled={printerFriendly}
                className="w-full accent-primary-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Cell Background Config */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Layers className="w-4 h-4 mr-2 text-primary-600" /> Cell Styles
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Background Mode</label>
            <select
              value={cellBackgroundMode}
              onChange={(e) => setCellBackgroundMode(e.target.value)}
              disabled={printerFriendly}
              className="input-field rounded-xl text-sm py-2"
            >
              <option value="white">All White Cells</option>
              <option value="softTint">Soft Tint Overlay</option>
              <option value="alternating">Alternating Checkers</option>
            </select>
          </div>

          {cellBackgroundMode !== 'white' && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Cell Tint Color</label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={cellBackgroundTint}
                  onChange={(e) => setCellBackgroundTint(e.target.value)}
                  disabled={printerFriendly}
                  className="w-10 h-10 rounded-xl border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={cellBackgroundTint}
                  onChange={(e) => setCellBackgroundTint(e.target.value)}
                  disabled={printerFriendly}
                  className="input-field rounded-xl text-sm font-mono"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Free Space Customizable Text */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Palette className="w-4 h-4 mr-2 text-primary-600" /> Free Space Cell
        </h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Label Preset</label>
              <select
                value={freeSpacePreset}
                onChange={(e) => handleFreeSpacePresetChange(e.target.value)}
                className="input-field rounded-xl text-sm py-2"
              >
                {freeSpacePresets.map(preset => (
                  <option key={preset.value} value={preset.value}>{preset.label}</option>
                ))}
              </select>
            </div>

            {freeSpacePreset === 'custom' && (
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Custom Text</label>
                <input
                  type="text"
                  value={freeSpaceLabel}
                  onChange={(e) => handleCustomLabelChange(e.target.value)}
                  maxLength={12}
                  className="input-field rounded-xl text-sm py-2"
                  placeholder="Max 12 chars"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Background</label>
              <div className="flex items-center space-x-1">
                <input
                  type="color"
                  value={freeSpaceBackgroundColor}
                  onChange={(e) => setFreeSpaceBackgroundColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer overflow-hidden p-0"
                />
                <span className="text-xs text-gray-600 font-mono truncate">{freeSpaceBackgroundColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Font Color</label>
              <div className="flex items-center space-x-1">
                <input
                  type="color"
                  value={freeSpaceFontColor}
                  onChange={(e) => setFreeSpaceFontColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer overflow-hidden p-0"
                />
                <span className="text-xs text-gray-600 font-mono truncate">{freeSpaceFontColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Background Gradients & Colors */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Sliders className="w-4 h-4 mr-2 text-primary-600" /> Background style
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-all duration-200">
            <span className="text-sm text-gray-600 font-medium">Use Gradient Background</span>
            <input
              type="checkbox"
              checked={useGradient}
              onChange={(e) => setUseGradient(e.target.checked)}
              disabled={printerFriendly}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 cursor-pointer"
            />
          </div>

          {!useGradient ? (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Solid Color</label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  disabled={printerFriendly}
                  className="w-10 h-10 rounded-xl border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  disabled={printerFriendly}
                  className="input-field rounded-xl text-sm font-mono"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Direction</label>
                <select
                  value={gradientDirection}
                  onChange={(e) => setGradientDirection(e.target.value)}
                  disabled={printerFriendly}
                  className="input-field rounded-xl text-xs py-1.5 bg-white"
                >
                  <option value="vertical">Vertical</option>
                  <option value="horizontal">Horizontal</option>
                  <option value="diagonal">Diagonal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Color 1 (Start)</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={gradientColor1}
                    onChange={(e) => setGradientColor1(e.target.value)}
                    disabled={printerFriendly}
                    className="w-8 h-8 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={gradientColor1}
                    onChange={(e) => setGradientColor1(e.target.value)}
                    disabled={printerFriendly}
                    className="input-field rounded-lg text-xs font-mono py-1 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Color 2 (Middle)</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={gradientColor2}
                    onChange={(e) => setGradientColor2(e.target.value)}
                    disabled={printerFriendly}
                    className="w-8 h-8 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={gradientColor2}
                    onChange={(e) => setGradientColor2(e.target.value)}
                    disabled={printerFriendly}
                    className="input-field rounded-lg text-xs font-mono py-1 bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-1.5 border-t border-gray-200 mt-2">
                <span className="text-xs text-gray-600 font-medium">Use 3-Stop Gradient</span>
                <input
                  type="checkbox"
                  checked={use3rdColor}
                  onChange={(e) => {
                    setUse3rdColor(e.target.checked);
                    if (!e.target.checked) setGradientColor3(null);
                    else if (!gradientColor3) setGradientColor3('#C7D2FE'); // Default nice pastel stop
                  }}
                  disabled={printerFriendly}
                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 cursor-pointer"
                />
              </div>

              {use3rdColor && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Color 3 (End)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={gradientColor3 || '#C7D2FE'}
                      onChange={(e) => setGradientColor3(e.target.value)}
                      disabled={printerFriendly}
                      className="w-8 h-8 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={gradientColor3 || '#C7D2FE'}
                      onChange={(e) => setGradientColor3(e.target.value)}
                      disabled={printerFriendly}
                      className="input-field rounded-lg text-xs font-mono py-1 bg-white"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 7. Card Frame & Repeating Patterns */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="flex items-center text-sm font-semibold text-gray-950 mb-3">
          <Layers className="w-4 h-4 mr-2 text-primary-600" /> Frame & Patterns
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-all duration-200">
            <div>
              <span className="text-sm text-gray-600 font-medium block">Card Mat Frame</span>
              <span className="text-xs text-gray-400">Adds white borders around the grid card</span>
            </div>
            <input
              type="checkbox"
              checked={cardMatEnabled}
              onChange={(e) => setCardMatEnabled(e.target.checked)}
              disabled={printerFriendly}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Repeating Pattern</label>
            <select
              value={backgroundPattern || ""}
              onChange={(e) => setBackgroundPattern(e.target.value || null)}
              disabled={printerFriendly}
              className="input-field rounded-xl text-sm py-2"
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
              <label className="flex justify-between text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                <span>Pattern Opacity</span>
                <span className="text-gray-500 font-normal">{Math.round(backgroundPatternOpacity * 100)}%</span>
              </label>
              <input
                type="range"
                min="0.05"
                max="0.5"
                step="0.05"
                value={backgroundPatternOpacity}
                onChange={(e) => setBackgroundPatternOpacity(parseFloat(e.target.value))}
                disabled={printerFriendly}
                className="w-full accent-primary-600 cursor-pointer"
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
          <Palette className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">Card Customization</h3>
        </div>
      </div>
      {content}
    </div>
  );
};

export default CardCustomization;
