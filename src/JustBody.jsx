import React, { useState, useEffect } from 'react';
import "./App.css";
import ChatBox from './components/chatbot/chatbox';
import Footer from './components/footer/footer';
import Body from './components/body/HeroSection';


const JustBody = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="just-body">
      <Body />
      <ChatBox theme={theme} toggleTheme={toggleTheme} />
      <Footer />
    </div>
  );
};

export default JustBody;
