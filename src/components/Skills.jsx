import React from 'react';

const Skills = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Vite', 'Node.js', 
    'Git', 'UI/UX', 'Python', 'MySQL', 'PostgreSQL',
    'Django', 'JSON', 'Java','Aseprite','Pixel Art',
    'Flask', 'Data scraping'
    // Add your skills here
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;