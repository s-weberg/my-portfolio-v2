
import './App.css'
import React, { useState } from 'react';
import Bank from './components/bank';
import Books from './components/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Navbar from './Navbar';
import PopupWindow from './components/Popup';

function App() {

  const [popupInfo, setPopupInfo] = useState({
    title: "This is a window with information",
    info: "This is the information",
  });
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => {
    setIsOpen(false);
  };
  
  return <>
  <div>
    <button onClick={setIsOpen(true)}>Open popup</button>
    {isOpen && (
      <PopupWindow
      title={popupInfo.title}
      info={popupInfo.info}
      onClick={closePopup}
      />
    )}
  </div>
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