import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = ({ activeTitle }) => {
  const hasActiveTitle = activeTitle && activeTitle !== 'BINGO' && activeTitle.trim() !== '';
  const displayTitle = hasActiveTitle ? activeTitle : 'Bingo Card Maker';
  const displaySubtitle = hasActiveTitle 
    ? 'Free custom printable card generator' 
    : 'Create beautiful, customizable bingo cards in seconds';

  return (
    <div className="header-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-center-col space-y-4">
          <div className="flex items-center space-x-3">
            <Sparkles className="header-icon animate-float" />
            <h1 className="header-title text-center">
              {displayTitle}
            </h1>
            <Sparkles className="header-icon animate-float" style={{animationDelay: '1s'}} />
          </div>
          <p className="header-subtitle text-center">
            {displaySubtitle}
          </p>
          <div className="header-accent-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
