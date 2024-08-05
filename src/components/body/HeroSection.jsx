import React from "react";
import './HeroSection.css';
import JFLogo from "../../assets/logo-justfood.png";
import {introVisible} from "../chatbot/chatbox.jsx";
const Body = ({ introVisible }) => {
  return (
    <header className={`header ${!introVisible ? '' : ''}`}>
     
    </header>
  );
};

export default HeroSection;
