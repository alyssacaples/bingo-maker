import React from 'react';

const TitleConfiguration = ({ title, onTitleChange }) => {
  return (
    <div className="card animate-slide-up">
      <div className="card-header">
        <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
      </div>
      <div className="card-body">
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="input-field"
          placeholder="Enter bingo card title (e.g., BINGO, HOLIDAY BINGO)"
        />
      </div>
    </div>
  );
};

export default TitleConfiguration;
