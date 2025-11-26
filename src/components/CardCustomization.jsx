import React, { useState } from 'react';
import { Palette } from 'lucide-react';
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
  compact = false
}) => {
  const [activeTheme, setActiveTheme] = useState(null);

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
      setFreeSpaceFontColor
    });
    setActiveTheme(theme.id);
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

  const content = (
    <div className={compact ? "space-y-4" : "card-body space-y-6"}>
        {/* Theme Presets */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Theme Presets
          </label>
          <div className="grid grid-cols-3 gap-3">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => handleThemeClick(theme)}
                className={`relative h-16 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md overflow-hidden ${
                  activeTheme === theme.id
                    ? 'border-primary-600 shadow-md scale-105 ring-2 ring-primary-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                title={theme.name}
              >
                <div className="absolute inset-0 flex">
                  <div
                    className="flex-1"
                    style={{ backgroundColor: theme.gradientColor1 }}
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: theme.gradientColor2 }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Title Font */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title Font
          </label>
          <select
            value={titleFont}
            onChange={(e) => setTitleFont(e.target.value)}
            className="input-field rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
          >
            {fontOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Title Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title Color
          </label>
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
              <input
                type="color"
                value={titleColor}
                onChange={(e) => setTitleColor(e.target.value)}
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: titleColor }}
              />
            </div>
            <input
              type="text"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
              className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Cell Font */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cell Font
          </label>
          <select
            value={cellFont}
            onChange={(e) => setCellFont(e.target.value)}
            className="input-field rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
          >
            {cellFontOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Background
          </label>
          
          {/* Toggle between Solid and Gradient */}
          <div className="flex items-center justify-between mb-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200">
            <span className="text-sm text-gray-600 font-medium">Use Gradient</span>
            <input
              type="checkbox"
              checked={useGradient}
              onChange={(e) => setUseGradient(e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded-lg focus:ring-primary-500 transition-all duration-200 hover:scale-110 cursor-pointer"
            />
          </div>

          {!useGradient ? (
            /* Solid Color */
            <div>
              <label className="block text-xs text-gray-600 mb-2">Solid Color</label>
                <div className="flex items-center space-x-3">
                  <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                    />
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: backgroundColor }}
                    />
                  </div>
                  <input
                    type="text"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
                    placeholder="#FFFFFF"
                  />
                </div>
            </div>
          ) : (
            /* Gradient Colors */
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-2">Gradient Start Color</label>
                <div className="flex items-center space-x-3">
                  <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
                    <input
                      type="color"
                      value={gradientColor1}
                      onChange={(e) => setGradientColor1(e.target.value)}
                      className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                    />
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: gradientColor1 }}
                    />
                  </div>
                  <input
                    type="text"
                    value={gradientColor1}
                    onChange={(e) => setGradientColor1(e.target.value)}
                    className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
                    placeholder="#FFFFFF"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2">Gradient End Color</label>
                <div className="flex items-center space-x-3">
                  <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
                    <input
                      type="color"
                      value={gradientColor2}
                      onChange={(e) => setGradientColor2(e.target.value)}
                      className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                    />
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: gradientColor2 }}
                    />
                  </div>
                  <input
                    type="text"
                    value={gradientColor2}
                    onChange={(e) => setGradientColor2(e.target.value)}
                    className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
                    placeholder="#E0E7FF"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Border Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Border Color
          </label>
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: borderColor }}
              />
            </div>
            <input
              type="text"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
              placeholder="#1e40af"
            />
          </div>
        </div>

        {/* Free Space Background Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Free Space Background
          </label>
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
              <input
                type="color"
                value={freeSpaceBackgroundColor}
                onChange={(e) => setFreeSpaceBackgroundColor(e.target.value)}
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: freeSpaceBackgroundColor }}
              />
            </div>
            <input
              type="text"
              value={freeSpaceBackgroundColor}
              onChange={(e) => setFreeSpaceBackgroundColor(e.target.value)}
              className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
              placeholder="#dbeafe"
            />
          </div>
        </div>

        {/* Free Space Font Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Free Space Font Color
          </label>
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-full border-3 border-gray-300 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95 overflow-hidden">
              <input
                type="color"
                value={freeSpaceFontColor}
                onChange={(e) => setFreeSpaceFontColor(e.target.value)}
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: freeSpaceFontColor }}
              />
            </div>
            <input
              type="text"
              value={freeSpaceFontColor}
              onChange={(e) => setFreeSpaceFontColor(e.target.value)}
              className="input-field flex-1 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:scale-[1.02]"
              placeholder="#1e40af"
            />
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

