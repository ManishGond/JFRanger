import React from 'react';
import JFLogo from "../../assets/logo-justfood.png";
import "../header/header.css"

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header-main">
      <div className="header-logo">
        <img src={JFLogo} alt="JustFood Logo" />
        <h1>JF Ranger</h1>
      </div>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === 'dark' ? '🔆' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
