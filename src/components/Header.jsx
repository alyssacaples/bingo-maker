import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-8 h-8 text-primary-600" />
          <h1 className="text-4xl font-bold text-gray-900 font-display">
            Bingo Card Maker
          </h1>
          <Sparkles className="w-8 h-8 text-primary-600" />
        </div>
        <p className="text-center text-gray-600 mt-2 text-lg">
          Create beautiful, customizable bingo cards in seconds
        </p>
      </div>
    </div>
  );
};

export default Header;
