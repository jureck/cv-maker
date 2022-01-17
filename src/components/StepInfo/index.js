import React from 'react';
import './index.scss';

const StepDots = ({current}) => {

    let a = [];
    for(let i=0; i<6; i++) {
        if(i<parseInt(current)) {
            a.push(<span key={i} className="dot filled"></span>);
        }
        else {
            a.push(<span key={i} className="dot" ></span>)   ;
        }
    }
    return (
        <div className="dots">
            {a}
        </div>
    );
}
 
export default StepDots;