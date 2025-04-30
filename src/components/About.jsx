import React, { useState, useEffect } from 'react';
import GradientButton from './GradientButton';
import moonlightSonata from '../assets/videos/moonlight-sonata.mp4';
import Prelude from '../assets/videos/prelude-in-e-minor.mp4';
import KansetsuKi from '../assets/videos/kansetsu-ki.mp4';
import Nocturnes from '../assets/videos/nocturnes-op9-no2.mp4';
import Marriage from '../assets/videos/marriage-d-amour.mp4';


const uhText = "University of Houston";
const uhLink = (
  <a
    href="https://uh.edu/"
    target="_blank"
    rel="noopener noreferrer"
    className="uh-link"
  >
    {uhText.split('').map((char, i) =>
      <span className="uh-letter" style={{ animationDelay: `${i * 0.04}s` }} key={i}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    )}
  </a>
);

const pianoText = "playing piano";

const pianoPieces = [
  {
    name: 'Moonlight Sonata Movement 1',
    composer: 'Ludwig van Beethoven',
    video: moonlightSonata,
    thumbnail: `${process.env.PUBLIC_URL}/images/moonlight-thumbnail.jpg`,
    recordImage: 'record1.png'
  },
  {
    name: 'Prelude in E Minor',
    composer: 'Frédéric Chopin',
    video: Prelude,
    thumbnail: `${process.env.PUBLIC_URL}/images/prelude-thumbnail.jpg`,
    recordImage: 'record2.png'
  },
  {
    name: 'Kansetsu Ki',
    composer: 'Kei Haneoka',
    video: KansetsuKi,
    thumbnail: `${process.env.PUBLIC_URL}/images/kansetsu-thumbnail.jpg`,
    recordImage: 'record3.png'
  },
  {
    name: 'Nocturnes Op. 9 No. 2',
    composer: 'Frédéric Chopin',
    video: Nocturnes,
    thumbnail: `${process.env.PUBLIC_URL}/images/nocturnes-thumbnail.jpg`,
    recordImage: 'record4.png'
  },
  {
    name: 'Marriage d\'Amour',
    composer: 'Richard Clayderman',
    video: Marriage,
    thumbnail: `${process.env.PUBLIC_URL}/images/marriage-thumbnail.jpg`,
    recordImage: 'record1.png' 
  },
  
];

const About = () => {
  const [showPianoModal, setShowPianoModal] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const recordSelectorRef = React.useRef(null);
  const videoRefs = React.useRef([]);

  useEffect(() => {
    videoRefs.current = pianoPieces.map(() => React.createRef());
  }, []);

  useEffect(() => {
    videoRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.pause();
      }
    });
  }, [currentVideoIndex]);

  const handleScroll = (e) => {
    const container = recordSelectorRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;

    if (scrollLeft + containerWidth >= scrollWidth) {
      container.scrollLeft = 1;
    } else if (scrollLeft <= 0) {
      container.scrollLeft = scrollWidth - containerWidth - 1;
    }
  };

  useEffect(() => {
    if (recordSelectorRef.current) {
      recordSelectorRef.current.scrollLeft = 0;
    }
  }, [showPianoModal]);

  const handleRecordClick = (idx) => {
    setCurrentVideoIndex(idx);
    if (recordSelectorRef.current) {
      const recordWidth = 116; // width + gap
      recordSelectorRef.current.scrollTo({
        left: idx * recordWidth,
        behavior: 'smooth'
      });
    }
  };

  const pianoLink = (
    <span
      className="piano-link"
      onClick={() => setShowPianoModal(true)}
      tabIndex={0}
      role="button"
      style={{ outline: 'none' }}
    >
      {pianoText.split('').map((char, i) =>
        <span className="uh-letter" style={{ animationDelay: `${i * 0.04}s` }} key={i}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      )}
    </span>
  );

  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p> Hello! I'm Khang Chung, Computer Science student at {uhLink}. 
            I specialize in full stack development and love designing game.</p>
          <p>
            When I'm not coding, you can find me in the gym, walking in the park, or {pianoLink}!
          </p>
          <div className="resume-link">
          <GradientButton 
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </GradientButton>
        </div>
        </div>
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/khangchung.jpg`} alt="Khang Chung" />
        </div>
      </div>
      {showPianoModal && (
        <div 
          className="piano-modal-overlay" 
          onClick={() => setShowPianoModal(false)}
          onWheel={e => {
            const modal = e.currentTarget.querySelector('.piano-modal');
            if (modal) {
              const scrollContainer = modal.querySelector('.record-selector');
              if (scrollContainer) {
                scrollContainer.scrollLeft += e.deltaY;
                e.preventDefault();
              }
            }
          }}
        >
          <div 
            className="piano-modal" 
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative' }}
          >
            <button 
              className="close-modal-btn" 
              onClick={() => setShowPianoModal(false)}
              style={{
                position: 'absolute',
                top: '-25px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                padding: '0.5rem',
                zIndex: 1
              }}
            >
              ×
            </button>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              padding: '1rem'
            }}>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                width: '100%'
              }}>
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  maxWidth: '800px',
                  aspectRatio: '16/9'
                }}>
                  {pianoPieces.map((piece, idx) => (
                    <video
                      key={piece.name}
                      ref={videoRefs.current[idx]}
                      src={piece.video}
                      controls
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: 12,
                        opacity: currentVideoIndex === idx ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                        pointerEvents: currentVideoIndex === idx ? 'auto' : 'none'
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {pianoPieces[currentVideoIndex].name}
                  </div>
                  <div style={{ color: '#aaa', fontSize: '0.98rem' }}>
                    {pianoPieces[currentVideoIndex].composer}
                  </div>
                </div>
              </div>
              
              <div 
                className="record-selector" 
                ref={recordSelectorRef}
                onScroll={handleScroll}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  overflowX: 'auto',
                  padding: '1rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none'
                  },
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {pianoPieces.map((piece, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleRecordClick(idx)}
                    style={{
                      cursor: 'pointer',
                      opacity: currentVideoIndex === idx ? 1 : 0.7,
                      transition: 'all 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flexShrink: 0
                    }}
                  >
                    <div style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      border: currentVideoIndex === idx ? '2px solid #666' : 'none',
                      boxShadow: currentVideoIndex === idx ? '0 0 10px rgba(0,0,0,0.3)' : 'none'
                    }}>
                      <img 
                        src={`${process.env.PUBLIC_URL}/images/${piece.recordImage}`}
                        alt="record"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem',
                      textAlign: 'center',
                      maxWidth: '100px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {piece.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;