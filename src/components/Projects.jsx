import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
  'Aseprite': 'https://www.aseprite.org/',
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

  const swiperRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeSwiper = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
        setIsLoading(false);
      }
    };

    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    // Initialize swiper
    initializeSwiper();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', initializeSwiper);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', initializeSwiper);
    };
  }, []);

  // Debug the image path
  console.log('Image path:', projects[0].image);

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div style={{ 
        opacity: isLoading ? 0 : 1, 
        transition: 'opacity 0.3s ease-in-out',
        minHeight: '730px' // Prevent layout shift
      }}>
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          style={{ paddingBottom: '3rem' }}
          observer={true}
          observeParents={true}
          onInit={() => setIsLoading(false)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="eager"
                    onError={(e) => {
                      console.error(`Failed to load image for ${project.title}:`, e);
                      e.target.src = `${process.env.PUBLIC_URL}/images/fallback-project.png`;
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;