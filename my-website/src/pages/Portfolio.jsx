import React, {useState} from 'react';
import bank from '../components/Bank';
import books from '../components/Books';
import game from '../components/Game';
import Popup from '../components/Popup';



function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    /*
    const projects = [
        {id: bank, screenshot: "src/assets/dollar.svg", title: 'Bank account', description: 'This project allows the user to log in to their bank account'},
        {id: books, screenshot: "src/assets/books.svg", title: 'Book library', description: 'This allows the user to create their own book library'},
        {id: game, screenshot: "src/assets/game.svg", title: 'Game', description: 'It is a game where you are going to write the same word that shows up, if it is correct, you will get more time for next word.'},
    ];*/

    const projects = [
      {
        id: bank,
        name: 'Bank account',
        screenshot: "src/assets/dollar.svg",
        repo: 'https://github.com/username/project1',
        tech: ['React', 'CSS', 'JavaScript'],
        writeup: {
          description: 'A web app for task management.',
          learned: 'Learned state management with hooks.',
          role: 'Sole developer',
          challenges: 'Implemented responsive design.',
        },
      },
      {
        id: books,
        name: 'Book library',
        screenshot: "src/assets/books.svg",
        repo: 'https://github.com/username/project2',
        tech: ['React', 'Node.js'],
        writeup: {
          description: 'A chat application.',
          learned: 'Real-time updates with WebSockets.',
          role: 'Frontend developer',
          challenges: 'Optimized performance for real-time data.',
        },
      },
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
