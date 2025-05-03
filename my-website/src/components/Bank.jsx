import React from 'react';

const bank = ({ name, screenshot, githubRepo, techUsed, shortWriteUp }) => {
  return (
    <div className="project-card">
      <h2>Bank account</h2>
      <img src={screenshot} alt={`${name} screenshot`} />
      <h3>GitHub:</h3>
      <a href={githubRepo} target="_blank">{githubRepo}</a>
      <div className="write-up">
        <h3>What the project does: {shortWriteUp.whatItDoes}</h3>
        <p>This project allows the user to log in to their bank account. 
          Once logged in, they will find that it has various options. 
          They can view their balance, make a deposit, make a withdrawal, 
          and see the account name. 
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