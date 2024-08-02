import React from 'react';
import "./App.css";
import ChatBox from './components/chatbox';
import Footer from './components/footer';
import Body from './components/body';

const JustBody = () => {
  return (
    <div className="just-body">
      <Body />
      <ChatBox />
      <Footer />
    </div>
  );
};

export default JustBody;
