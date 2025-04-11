import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">
            <img src="https://i.imgur.com/YourLogo.png" alt="Youth In Action Logo" />
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <button className="join-button">Join</button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 