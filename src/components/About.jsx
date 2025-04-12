import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Khang Chung, a passionate Computer Science student in University of Houston. 
            I specialize in full stack development. 
          </p>
          <p>
            When I'm not coding, you can find me in the gym, walking in the park, or playing piano!
          </p>
        </div>
        <div className="about-image">
          {/* Add your image here */}
          <img src="/path-to-your-image.jpg" alt="Your Name" />
        </div>
      </div>
    </section>
  );
};

export default About;