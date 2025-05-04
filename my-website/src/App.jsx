
import './App.css'
import React from 'react';
import Bank from './components/bank';
import Books from './components/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  </>
}


/*
function App() {
  return (
    <div className="App">
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
}*/

export default App;