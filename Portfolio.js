import React from 'react';
import '../styles.css';

const Portfolio = ({ data }) => {
  // If no data is provided, show a loading message
  if (!data || !data.name) {
    return <p className="container">Please enter details first.</p>;
  }

  return (
    <div className="container">
      {/* Profile Section - Shows uploaded profile picture, name, and bio */}
      <div className="profile">
        {data.profilePic && <img src={data.profilePic} alt="Profile" className="profile-pic" />}
        <h1>{data.name}</h1>
        <p className="bio">{data.bio}</p>
      </div>

      {/* Skills Section - Displays a list of skills */}
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {data.skills ? data.skills.split(',').map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          )) : <p>No skills added.</p>}
        </ul>
      </div>

      {/* Interests Section - Displays a list of interests */}
      <div className="interests">
        <h2>Interests</h2>
        <ul>
          {data.interests ? data.interests.split(',').map((interest, index) => (
            <li key={index}>{interest.trim()}</li>
          )) : <p>No interests added.</p>}
        </ul>
      </div>

      {/* Projects Section - Displays a list of projects with images and GitHub links */}
      <div className="project-list">
        <h2>Projects</h2>
        {data.projects && data.projects.length > 0 ? (
          data.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title || 'Untitled Project'}</h3>
              <p>{project.description || 'No description available'}</p>
              {project.image && <img src={project.image} alt={project.title} className="project-image" />}
              {project.github && (
                <p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
