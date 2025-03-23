import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataEntry from './components/DataEntry';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/AboutMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import './styles.css';

function App() {
  // State to manage portfolio data
  const [portfolioData, setPortfolioData] = useState({
    name: 'Muhammad Taha Saqib',
    bio: '8th Sem Data Science Student at FAST NUCES',
    profilePic: '',
    skills: '',
    interests: '',
    projects: [],
  });

  // State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        {/* Pass Dark Mode state and toggle function to Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<DataEntry onSubmit={setPortfolioData} />} />
          <Route path="/portfolio" element={<Portfolio data={portfolioData} />} />
          
          {/* Show Hero only on AboutMe Page */}
          <Route 
            path="/about" 
            element={
              <>
                <Hero name={portfolioData.name} bio={portfolioData.bio} />
                <About />
              </>
            } 
          />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
