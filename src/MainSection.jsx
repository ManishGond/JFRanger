import React, { useState, useEffect } from 'react';
import "./App.css";
import Body from './components/body/HeroSection';
import ChatBox from './components/chatbot/chatbox';
import Footer from './components/footer/footer';


const MainSection = () => {
  return (
    <div className="just-body">
      <Body/>
      <ChatBox />
      <Footer />
    </div>
  );
};

export default MainSection;