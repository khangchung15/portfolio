import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Coog Zoo',
      description: 'A web application for managing a zoo, built with React & MySQL.',
      github: 'https://github.com/khangchung15/finalcoogzoo'
    },
    {
      id: 2,
      title: 'Volunteer Matching System',
      description: 'A system that connects volunteers with organizations, built with Django & PostgreSQL.',
      github: 'https://github.com/khangchung15/Volunteer-Matching'
    },
    {
      id: 3,
      title: 'Watt Watch',
      description: 'Real time data scraping with a warning system for areas under stress, built with Flask & JavaScript.',
      github: 'https://github.com/khangchung15/PowerGridHackathon'
    },
    {
      id: 4,
      title: 'Minecraft Mod',
      description: 'New custom items & blocks + Various quality of life features to the Minecraft, built with Java & Minecraft Forge.',
      github: 'https://github.com/khangchung15/minecraftmod'
    },
    // Add more projects as needed
  ];

  return (  
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>    
    </section>
  );
};

export default Projects;