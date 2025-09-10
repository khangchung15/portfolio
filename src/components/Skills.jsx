import React, { useState } from 'react';
import './Skills.css';

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
  'C++': 'https://devdocs.io/cpp/',
  'R': 'https://www.r-project.org/about.html',
  'UI': 'https://en.wikipedia.org/wiki/User_interface_design',
  'Data scraping': 'https://www.okta.com/identity-101/data-scraping/',
  'BeautifulSoup': 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
  'GitHub Pages': 'https://docs.github.com/en/pages',
  'Swiper.js': 'https://swiperjs.com/get-started',
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
  'Unity': 'https://docs.unity3d.com/',
  'C#': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  'Game Sprite': 'https://docs.unity3d.com/Manual/Sprites.html',
  'Game Development': 'https://docs.unity3d.com/Manual/UnityManual.html',
  'Game Engine': 'https://docs.unity3d.com/Manual/UnityManual.html',
  'Rust': 'https://doc.rust-lang.org/book/',
  'SSH': 'https://www.ssh.com/academy/ssh',
  'OpenSSH': 'https://www.openssh.com/',
  'OverTheWire': 'https://overthewire.org/wargames/'
};

const skillCategories = [
  {
    category: "Frontend",
    items: [
      { icon: '🌐', title: 'HTML', subtitle: 'Frontend Markup', link: techLinks['HTML'] },
      { icon: '🌐', title: 'CSS', subtitle: 'Frontend Styling', link: techLinks['CSS'] },
      { icon: '🟨', title: 'JavaScript', subtitle: 'Frontend/Backend Scripting', link: techLinks['JavaScript'] },
      { icon: '⚛️', title: 'React', subtitle: 'Frontend Library', link: techLinks['React'] },
      { icon: '⚡', title: 'Vite', subtitle: 'Frontend Build Tool', link: techLinks['Vite'] },
      { icon: '🔄', title: 'Swiper.js', subtitle: 'Touch Slider Library', link: techLinks['Swiper.js'] }
    ]
  },
  {
    category: "Backend",
    items: [
      { icon: '🟩', title: 'Node.js', subtitle: 'Backend Runtime', link: techLinks['Node.js'] },
      { icon: '🌐', title: 'Django', subtitle: 'Python Web Framework', link: techLinks['Django'] },
      { icon: '🌶️', title: 'Flask', subtitle: 'Python Microframework', link: techLinks['Flask'] },
      { icon: '🌐', title: 'aiohttp', subtitle: 'Async HTTP Client', link: techLinks['aiohttp'] },
      { icon: '🔗', title: 'yarl', subtitle: 'URL Handling', link: techLinks['yarl'] }
    ]
  },
  {
    category: "Languages",
    items: [
      { icon: '☕', title: 'Java', subtitle: 'OOP Language', link: techLinks['Java'] },
      { icon: '🐍', title: 'Python', subtitle: 'General Purpose Language', link: techLinks['Python'] },
      { icon: '💻', title: 'C++', subtitle: 'Systems Programming', link: techLinks['C++'] },
      { icon: '📊', title: 'R', subtitle: 'Statistical Computing', link: techLinks['R'] },
      { icon: '🔷', title: 'C#', subtitle: 'Game Development Language', link: techLinks['C#'] },
      { icon: '🦀', title: 'Rust', subtitle: 'Memory-Safe Systems Language', link: techLinks['Rust'] }
    ]
  },
  {
    category: "Databases & Data",
    items: [
      { icon: '🗄️', title: 'MySQL', subtitle: 'Relational Database', link: techLinks['MySQL'] },
      { icon: '🐘', title: 'PostgreSQL', subtitle: 'Relational Database', link: techLinks['PostgreSQL'] },
      { icon: '🔗', title: 'JSON', subtitle: 'Data Interchange Format', link: techLinks['JSON'] },
      { icon: '🕸️', title: 'Data scraping', subtitle: 'Web Data Extraction', link: techLinks['Data scraping'] },
      { icon: '🍜', title: 'BeautifulSoup', subtitle: 'Web Scraping Library', link: techLinks['BeautifulSoup'] }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { icon: '🔧', title: 'Git', subtitle: 'Version Control', link: techLinks['Git'] },
      { icon: '📦', title: 'GitHub Pages', subtitle: 'Static Site Hosting', link: techLinks['GitHub Pages'] },
      { icon: '💻', title: 'Shell', subtitle: 'Command Line Interface', link: techLinks['Shell'] },
      { icon: '🐧', title: 'Linux', subtitle: 'Operating System', link: techLinks['Linux'] },
      { icon: '🏹', title: 'Arch Linux', subtitle: 'Linux Distribution', link: techLinks['Arch Linux'] },
      { icon: '⚙️', title: 'UEFI', subtitle: 'Firmware Interface', link: techLinks['UEFI'] }
    ]
  },
  {
    category: "UI/UX & Design",
    items: [
      { icon: '🎨', title: 'UI/UX', subtitle: 'Design & Prototyping', link: techLinks['UI'] },
      { icon: '🖼️', title: 'Aseprite', subtitle: 'Pixel Art Tool', link: techLinks['Aseprite'] },
      { icon: '🟪', title: 'Pixel Art', subtitle: 'Digital Art Style', link: techLinks['Pixel Art'] }
    ]
  },
  {
    category: "Multimedia & Bots",
    items: [
      { icon: '🤖', title: 'Discord.py', subtitle: 'Discord Bot Framework', link: techLinks['Discord.py'] },
      { icon: '🎵', title: 'FFmpeg', subtitle: 'Media Processing', link: techLinks['FFmpeg'] },
      { icon: '📥', title: 'yt-dlp', subtitle: 'Video Downloader', link: techLinks['yt-dlp'] },
      { icon: '🔐', title: 'PyNaCl', subtitle: 'Cryptography Library', link: techLinks['PyNaCl'] },
      { icon: '🎧', title: 'Lavalink', subtitle: 'Audio Streaming', link: techLinks['Lavalink'] }
    ]
  },
  {
    category: "Linux Customization",
    items: [
      { icon: '🪟', title: 'Hyprland', subtitle: 'Window Manager', link: techLinks['Hyprland'] },
      { icon: '📊', title: 'Waybar', subtitle: 'Status Bar', link: techLinks['Waybar'] },
      { icon: '🐱', title: 'Kitty', subtitle: 'Terminal Emulator', link: techLinks['Kitty'] },
      { icon: '🔍', title: 'Rofi', subtitle: 'Application Launcher', link: techLinks['Rofi'] }
    ]
  },
  {
    category: "Game Development",
    items: [
      { icon: '🎮', title: 'Unity', subtitle: 'Game Engine', link: techLinks['Unity'] },
      { icon: '🎯', title: 'Game Dev', subtitle: 'Game Design', link: techLinks['Game Development'] },
      { icon: '🖼️', title: 'Game Sprite', subtitle: '2D & 3D Sprites', link: techLinks['Game Sprite'] }
    ]
  },
  {
  category: "Security & Systems Proficiency",
  items: [
    { icon: '🔑', title: 'SSH', subtitle: 'Secure Shell Protocol', link: techLinks['SSH'] },
    { icon: '🪪', title: 'OpenSSH', subtitle: 'SSH Implementation & Tools', link: techLinks['OpenSSH'] },
    { icon: '🦹', title: 'OverTheWire', subtitle: 'Linux & Web Security Wargame', link: techLinks['OverTheWire'] },
  ]
  },
];

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleAll = () => {
    const anyExpanded = Object.values(expandedCategories).some(value => value);
    const newState = {};
    skillCategories.forEach(category => {
      newState[category.category] = !anyExpanded;
    });
    setExpandedCategories(newState);
  };

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <button 
          className="toggle-all-btn"
          onClick={toggleAll}
        >
          {Object.values(expandedCategories).some(value => value) ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`skill-category ${expandedCategories[category.category] ? 'expanded' : ''}`}
          >
            <div 
              className="category-header"
              onClick={() => toggleCategory(category.category)}
            >
              <span className="category-title">{category.category}</span>
              <span className="category-icon">
                {expandedCategories[category.category] ? '▼' : '▶'}
              </span>
            </div>
            {expandedCategories[category.category] && (
              <div className="skills-container">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;