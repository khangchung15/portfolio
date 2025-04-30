import React from 'react';

const skills = [
  {
    icon: '🌐',
    title: 'HTML/CSS',
    subtitle: 'Frontend Markup & Styling'
  },
  {
    icon: '☕',
    title: 'Java',
    subtitle: 'Object-Oriented Programming Language'
  },
  {
    icon: '🐍',
    title: 'Python',
    subtitle: 'General Purpose Language'
  },
  {
    icon: '💻',
    title: 'C++',
    subtitle: 'Systems Programming'
  },
  {
    icon: '🟨',
    title: 'JavaScript',
    subtitle: 'Frontend/Backend Scripting'
  },
  {
    icon: '📊',
    title: 'R',
    subtitle: 'Statistical Computing'
  },
  {
    icon: '🗄️',
    title: 'MySQL',
    subtitle: 'Relational Database'
  },
  {
    icon: '🐘',
    title: 'PostgreSQL',
    subtitle: 'Relational Database'
  },
  {
    icon: '⚛️',
    title: 'React',
    subtitle: 'Frontend Library'
  },
  {
    icon: '⚡',
    title: 'Vite',
    subtitle: 'Frontend Build Tool'
  },
  {
    icon: '🟩',
    title: 'Node.js',
    subtitle: 'Backend Runtime'
  },
  {
    icon: '🔧',
    title: 'Git',
    subtitle: 'Version Control'
  },
  {
    icon: '🎨',
    title: 'UI/UX',
    subtitle: 'Design & Prototyping'
  },
  {
    icon: '🌐',
    title: 'Django',
    subtitle: 'Python Web Framework'
  },
  {
    icon: '🔗',
    title: 'JSON',
    subtitle: 'Data Interchange Format'
  },
  {
    icon: '🖼️',
    title: 'Aseprite',
    subtitle: 'Pixel Art Tool'
  },
  {
    icon: '🟪',
    title: 'Pixel Art',
    subtitle: 'Digital Art Style'
  },
  {
    icon: '🌶️',
    title: 'Flask',
    subtitle: 'Python Microframework'
  },
  {
    icon: '🕸️',
    title: 'Data scraping',
    subtitle: 'Web Data Extraction'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-title">{skill.title}</div>
            <div className="skill-subtitle">{skill.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;