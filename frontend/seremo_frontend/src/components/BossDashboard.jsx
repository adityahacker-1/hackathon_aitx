import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BossNavbar from "./BossNavbar";

const BossDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole !== "boss") {
      setShowPopup(true);
    }
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold">Access Denied</h2>
            <p>You need to log in as a Boss to view this page.</p>
            <button className="btn btn-primary mt-4" onClick={() => navigate("/login")}>Go to Login</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <>
          <BossNavbar />
          <div className="text-center mt-10">
            <h1 className="text-2xl font-bold">Welcome, Boss!</h1>
            <p>Here you can manage users and view reports.</p>
          </div>
        </>
      )}
    </>
  );
};

export default BossDashboard;
