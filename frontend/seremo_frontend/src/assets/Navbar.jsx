import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav style={styles.navbar}>
      <h2>{role === "boss" ? "Boss Dashboard" : "User Dashboard"}</h2>
      <div>
        <Link to={role === "boss" ? "/boss-dashboard" : "/user-dashboard"} style={styles.link}>Home</Link>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    background: "#007bff",
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginRight: "15px",
    fontSize: "16px",
  },
  logoutButton: {
    padding: "8px 15px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  }
};

export default Navbar;
