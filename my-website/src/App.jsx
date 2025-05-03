
import './App.css'
import React from 'react';
import Bank from './components/bank';
import Books from './components/Books';
import Game from './components/Game';


function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Bank
        name="Todo App"
        screenshot="path/to/todo-screenshot.jpg"
        githubRepo="https://github.com/yourusername/todo-app"
        techUsed
        shortWriteUp
      />
      <Books
        name="Weather App"
        screenshot="path/to/weather-screenshot.jpg"
        githubRepo="https://github.com/yourusername/weather-app"
        techUsed="React, API"
        shortWriteUp={{
          whatItDoes: "Displays weather data based on location.",
          whatYouLearned: "API integration.",
          yourRole: "Lead developer",
          challenges: "Error handling for API calls."
        }}
      />
      <Game
        name="E-commerce Site"
        screenshot="path/to/ecommerce-screenshot.jpg"
        githubRepo="https://github.com/yourusername/ecommerce-site"
        techUsed="React, Node.js"
        shortWriteUp={{
          whatItDoes: "An online shopping platform.",
          whatYouLearned: "Backend integration.",
          yourRole: "Collaborator",
          challenges: "Optimizing load times."
        }}
      />
    </div>
  );
}

export default App;