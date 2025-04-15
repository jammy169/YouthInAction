import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Contact from './Contact';
import About from './About';
import './App.css';
import SignIn from './SignIn';

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
            <Link to="join">
            <button className="join-button">Join</button></Link>
            
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 