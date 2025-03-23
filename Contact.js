// components/Contact.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

// Contact component with a simple contact form and validation
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage success message visibility
  const [success, setSuccess] = useState(false);

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true); // Show success message
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
    }
  };

  // Function to handle input changes and clear validation errors dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error message when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move down by 20px
      animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
      className="contact-section"
    >
      <div className="contact-container">
        
        {/* Contact form */}
        <form onSubmit={handleSubmit} className="contact-form">
          
          {/* Name input field */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`form-input ${errors.name ? 'error' : ''}`}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Email input field */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Message textarea */}
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`form-input textarea ${errors.message ? 'error' : ''}`}
              rows="5"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          {/* Submit button with hover effect */}
          <motion.button
            whileHover={{ scale: 1.05 }} // Slightly increase button size on hover
            whileTap={{ scale: 0.95 }} // Slightly shrink button when clicked
            type="submit"
            className="submit-btn"
          >
            Send Message
          </motion.button>
        </form>

        {/* Success message displayed when form is submitted successfully */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Fade in and move up slightly
            animate={{ opacity: 1, y: 0 }}
            className="success-message"
          >
            Message sent successfully
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
