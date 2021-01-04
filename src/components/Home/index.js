import React from 'react';
import './index.scss';

import Templates from '../Templates/index';
import Button from '../Button/index';


export const changeStep = (currentStep, direction) => {
    const app = document.querySelector('.app__container');
    const property = direction === 'next' ? `translateX(-${currentStep + 1}00vw)` : `translateX(-${currentStep - 1}00vw)`;
    app.style.transform = property;
}

const Home = () => {

    return ( 
        <>
            <main className="home__container">
                <p className="hero__text">
                    Create your own CV with our templates!
                </p>
                <span onClick={() => changeStep(0, 'next')} >
                    <Button text="Start now" />
                </span>
                <p className="invite__text">
                    No programms needed.
                </p>
                <p className="invite__text">
                    Easy in use.
                </p>
                <p className="invite__text">
                    PDF format.
                </p>
            </main>
            <Templates />
        </>
    );
}
 
export default Home;