import React from 'react';

const ProTips = () => {
  return (
    <div className="pro-tips animate-slide-up">
      <div className="pro-tips-header">
        <h4 className="pro-tips-title">
          <span className="text-xl mr-2">💡</span>
          Pro Tips
        </h4>
      </div>
      <div className="pro-tips-body">
        <ul className="pro-tips-list">
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">Use line breaks for best phrase separation</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">Use more phrases than you need so each copy is unique</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">Dynamic sizing automatically adjusts font size</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">Fixed font size gives you precise control over text appearance</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">Watch for text overflow warnings when using fixed font sizes</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">"Randomize order" creates unique cards for each copy</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">"Identical copies" makes all cards have the same layout</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">Free space only available for 3×3 and 5×5 grids</span>
          </li>
          <li className="pro-tips-item">
            <span className="pro-tips-bullet">•</span>
            <span className="pro-tips-text">4×4 grids have no center cell, so no free space</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProTips;
