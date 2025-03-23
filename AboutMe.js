import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="about-container"
    >
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a Data Science student at FAST NUCES, Lahore. Passionate about AI, Machine Learning, and Web Development.
        </p>

        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Data Visualization</li>
          </ul>
        </div>

        <div className="interests-section">
          <h3>Interests</h3>
          <ul className="interests-list">
            <li>Artificial Intelligence</li>
            <li>Computer Vision</li>
            <li>Deep Learning</li>
            <li>Data Science</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
