import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // If you have additional custom styles
import Home from './components/Home/Home';
import StudyTimer from './components/StudyTimer/StudyTimer';
import DuaHome from './components/DuaHome/DuaHome';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
   const navStyle = {
    backgroundColor: '#D0F3DF',
    // Add more styles as needed
  };

  return (
    <Router basename="/my-deen">
      <div className="app">
        <nav className="navbar navbar-expand-lg" style={navStyle}>
          <div className="container-fluid">
            <Link className="app-name" to="/">My Deen</Link>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/study-timer">Study Timer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dua-home">Dua Home</Link>
                </li>
                {/* Add more navbar items as needed */}
              </ul>
            </div>
          </div>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-timer" element={<StudyTimer />} />
            <Route path="/dua-home" element={<DuaHome />} />
            {/* Add more routes for other pages/components */}
          </Routes>
        </main>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} My Deen. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
