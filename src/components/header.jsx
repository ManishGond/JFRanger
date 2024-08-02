import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-toggle">
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '🔆' : '🌙'}
      </button>
    </div>
    </header>
  );
};

export default Header;
