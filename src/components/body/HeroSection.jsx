import React from "react";
import './HeroSection.css';
import JFLogo from "../../assets/logo-justfood.png";

const HeroSection = ({ introVisible }) => {
  return (
    <header className={`header ${introVisible ? '' : 'hidden'}`}>
      <div className="logo">
        <img src={JFLogo} alt="Logo" />
      </div>
    </header>
  );
};

export default HeroSection;