// src/App.js
import React from "react";
import LManageSubject from "./components/LManageSubject/LManageSubject";

function App() {
  return (
    <div className="App">
      <LManageSubject />
    </div>
  );
}

export default App;

/* import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import ScheduleCall from './components/ScheduleCall/ScheduleCall';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar hidden by default

  useEffect(() => {
    const handleResize = () => {
      // Sidebar stays hidden on all screen sizes unless toggled
      // Don't auto-open on large screen anymore
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar onMenuClick={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule-call" element={<ScheduleCall />} />
            <Route path="/account" element={<div style={{ padding: '2rem' }}><h1>Account Page (Coming Soon)</h1></div>} />
            <Route path="/services" element={<div style={{ padding: '2rem' }}><h1>Services Page (Coming Soon)</h1></div>} />
            <Route path="/blog" element={<div style={{ padding: '2rem' }}><h1>Blog Page (Coming Soon)</h1></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; */