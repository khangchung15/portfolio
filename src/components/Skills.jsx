import React from 'react';

const Skills = () => {
  const skills = [
    'HTML/CSS', 'Java', 'Python', 'C++', 'JavaScript',
    'R', ,'MySQL', 'Postgresql', 'React', 'Vite', 
    'Node.js', 'Git', 'UI/UX', 'Python', 'Git',
    'Django', 'JSON','Aseprite','Pixel Art',
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