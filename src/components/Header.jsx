import React, { useState, useRef } from 'react';
import profileImg from '../assets/images/profile.jpg'; // Make sure to add a profile image here

const ORIGINAL_NAME = 'Khang Chung';

function getRandomChar(char) {
  if (char === ' ') return ' ';
  // 50% random letter, 50% random case
  if (Math.random() < 0.5) {
    const code = Math.floor(Math.random() * 26);
    const isUpper = Math.random() < 0.5;
    return String.fromCharCode((isUpper ? 65 : 97) + code);
  } else {
    return Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
  }
}

const Header = () => {
  const [name, setName] = useState(ORIGINAL_NAME);
  const [scrambled, setScrambled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const clickCount = useRef(0);
  const scrambleInterval = useRef(null);

  // One-by-one scramble animation, with lucky typewriter effect
  const animateScramble = (toOriginal = false, onComplete, startFromOriginal = false, lucky = false) => {
    setAnimating(true);
    let interval = 70;
    let chars = (startFromOriginal ? ORIGINAL_NAME : name).split('');
    let i = 0;
    if (scrambleInterval.current) clearInterval(scrambleInterval.current);
    scrambleInterval.current = setInterval(() => {
      if (i < chars.length) {
        if (toOriginal || lucky) {
          // Typewriter effect: reveal the real name letter by letter
          chars[i] = ORIGINAL_NAME[i];
        } else {
          chars[i] = getRandomChar(ORIGINAL_NAME[i]);
        }
        setName(chars.join(''));
        i++;
      } else {
        clearInterval(scrambleInterval.current);
        scrambleInterval.current = null;
        setAnimating(false);
        if (toOriginal || lucky) {
          setName(ORIGINAL_NAME);
          setScrambled(false); // Always set to false after reset or lucky
        } else {
          setScrambled(true);
        }
        if (onComplete) onComplete();
      }
    }, interval);
  };

  const handleNameClick = () => {
    if (animating) return;
    clickCount.current += 1;
    // Lucky restore logic
    let lucky = false;
    if (clickCount.current >= 20) {
      lucky = true; // guarantee after 20
    } else if (clickCount.current >= 10) {
      lucky = Math.random() < 0.2; // 20% chance after 10
    } else {
      lucky = Math.random() < 0.05; // 5% chance before 10
    }
    animateScramble(false, undefined, false, lucky);
  };

  const handleReset = () => {
    clickCount.current = 0; // Reset click counter
    if (scrambleInterval.current) {
      clearInterval(scrambleInterval.current);
      scrambleInterval.current = null;
    }
    // Always animate back to original, even if already there
    animateScramble(true);
  };

  return (
    <header className="header">
      <div className="header-content animated-header">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', position: 'relative' }}>
          <h1 className="gradient-name" style={{cursor: animating ? 'default' : 'pointer', marginBottom: 0}} onClick={handleNameClick}>{name}</h1>
          {(scrambled || animating) && (
            <button className="reset-name-btn-icon" onClick={handleReset} aria-label="Reset Name">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V2L7 7l5 5V8c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
        <span className="header-tagline">Full Stack Developer | (832) 375-0825 | Computer Science Major | Mathematics Minor</span>
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