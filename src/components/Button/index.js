import React from 'react';
import './index.scss';

const Button = (props) => {
    return (  
        <button 
            className={`button ${props.type === "cancel" ? "cancel" : "" }`} 
        >
            {props.text}
            {props.children}
        </button>
    );
}
 
export default Button;