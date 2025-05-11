import React, {useState} from 'react';
import bank from '../components/bank';
import books from '../components/Books';
import game from '../components/Game';
import Popup from '../components/Popup';









function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const projects = [
        {id: bank, title: 'Bank account', description: 'This project allows the user to log in to their bank account'},
        {id: books, title: 'Book library', description: 'This allows the user to create their own book library'},
        {id: game, title: 'Game', description: 'It is a game where you are going to write the same word that shows up, if it is correct, you will get more time for next word.'},
    ];




    return (
      <div>
        <h1>Portfolio</h1>
        <button onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? 'Hide Projects' : 'Show Projects'}
        </button>
        {showProjects && (
          <div className="projects">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.name}</h3>
                <img src={project.screenshot} alt={project.name} width="100" />
              </div>
            ))}
          </div>
        )}
        {selectedProject && (
          <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    );
  }
  
  export default Portfolio;


  /*
    return (
        <div class="card">
            <h1>My Projects</h1>
            <button onClick={() => setShowProjects (!showProjects)}>
                {showProjects ? 'Hide Projects' : 'Show projects'}
            </button>
            {showProjects && (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Portfolio;*/
