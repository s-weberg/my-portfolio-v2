import React from 'react';

const books = ({ name, screenshot, githubRepo, shortWriteUp }) => {
  return (
    <div className="project-card">
      <h2>Book library</h2>
      <img src={screenshot} alt={`${name} screenshot`} />
      <h3>GitHub:</h3>
      <a href={githubRepo} target="_blank" >{githubRepo}</a>
      
      <div className="write-up">
        <h3>What the project does: {shortWriteUp.whatItDoes}</h3>
        <p>This is a book library where the user can type in different books and the author
          of the books. The user can mark them as read or unread to create a list. 
        </p>
        <h3>What you learned: {shortWriteUp.whatYouLearned}</h3>
        <p>Here I have also learned more about to make a function with while and switch.
           I also learned about the array push method.  </p>
        
        <h3>Challenges solved: {shortWriteUp.challenges}</h3>
        <p>I think everything is challenging but in a fun way. It was a fun project, 
          and with a lot of googling I managed to solve my issues.
        </p>
      </div>
    </div>
  );
};

export default books;