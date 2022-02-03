import React from "react";
import "./index.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.type === "cancel" ? "cancel" : ""}`}
      style={props.style}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
