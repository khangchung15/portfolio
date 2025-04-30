import React from 'react';

const techLinks = {
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'React': 'https://react.dev/',
  'Vite': 'https://vitejs.dev/',
  'MySQL': 'https://dev.mysql.com/doc/',
  'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'Git': 'https://git-scm.com/doc',
  'Python': 'https://docs.python.org/3/',
  'Django': 'https://docs.djangoproject.com/',
  'PostgreSQL': 'https://www.postgresql.org/docs/',
  'JSON': 'https://www.json.org/json-en.html',
  'Java': 'https://docs.oracle.com/en/java/',
  'Aseprite': 'https://www.aseprite.org/',
  'Flask': 'https://flask.palletsprojects.com/',
  'Node.js': 'https://nodejs.org/en/docs/',
  'HTML/CSS': 'https://developer.mozilla.org/en-US/docs/Web/HTML/CSS',
  'Pixel Art': 'https://en.wikipedia.org/wiki/Pixel_art',
};

const skills = [
  {
    icon: '🌐',
    title: 'HTML',
    subtitle: 'Frontend Markup ',
    link: techLinks['HTML']
  },
  {
    icon: '🌐',
    title: 'CSS',
    subtitle: 'Frontend Styling',
    link: techLinks['CSS']
  },
  {
    icon: '☕',
    title: 'Java',
    subtitle: 'Object-Oriented Programming Language',
    link: techLinks['Java']
  },
  {
    icon: '🐍',
    title: 'Python',
    subtitle: 'General Purpose Language',
    link: techLinks['Python']
  },
  {
    icon: '💻',
    title: 'C++',
    subtitle: 'Systems Programming'
  },
  {
    icon: '🟨',
    title: 'JavaScript',
    subtitle: 'Frontend/Backend Scripting',
    link: techLinks['JavaScript']
  },
  {
    icon: '📊',
    title: 'R',
    subtitle: 'Statistical Computing'
  },
  {
    icon: '🗄️',
    title: 'MySQL',
    subtitle: 'Relational Database',
    link: techLinks['MySQL']
  },
  {
    icon: '🐘',
    title: 'PostgreSQL',
    subtitle: 'Relational Database',
    link: techLinks['PostgreSQL']
  },
  {
    icon: '⚛️',
    title: 'React',
    subtitle: 'Frontend Library',
    link: techLinks['React']
  },
  {
    icon: '⚡',
    title: 'Vite',
    subtitle: 'Frontend Build Tool',
    link: techLinks['Vite']
  },
  {
    icon: '🟩',
    title: 'Node.js',
    subtitle: 'Backend Runtime',
    link: techLinks['Node.js']
  },
  {
    icon: '🔧',
    title: 'Git',
    subtitle: 'Version Control',
    link: techLinks['Git']
  },
  {
    icon: '🎨',
    title: 'UI/UX',
    subtitle: 'Design & Prototyping'
  },
  {
    icon: '🌐',
    title: 'Django',
    subtitle: 'Python Web Framework',
    link: techLinks['Django']
  },
  {
    icon: '🔗',
    title: 'JSON',
    subtitle: 'Data Interchange Format',
    link: techLinks['JSON']
  },
  {
    icon: '🖼️',
    title: 'Aseprite',
    subtitle: 'Pixel Art Tool',
    link: techLinks['Aseprite']
  },
  {
    icon: '🟪',
    title: 'Pixel Art',
    subtitle: 'Digital Art Style',
    link: techLinks['Pixel Art']
  },
  {
    icon: '🌶️',
    title: 'Flask',
    subtitle: 'Python Microframework',
    link: techLinks['Flask']
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
          <div 
            key={index} 
            className="skill-card"
            onClick={() => skill.link && window.open(skill.link, '_blank')}
            style={{ cursor: skill.link ? 'pointer' : 'default' }}
          >
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