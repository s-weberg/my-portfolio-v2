import React from 'react';

const game = ({ name, screenshot, githubRepo, techUsed, shortWriteUp }) => {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <img src={screenshot} alt={`${name} screenshot`} />
      <h3>GitHub: <a href={githubRepo} target="_blank" rel="noopener noreferrer">{githubRepo}</a></h3>
      
      <div className="write-up">
        <h3>What the project does: {shortWriteUp.whatItDoes}</h3>
        <p>This project was really fun! It is a game where you are going to write the 
          same word that shows up, if it's correct, you will get more time for next word.
        </p>
        <h3>What you learned: {shortWriteUp.whatYouLearned}</h3>
        <p>I have learned how to use DOM elements and more about how to use an array and the math object. </p>
        
        <h3>Challenges solved: {shortWriteUp.challenges}</h3>
        <p>I find it hard to keep all the different names in my mind and sometimes I mix them up. But again,
          thanks to Bonnie, and google, I eventually solved the issue.
        </p>
      </div>
    </div>
  );
};

export default game;