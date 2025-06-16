import React from 'react';

const ProTips = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h4 className="text-sm font-medium text-blue-900 mb-2">💡 Pro Tips</h4>
      <ul className="text-xs text-blue-800 space-y-1">
        <li>• Use line breaks for best phrase separation</li>
        <li>• Use more phrases than you need so each copy is unique</li>
        <li>• Dynamic sizing automatically adjusts font size</li>
        <li>• Fixed font size gives you precise control over text appearance</li>
        <li>• Watch for text overflow warnings when using fixed font sizes</li>
        <li>• "Randomize order" creates unique cards for each copy</li>
        <li>• "Identical copies" makes all cards have the same layout</li>
        <li>• Free space only available for 3×3 and 5×5 grids</li>
        <li>• 4×4 grids have no center cell, so no free space</li>
      </ul>
    </div>
  );
};

export default ProTips;
