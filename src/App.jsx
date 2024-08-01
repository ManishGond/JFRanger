import React from 'react';
import "./App.css";
import Header from './components/header';
import ChatBox from './components/chatbox';
import Footer from './components/footer';

const App = () => (
  <div className="app">
    <Header/>
    <ChatBox/>
    <Footer/>
  </div>
);

export default App;
