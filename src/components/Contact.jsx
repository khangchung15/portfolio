import React from 'react';
import GradientButton from './GradientButton';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p style={{ marginBottom: '2rem' }}>
          I'm always working on my next big project! Whether you have a question
          or want to discuss new opportunities, feel free to contact me!
        </p>

        <div style={{ marginBottom: '3rem' }}>
          <GradientButton 
            href="mailto:khangmanhchung@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me!
          </GradientButton>
        </div>
        
        <div className="social-links" style={{ gap: '2rem' }}>
          <a
            href="https://github.com/khangchung15"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.5rem 1rem' }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kgcg/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.5rem 1rem' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;