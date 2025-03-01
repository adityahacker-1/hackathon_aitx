import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css"; // Import CSS

const BossNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Boss Dashboard</h2>
      <div>
        <Link to="/boss-dashboard" className="nav-link">Home</Link>
        <Link to="/manage-users" className="nav-link">Manage Users</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default BossNavbar;
