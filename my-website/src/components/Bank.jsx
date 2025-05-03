import React from 'react';

const bank = ({ name, screenshot, githubRepo, techUsed, shortWriteUp }) => {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <img src={screenshot} alt={`${name} screenshot`} />
      <h3>GitHub: <a href={githubRepo} target="_blank" rel="noopener noreferrer">{githubRepo}</a></h3>
      
      <div className="write-up">
        <h3>What the project does: {shortWriteUp.whatItDoes}</h3>
        <p>This project allows the user to sign in to the bank account. When inside the bank, they will
          have different choices. They can see their balance, make a deposit, make a withdrawal and see 
          the account name. 
        </p>
        <h3>What you learned: {shortWriteUp.whatYouLearned}</h3>
        <p>I have learned how make a function using switch and while.</p>
        
        <h3>Challenges solved: {shortWriteUp.challenges}</h3>
        <p>I had some issues with the functions, but thanks to Bonnie I was able to solve the problem. </p>
      </div>
    </div>
  );
};

export default bank;