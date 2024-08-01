import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle">
    <button  onClick={toggleTheme}>
      {theme === 'dark' ? '🔆' : '🌙'}
    </button>
    </div>
  );
};

export default ThemeToggle;
