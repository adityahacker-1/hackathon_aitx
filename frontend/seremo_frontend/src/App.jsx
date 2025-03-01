import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import BossDashboard from "./components/BossDashboard";
import Navbar from "./components/Navbar"; // Import Navbar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar added here to be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/boss-dashboard" element={<BossDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
