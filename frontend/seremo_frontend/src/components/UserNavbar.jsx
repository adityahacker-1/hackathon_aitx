import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css"; // Import CSS

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>User Dashboard</h2>
      <div>
        <Link to="/user-dashboard" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default UserNavbar;
