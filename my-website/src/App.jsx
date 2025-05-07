
import './App.css'
import React from 'react';
import Bank from './components/bank';
import Books from './components/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Navbar from './Navbar';

function App() {
  return <>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;