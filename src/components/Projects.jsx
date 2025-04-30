import React from 'react';
import './Projects.css';
import GradientButton from './GradientButton';
import coogZooImage from '../assets/images/projects/coog-zoo.png';
import volunteerMatchingImage from '../assets/images/projects/volunteer-matching.png';
import wattWatchImage from '../assets/images/projects/watt-watch.png';
import minecraftModImage from '../assets/images/projects/minecraft-mod.png';
import portfolioImage from '../assets/images/projects/portfolio.png';

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
  'Minecraft Forge API': 'https://docs.minecraftforge.net/',
  'Aseprite': 'https://store.steampowered.com/app/431730/Aseprite/',
  'IntelliJ': 'https://www.jetbrains.com/help/idea/',
  'Flask': 'https://flask.palletsprojects.com/',
  'BeautifulSoup': 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
  'GitHub Pages': 'https://docs.github.com/en/pages',
  'Node.js': 'https://nodejs.org/en/docs/',
  'HTML/CSS': 'https://developer.mozilla.org/en-US/docs/Web/HTML/CSS',
};

const Projects = () => {
  const projects = [
    {
      title: 'Coog Zoo',
      description: 'A web application for managing a zoo, built with React & MySQL.',
      technologies: ['JavaScript', 'React', 'Vite', 'MySQL', 'HTML', 'CSS', 'Git'],
      github: 'https://github.com/khangchung15/finalcoogzoo',
      demo: null,
      image: coogZooImage
    },
    {
      title: 'Volunteer Matching System',
      description: 'A system that connects volunteers with organizations, built with Django & PostgreSQL.',
      technologies: ['Python', 'Django', 'React', 'HTML', 'CSS', 'JSON', 'PostgreSQL'],
      github: 'https://github.com/khangchung15/Volunteer-Matching',
      demo: null,
      image: volunteerMatchingImage
    },
    {
      title: 'Watt Watch',
      description: 'Real time data scraping with a warning system for areas under stress, built with Flask & JavaScript.',
      technologies: ['Python', 'Flask', 'BeautifulSoup', 'JavaScript', 'HTML','CSS'],
      github: 'https://github.com/khangchung15/PowerGridHackathon',
      demo: null,
      image: wattWatchImage
    },
    {
      title: 'Minecraft Mod',
      description: 'New custom items & blocks + Various quality of life features to the Minecraft, built with Java & Minecraft Forge.',
      technologies: ['JSON', 'Java', 'Minecraft Forge API', 'Aseprite', 'IntelliJ'],
      github: 'https://github.com/khangchung15/minecraftmod',
      demo: null,
      image: minecraftModImage
    },
    {
      title: 'Personal Portfolio',
      description: 'This portfolio website you are seeing, built with React.',
      technologies: ['React', 'HTML','CSS', 'JavaScript', 'GitHub Pages'],
      github: 'https://github.com/khangchung15/portfolio',
      demo: null,
      image: portfolioImage
    }
  ];

  // Debug the image path
  console.log('Image path:', projects[0].image);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  console.error('Error loading image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              {project.technologies.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={techLinks[tech]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-badge"
                >
                  {tech}
                </a>
              ))}
            </div>
            <div className="project-links">
              <GradientButton 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </GradientButton>
              {project.demo && (
                <GradientButton 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </GradientButton>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <GradientButton onClick={scrollToTimeline}>
          View Project Timeline
        </GradientButton>
      </div>
    </section>
  );
};

export default Projects;