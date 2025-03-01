import React from "react";
import Navbar from "./Navbar";

const UserDashboard = () => {
  return (
    <div>
      <Navbar role="user" />
      <div style={styles.container}>
        <h1>Welcome, User!</h1>
        <p>Here you can access your profile, track your progress, and interact with the platform.</p>
        
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Profile</h3>
            <p>View and update your personal details.</p>
          </div>
          <div style={styles.card}>
            <h3>My Tasks</h3>
            <p>Manage your assigned tasks efficiently.</p>
          </div>
          <div style={styles.card}>
            <h3>Settings</h3>
            <p>Customize your preferences and security settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    width: "200px",
    textAlign: "center",
  },
};

export default UserDashboard;
