import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Projects.css';
import GradientButton from './GradientButton';
import VideoModal from './VideoModal';
import coogZooImage from '../assets/images/projects/coog-zoo.png';
import volunteerMatchingImage from '../assets/images/projects/volunteer-matching.png';
import wattWatchImage from '../assets/images/projects/watt-watch.png';
import minecraftModImage from '../assets/images/projects/minecraft-mod.png';
import portfolioImage from '../assets/images/projects/portfolio.png';
import recaptchaGameImage from '../assets/images/projects/recaptcha-game.png';
import discordImage from '../assets/images/projects/discord-bot.png';
import linuxImage from '../assets/images/projects/linux.png';
import solarSystemImage from '../assets/images/projects/solar-system.png';
import cluelessImage from '../assets/images/projects/clueless.png';
import spaceDefenderImage from '../assets/images/projects/space-defender.png';

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
  'Swiper.js': 'https://swiperjs.com/get-started',
  'Jest': 'https://jestjs.io/docs/getting-started',
  'Discord.py': 'https://discordpy.readthedocs.io/',
  'FFmpeg': 'https://ffmpeg.org/documentation.html',
  'yt-dlp': 'https://github.com/yt-dlp/yt-dlp',
  'PyNaCl': 'https://pynacl.readthedocs.io/',
  'aiohttp': 'https://docs.aiohttp.org/',
  'yarl': 'https://yarl.readthedocs.io/',
  'Lavalink': 'https://github.com/freyacodes/Lavalink',
  'Linux': 'https://www.kernel.org/doc/html/latest/',
  'Arch Linux': 'https://wiki.archlinux.org/',
  'Hyprland': 'https://wiki.hyprland.org/',
  'Waybar': 'https://github.com/Alexays/Waybar/wiki',
  'Kitty': 'https://sw.kovidgoyal.net/kitty/',
  'Rofi': 'https://github.com/davatorium/rofi/wiki',
  'Shell': 'https://www.gnu.org/software/bash/manual/bash.html',
  'UEFI': 'https://uefi.org/specifications',
  'Svelte': 'https://svelte.dev/',
  'TypeScript': 'https://www.typescriptlang.org/',
  'Express': 'https://expressjs.com/',
  'Ollama': 'https://ollama.ai/',
  'Mistral': 'https://mistral.ai/',
  'Unity': 'https://docs.unity3d.com/',
  'C#': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  'Game Sprite': 'https://docs.unity3d.com/Manual/Sprites.html',
  'Game Development': 'https://docs.unity3d.com/Manual/UnityManual.html',
  'Game Engine': 'https://docs.unity3d.com/Manual/UnityManual.html'
};

const Projects = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  
  const projects = [
    {
      title: 'Coog Zoo',
      description: 'A web application for managing a zoo, built with React & MySQL',
      technologies: ['JavaScript', 'React', 'Vite', 'MySQL', 'HTML', 'CSS', 'Git'],
      github: 'https://github.com/khangchung15/finalcoogzoo',
      githubText: 'GitHub',
      demo: null,
      demoText: null,
      image: coogZooImage
    },
    {
      title: 'Volunteer Matching System',
      description: 'A system that connects volunteers with organizations, built with Django & PostgreSQL',
      technologies: ['Python', 'Django', 'React', 'HTML', 'CSS', 'JSON', 'PostgreSQL'],
      github: 'https://github.com/khangchung15/Volunteer-Matching',
      githubText: 'GitHub',
      demo: null,
      demoText: null,
      image: volunteerMatchingImage
    },
    {
      title: 'Watt Watch',
      description: 'Real time data scraping with a warning system for areas under stress, built with Flask & JavaScript',
      technologies: ['Python', 'Flask', 'BeautifulSoup', 'JavaScript', 'HTML','CSS'],
      github: 'https://github.com/khangchung15/PowerGridHackathon',
      githubText: 'GitHub',
      demo: null,
      demoText: null,
      image: wattWatchImage
    },
    {
      title: 'Minecraft Mod',
      description: 'New custom items & blocks + Various quality of life features to the Minecraft, built with Java & Minecraft Forge',
      technologies: ['JSON', 'Java', 'Minecraft Forge API', 'Aseprite', 'IntelliJ'],
      github: 'https://github.com/khangchung15/minecraftmod',
      githubText: 'GitHub',
      demo: null,
      demoText: 'In Game Demo',
      videoUrl: `${process.env.PUBLIC_URL}/videos/minecraft-demo.mp4`,
      image: minecraftModImage
    },
    {
      title: 'Personal Portfolio',
      description: 'This portfolio website you are seeing, built with React',
      technologies: ['React', 'HTML','CSS', 'JavaScript', 'GitHub Pages'],
      github: 'https://github.com/khangchung15/portfolio',
      githubText: 'GitHub',
      demo: null,
      demoText: null,
      image: portfolioImage
    },
    {
      title: 'ReCaptcha Game',
      description: 'A parody game of ReCaptcha, available to play on GitHub Pages, built with React',
      technologies: ['React', 'HTML','CSS', 'JavaScript', 'GitHub Pages','Swiper.js', 'Jest'],
      github: 'https://github.com/khangchung15/recaptcha-game',
      githubText: 'GitHub',
      demo: 'https://khangchung15.github.io/recaptcha-game/',
      demoText: 'Try it out',
      image: recaptchaGameImage
    },
    {
      title: 'Discord Music Bot',
      description: 'Discord music bot for ad-free music streaming, built with Python',
      technologies: ['Python', 'Discord.py', 'FFmpeg', 'yt-dlp', 'PyNaCl', 'aiohttp', 'yarl', 'Lavalink'],
      github: 'https://github.com/khangchung15/discord-bot',
      githubText: 'GitHub',
      demo: null,
      demoText: 'Setup & Demo',
      videoUrl: `${process.env.PUBLIC_URL}/videos/discord-bot-demo.mp4`,
      image: discordImage
    },
    {
      title: 'Solar System',
      description: 'Solar System with rotating planets and occasional comets, built with Unity Game Engine',
      technologies: ['Unity', 'C#', 'Game Sprite', 'Game Development', 'Game Engine'],
      github: 'https://airplanecompany.itch.io/solar-system',
      githubText: 'Itch.io',
      demo: `${process.env.PUBLIC_URL}/games/SolarSystemWindows.zip`,
      demoText: 'Windows Download',
      image: solarSystemImage
    },
    {
      title: 'Arch Linux Ricing',
      description: 'Customized Arch Linux with my own dotfiles using Hyprland & Waybar as Window Manager',
      technologies: ['Linux', 'Arch Linux', 'Hyprland', 'Waybar', 'Kitty', 'Rofi', 'Shell', 'CSS', 'UEFI'],
      github: 'https://github.com/khangchung15/dotfiles',
      githubText: 'GitHub',
      demo: null,
      demoText: null,
      image: linuxImage
    },
    {
      title: 'Clueless',
      description: 'AI-powered word guessing game where users provide creative clues to help an AI guess words',
      technologies: ['Svelte', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Ollama', 'Mistral'],
      github: 'https://github.com/khangchung15/clueless',
      githubText: 'GitHub',
      demo: null,
      demoText: null,
      image: cluelessImage
    },
    {
      title: 'Space Defender',
      description: '2D Shooter Game with enemies chasing & shooting at the player, built with Unity Game Engine',
      technologies: ['Unity', 'C#', 'Game Sprite', 'Game Development', 'Game Engine'],
      github: 'https://airplanecompany.itch.io/space-defender',
      githubText: 'Try on Itch.io',
      demo: `${process.env.PUBLIC_URL}/games/WindowsSpaceDefender.zip`,
      demoText: 'Windows Download',
      image: spaceDefenderImage
    },
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

    initializeSwiper();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', initializeSwiper);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', initializeSwiper);
    };
  }, []);

  console.log('Image path:', projects[0].image);

  const handleDemoClick = (project) => {
    if (project.videoUrl) {
      setCurrentVideoUrl(project.videoUrl);
      setIsVideoModalOpen(true);
    }
  };

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
      />
      <div style={{ 
        opacity: isLoading ? 0 : 1, 
        transition: 'opacity 0.3s ease-in-out',
        minHeight: '730px'
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
                    {project.githubText}
                  </GradientButton>
                  {project.demo && !project.videoUrl && (
                    <GradientButton 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.demoText || 'Try it out!'}
                    </GradientButton>
                  )}
                  {project.videoUrl && (
                    <GradientButton 
                      onClick={() => handleDemoClick(project)}
                    >
                      {project.demoText}
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