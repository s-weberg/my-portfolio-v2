import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function Navbar () {
    return <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                
            </ul>
        </nav>
    </div>
}

export default Navbar;