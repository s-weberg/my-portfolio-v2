import React from 'react';


function Popup({ project, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.name}</h2>
        <img src={project.screenshot} alt={project.name} className="popup-image" />
        <p><strong>GitHub Repo:</strong> <a href={project.repo}>{project.repo}</a></p>
        <p><strong>Technologies:</strong> {project.tech.join(', ')}</p>
        <div className="writeup">
          <h3>Project Details</h3>
          <p><strong>What it does:</strong> {project.writeup.description}</p>
          <p><strong>What I learned:</strong> {project.writeup.learned}</p>
          <p><strong>My role:</strong> {project.writeup.role}</p>
          <p><strong>Challenges solved:</strong> {project.writeup.challenges}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;