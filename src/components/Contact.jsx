import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>
          I'm always working on my next big project! Whether you have a question
          or want to discuss new opportunities, feel free to contact me!
        </p>


        <a href="mailto:khangmanhchung@gmail.com" class="button email-link">
          Email me!
          <div class="hoverEffect">
            <div></div>
          </div>
        </a>
        
        <div className="social-links">
          <a
            href="https://github.com/khangchung15"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kgcg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;