import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '🌞 Day Mode' : '🌙 Night Mode'}
    </button>
  );
};

export default ThemeToggle;
