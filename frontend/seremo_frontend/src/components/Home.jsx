import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HomeNavbar from "./Homenavbar";

const Home = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) {
      navigate("/login");
    } else {
      setUserRole(role);
    }
  }, [navigate]);

  return (
    <>
      <HomeNavbar />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        {userRole === "boss" ? (
          <button className="btn btn-primary" onClick={() => navigate("/boss-dashboard")}>Go to Boss Dashboard</button>
        ) : (
          <button className="btn btn-primary" onClick={() => navigate("/user-dashboard")}>Go to User Dashboard</button>
        )}
      </div>
    </>
  );
};

export default Home;
