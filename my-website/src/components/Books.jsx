import React from 'react';

const books = ({ name, screenshot, githubRepo, techUsed, shortWriteUp }) => {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <img src={screenshot} alt={`${name} screenshot`} />
      <h3>GitHub:</h3>
      <p><a href={githubRepo} target="_blank" >{githubRepo}</a></p>
      
      <div className="write-up">
        <h3>What the project does: {shortWriteUp.whatItDoes}</h3>
        <p>This is a book library 
        </p>
        <h3>What you learned: {shortWriteUp.whatYouLearned}</h3>
        <p>I have learned how make a function using switch and while.</p>
        
        <h3>Challenges solved: {shortWriteUp.challenges}</h3>
        <p>I had some issues with the functions, but thanks to Bonnie I was able to solve the problem. </p>
      </div>
    </div>
  );
};

export default books;