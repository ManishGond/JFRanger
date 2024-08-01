import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from './components/header';
import ChatBox from './components/chatbox';
import ThemeToggle from './components/themetoggle';
import Footer from './components/footer';

const App = () =>{
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme ==='dark'?'light':'dark'));
  };

  return(
    <div className="app">
      <Header/>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
      <ChatBox/>
      <Footer/>
    </div>
  )
}

export default App;
