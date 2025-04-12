import React from 'react';
import './GradientButton.css'; // We'll create this

const GradientButton = ({ children, href, target, rel }) => {
  return (
    <a href={href} target={target} rel={rel} className="gradient-button">
      {children}
      <div className="gradient-hover-effect">
        <div></div>
      </div>
    </a>
  );
};

export default GradientButton;