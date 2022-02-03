import React, { useRef, useState } from 'react';
import './App.scss';
import Home from './components/Home/index';
import Logo from './components/Logo/index';
import Button from './components/Button/index';




const App = () => {

  const appRef = useRef(null);
  const [previewPosition, setPreviewPosition] = useState(`translateX(0)`);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);


  const changeStep = (currentStep, isForward = false) => {
    window.scrollTo(0, 0);
    const property = isForward ? `translateX(-${currentStep + 1}00vw)` : `translateX(-${currentStep - 1}00vw)`;
    appRef.current.style.transform = property;
    setPreviewPosition(isForward ? `translateX(${currentStep + 1}00vw)` : `translateX(${currentStep - 1}00vw)`);
  }
  
  return (
    <>
       <Button 
        onClick={() => setIsPreviewOpen(!isPreviewOpen)}
        style={{
          width: '100px',
          height: '60px',
          margin: '25px 35px',
          fontSize: '17px',
          backgroundColor: '#F5F5F5',
          cursor: 'pointer',
          zIndex: 100,
          color: 'black',
          border: '2px solid black',
          fontWeight: 'bold',
        }}
        text={isPreviewOpen ? 'CLOSE' : 'PREVIEW'}
      />

      <Logo />

      <div ref={appRef} className="app__container"> 
        <Home 
          changeStep={changeStep}
          previewPosition={previewPosition}
          isPreviewOpen={isPreviewOpen}
        />
      </div>
    </>
  );
}

export default App;
