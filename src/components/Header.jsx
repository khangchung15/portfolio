import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Khang Chung</h1>
        <p>Full Stack Developer | (832) 375-0825 | Computer Science Major | Mathematics Minor</p> 
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;