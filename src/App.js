import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import StudyTimer from './components/StudyTimer/StudyTimer';
import DuaHome from './components/DuaHome/DuaHome';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>My Deen</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/study-timer">Study Timer</Link></li>
              <li><Link to="/dua-home">Duas</Link></li>

              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </header>
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
