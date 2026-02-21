import React from "react";
import cl from "./Button.module.css";

const Mybutton = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`${cl.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Mybutton;