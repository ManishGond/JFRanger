import React from "react";
import JFLogo from "../../assets/logo-justfood.png";

const Body = ({ introVisible }) => {
  return (
    <header className={`header ${!introVisible ? 'hidden' : ''}`}>
      <div className="logo">
        <img src={JFLogo} alt="Logo" />
      </div>
    </header>
  );
};

export default Body;