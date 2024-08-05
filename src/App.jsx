import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import HeroSection from "./components/body/HeroSection";
import ChatBox from "./components/chatbot/chatbox";
import Footer from "./components/footer/footer";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [introVisible, setIntroVisible] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="just-body">
        <HeroSection introVisible={introVisible} />
        <ChatBox introVisible={introVisible} setIntroVisible={setIntroVisible} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
