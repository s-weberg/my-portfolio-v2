import React from 'react';
import '../App.css'



function Popup({ project, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.name}</h2>
        <img src={project.screenshot} alt={project.name} className="popup-image" />
        <p><strong>GitHub repositories:</strong> <a target="_blank" href={project.repo}>s-weberg/my-portfolio</a></p>
        <p><strong>Technologies used:</strong> {project.tech}</p>
        <div className="writeup">
          <h2>Description</h2>
          <p>{project.writeup.description}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Popup;