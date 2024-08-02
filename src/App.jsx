import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from './components/header/header';
import MainSection from './MainSection';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <MainSection theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
