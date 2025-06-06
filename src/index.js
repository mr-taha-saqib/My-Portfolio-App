// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Ensure the styles are imported from the correct location

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
