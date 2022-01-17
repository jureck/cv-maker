import React, { useRef } from 'react';
import './App.scss';
import Home from './components/Home/index';
import Logo from './components/Logo/index';





const App = () => {

  const appRef = useRef(null);

  const changeStep = (currentStep, isForward = false) => {
    window.scrollTo(0, 0);
    const property = isForward ? `translateX(-${currentStep + 1}00vw)` : `translateX(-${currentStep - 1}00vw)`;
    appRef.current.style.transform = property;
  }
  
  return (
    <>
      <Logo />
      <div ref={appRef} className="app__container"> 
        <Home 
          changeStep={changeStep}
        />
      </div>
    </>
  );
}

export default App;
