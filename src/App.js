import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './components/Dashboard.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />
        
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<><Sidebar /><Dashboard /></>} />
      </Routes>
    </Router>
  );
}

export default App;
