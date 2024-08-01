import React from 'react';
import JFLogo from '../assets/logo-justfood.png';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={JFLogo} alt="Logo" />
    </div>
    <h1>How can I assist you?</h1>
    <p>I'm here to answer your questions</p>
  </header>
);

export default Header;
