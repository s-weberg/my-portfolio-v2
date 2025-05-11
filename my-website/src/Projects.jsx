
import './App.css'
import React from 'react';
import Bank from './components/Bank';
import Books from './components/Books';
import Game from './components/Game';
import Popup from '../components/Popup';



/*
const Project = ({ project, openPopup }) => {
  return (
    <div className="project-card" onClick={() => openPopup(project)}>
      <h3>{project.name}</h3>
      <img src={project.screenshot} alt={`${project.name} screenshot`} style={{ maxWidth: '200px' }} />
    </div>
  );
};

export default Project;*/


function Projects() {
    return (
      <div className="App" onClick={() => openPopup(Projects)}>
        <h1>My Portfolio</h1>
        <Bank
          name
          screenshot="src/assets/dollar.svg"
          githubRepo="https://github.com/s-weberg/Bank-account"
          techUsed
          shortWriteUp
        />
        <Books
          name
          screenshot="src/assets/books.svg"
          githubRepo="https://github.com/s-weberg/books"
          techUsed
          shortWriteUp
        />
        <Game
          name
          screenshot="src/assets/game.svg"
          githubRepo="https://github.com/s-weberg/Game"
          techUsed
          shortWriteUp
        />
      </div>
    );
  }
  
  export default Projects;