import React from "react";
import JFLogo from "../../assets/logo-justfood.png";
import "../header/header.css";
const Body = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={JFLogo} alt="Logo" />
      </div>
      <div className="header-text">
        <h1>How can I assist you?</h1>
        <p>I'm here to answer your questions</p>
      </div>
    </header>
  );
};

export default Body;
