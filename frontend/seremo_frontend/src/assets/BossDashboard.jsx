import React from "react";
import Navbar from "./Navbar";

const BossDashboard = () => {
  return (
    <div>
      <Navbar role="boss" />
      <div style={styles.container}>
        <h1>Welcome, Boss!</h1>
        <p>Manage users, track tasks, and control your organization from here.</p>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Manage Users</h3>
            <p>View and manage user accounts.</p>
          </div>
          <div style={styles.card}>
            <h3>Assign Tasks</h3>
            <p>Delegate work to team members.</p>
          </div>
          <div style={styles.card}>
            <h3>Reports</h3>
            <p>Generate performance reports.</p>
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

export default BossDashboard;
