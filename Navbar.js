import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <h2>Portfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
