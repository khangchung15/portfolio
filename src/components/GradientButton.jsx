import React from 'react';
import './GradientButton.css'; // We'll create this

const GradientButton = ({ children, href, target, rel, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={href || '#'} 
      target={target} 
      rel={rel} 
      className="gradient-button"
      onClick={handleClick}
    >
      {children}
      <div className="gradient-hover-effect">
        <div></div>
      </div>
    </a>
  );
};

export default GradientButton;