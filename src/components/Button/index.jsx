import React from "react";
import "./button.css";

function Button({ children, onClick }) {
  const getOnClick = () => {
    if (onClick) {
      return onClick();
    } else return youClickedMe();
  };

  const youClickedMe = () => {
    alert(`You clicked on ${children}`);
  };

  return (
    <button onClick={getOnClick} className="btn">
      {children}
    </button>
  );
}

export default Button;
