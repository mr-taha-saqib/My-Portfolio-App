import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

const Hero = ({ name, bio }) => (
  <div className="hero-container">
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="hero"
    >
      <h1>{name}</h1>
      <p className="bio">{bio}</p>
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        className="cta-button"
        onClick={() => window.open('https://github.com/mr-taha-saqib/', '_blank')}
      >
        View My Work
      </motion.button>
    </motion.section>
  </div>
);

export default Hero;
