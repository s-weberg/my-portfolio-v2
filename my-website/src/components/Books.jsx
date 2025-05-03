import React from 'react';

const books = ({ name, screenshot, githubRepo, techUsed, shortWriteUp }) => {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <img src={screenshot} alt={`${name} screenshot`} />
      <p><strong>GitHub:</strong> <a href={githubRepo} target="_blank" rel="noopener noreferrer">{githubRepo}</a></p>
      <p><strong>Tech Used:</strong> {techUsed}</p>
      <div className="write-up">
        <p><strong>What the project does:</strong> {shortWriteUp.whatItDoes}</p>
        <p><strong>What you learned:</strong> {shortWriteUp.whatYouLearned}</p>
        <p><strong>Your role:</strong> {shortWriteUp.yourRole}</p>
        <p><strong>Challenges solved:</strong> {shortWriteUp.challenges}</p>
      </div>
    </div>
  );
};

export default books;