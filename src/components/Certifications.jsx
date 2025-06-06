import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Google AI Essentials",
      date: "April 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/MM5AMN653P89",
      issuer: "Google"
    },
    {
      title: "Game Design & Development: 2D Shooter",
      date: "June 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/3D29WE5L2B1G",
      issuer: "Michigan State University"
    },
  ];

  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3 className="certification-title">{cert.title}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
            <p className="certification-date">Issued: {cert.date}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 