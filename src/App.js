import React from 'react';
import './App.scss';
import Home from './components/Home/index';
import Logo from './components/Logo/index';

const App = () => {
  return (
    <>
      <Logo />
      <div className="app__container"> 
        <Home />
      </div>
    </>
  );
}

export default App;
