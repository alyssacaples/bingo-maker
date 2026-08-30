const TIPS = [
  'Use line breaks for best phrase separation',
  'Use more phrases than you need so each copy is unique',
  'Dynamic sizing automatically adjusts font size',
  'Fixed font size gives you precise control over text appearance',
  'Watch for text overflow warnings when using fixed font sizes',
  '“Randomize order” creates unique cards for each copy',
  '“Identical copies” makes all cards have the same layout',
  'Free space only available for 3×3 and 5×5 grids',
  '4×4 grids have no center cell, so no free space',
];

const ProTips = () => (
  <div className="pro-tips">
    <div className="pro-tips-header">Tips</div>
    <div className="pro-tips-body">
      <ul className="pro-tips-list">
        {TIPS.map((tip) => (
          <li className="pro-tips-item" key={tip}>
            <span className="pro-tips-bullet" aria-hidden="true" />
            <span className="pro-tips-text">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProTips;
