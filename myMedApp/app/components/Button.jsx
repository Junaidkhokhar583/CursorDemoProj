// Reusable Button Component
"use client"
import React from 'react'

const Button = ({type, text, className, style, onClick}) => {
  return (
    <button
      type={type}
      text={text}
      onClick={onClick}
      style={style}
      className={`${className}  bg-navy text-white  hover:scale-110  duration-300 ease-in-out z-50`}
    >
    {text}
    </button>
    
  );
};

export default Button;
