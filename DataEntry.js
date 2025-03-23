import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";

const DataEntry = ({ onSubmit }) => {
  const navigate = useNavigate();

  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePic: null, // Store image file instead of URL
    skills: "",
    interests: "",
    projects: [], // Array to hold multiple project details
  });

  // Handle input field changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Profile Picture Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePic: reader.result }); // Convert image to Base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a new project entry (max 3)
  const handleAddProject = () => {
    if (formData.projects.length >= 3) {
      alert("You can add a maximum of 3 projects.");
      return;
    }

    setFormData({
      ...formData,
      projects: [...formData.projects, { id: Date.now(), title: "", description: "", image: "", github: "" }],
    });
  };

  // Handle Project Input Change
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [name]: value };
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Remove a project entry
  const handleRemoveProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate("/portfolio");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="data-entry-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="welcome-title">
          Build Portfolio
        </motion.h1>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="welcome-subtitle">
          Fill in your details to create a portfolio.
        </motion.p>
      </div>

      {/* Data Entry Form */}
      <div className="form-container">
        <h2 className="form-title">Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          </div>

          {/* Bio Input */}
          <div className="form-group">
            <input type="text" name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} required />
          </div>

          {/* Profile Picture Upload */}
          <div className="form-group">
            <label>Upload Profile Picture:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {formData.profilePic && <img src={formData.profilePic} alt="Profile Preview" className="profile-preview" />}
          </div>

          {/* Skills Input */}
          <div className="form-group">
            <input type="text" name="skills" placeholder="Skills (comma-separated)" value={formData.skills} onChange={handleChange} />
          </div>

          {/* Interests Input */}
          <div className="form-group">
            <input type="text" name="interests" placeholder="Interests (comma-separated)" value={formData.interests} onChange={handleChange} />
          </div>

          {/* Button to Add Project Details */}
          <motion.button type="button" onClick={handleAddProject} whileHover={{ scale: 1.05 }} className="add-project-btn">
            Add Project Details
          </motion.button>

          {/* Dynamic Project Input Fields */}
          {formData.projects.map((project, index) => (
            <div key={project.id} className="project-input-group">
              <input type="text" name="title" placeholder="Project Title" value={project.title} onChange={(e) => handleProjectChange(index, e)} />
              <input type="text" name="description" placeholder="Description" value={project.description} onChange={(e) => handleProjectChange(index, e)} />
              <input type="text" name="image" placeholder="Image URL" value={project.image} onChange={(e) => handleProjectChange(index, e)} />
              <input type="text" name="github" placeholder="GitHub Link" value={project.github} onChange={(e) => handleProjectChange(index, e)} />
            
            </div>
          ))}

          {/* Submit Button */}
          <motion.button type="submit" whileHover={{ scale: 1.05 }} className="submit-btn">
            Generate Portfolio
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default DataEntry;
