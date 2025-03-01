import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role"); // Get role from storage
    if (!role) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      setUserRole(role);
    }
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {userRole === "boss" ? (
        <button onClick={() => navigate("/boss-dashboard")}>Go to Boss Dashboard</button>
      ) : (
        <button onClick={() => navigate("/user-dashboard")}>Go to User Dashboard</button>
      )}
    </div>
  );
};

export default Home;
