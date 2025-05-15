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
  'Unity': 'https://docs.unity3d.com/',
  'C#': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  'Game Development': 'https://en.wikipedia.org/wiki/Video_game_development',
  'Game Engine': 'https://www.arm.com/glossary/gaming-engines',
  'Game Sprite': 'https://docs.unity3d.com/Manual/Sprites.html'
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
    subtitle: 'OOP Language',
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
    subtitle: 'Systems Programming',
    link: techLinks['C++']
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
    subtitle: 'Statistical Computing',
    link: techLinks['R']
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
    subtitle: 'Design & Prototyping',
    link: techLinks['UI']
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
    subtitle: 'Web Data Extraction',
    link: techLinks['Data scraping']
  },
  {
    icon: '🍜',
    title: 'BeautifulSoup',
    subtitle: 'Web Scraping Library',
    link: techLinks['BeautifulSoup']
  },
  {
    icon: '📦',
    title: 'GitHub Pages',
    subtitle: 'Static Site Hosting',
    link: techLinks['GitHub Pages']
  },
  {
    icon: '🔄',
    title: 'Swiper.js',
    subtitle: 'Touch Slider Library',
    link: techLinks['Swiper.js']
  },
  {
    icon: '🧪',
    title: 'Jest',
    subtitle: 'JavaScript Testing',
    link: techLinks['Jest']
  },
  {
    icon: '🤖',
    title: 'Discord.py',
    subtitle: 'Discord Bot Framework',
    link: techLinks['Discord.py']
  },
  {
    icon: '🎵',
    title: 'FFmpeg',
    subtitle: 'Media Processing',
    link: techLinks['FFmpeg']
  },
  {
    icon: '📥',
    title: 'yt-dlp',
    subtitle: 'Video Downloader',
    link: techLinks['yt-dlp']
  },
  {
    icon: '🔐',
    title: 'PyNaCl',
    subtitle: 'Cryptography Library',
    link: techLinks['PyNaCl']
  },
  {
    icon: '🌐',
    title: 'aiohttp',
    subtitle: 'Async HTTP Client',
    link: techLinks['aiohttp']
  },
  {
    icon: '🔗',
    title: 'yarl',
    subtitle: 'URL Handling',
    link: techLinks['yarl']
  },
  {
    icon: '🎧',
    title: 'Lavalink',
    subtitle: 'Audio Streaming',
    link: techLinks['Lavalink']
  },
  {
    icon: '🐧',
    title: 'Linux',
    subtitle: 'Operating System',
    link: techLinks['Linux']
  },
  {
    icon: '🏹',
    title: 'Arch Linux',
    subtitle: 'Linux Distribution',
    link: techLinks['Arch Linux']
  },
  {
    icon: '🪟',
    title: 'Hyprland',
    subtitle: 'Window Manager',
    link: techLinks['Hyprland']
  },
  {
    icon: '📊',
    title: 'Waybar',
    subtitle: 'Status Bar',
    link: techLinks['Waybar']
  },
  {
    icon: '🐱',
    title: 'Kitty',
    subtitle: 'Terminal Emulator',
    link: techLinks['Kitty']
  },
  {
    icon: '🔍',
    title: 'Rofi',
    subtitle: 'Application Launcher',
    link: techLinks['Rofi']
  },
  {
    icon: '💻',
    title: 'Shell',
    subtitle: 'Command Line Interface',
    link: techLinks['Shell']
  },
  {
    icon: '⚙️',
    title: 'UEFI',
    subtitle: 'Firmware Interface',
    link: techLinks['UEFI']
  },
  {
    icon: '🎮',
    title: 'Unity',
    subtitle: 'Game Engine',
    link: techLinks['Unity']
  },
  {
    icon: '🔷',
    title: 'C#',
    subtitle: 'Game Programming',
    link: techLinks['C#']
  },
  {
    icon: '🎯',
    title: 'Game Dev',
    subtitle: 'Game Design & Creation',
    link: techLinks['Game Development']
  },
  {
    icon: '🖼️',
    title: 'Game Sprite',
    subtitle: '2D Game Assets',
    link: techLinks['Game Sprite']
  },
  {
    icon: '⚙️',
    title: 'Game Engine',
    subtitle: 'Game Developing Program',
    link: techLinks['Game Engine']
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