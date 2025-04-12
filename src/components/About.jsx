import React from 'react';
import GradientButton from './GradientButton';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Khang Chung, a passionate Computer Science student at the University of Houston. 
            I specialize in full stack development. 
          </p>
          <p>
            When I'm not coding, you can find me in the gym, walking in the park, or playing piano!
          </p>
          <div className="resume-link">
          <GradientButton 
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </GradientButton>
        </div>
        </div>
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/khangchung.jpg`} alt="Khang Chung" />
        </div>
      </div>
    </section>
  );
};

export default About;