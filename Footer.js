import React from 'react';
import '../styles.css'; // Ensure this file contains styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>2025 ©. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/mr-taha-saqib/main" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/tahasaqib6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
