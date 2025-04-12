import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Khang Chung. All rights reserved.</p>
      <p>Built with React | Hosted with Vercel</p>
    </footer>
  );
};

export default Footer;