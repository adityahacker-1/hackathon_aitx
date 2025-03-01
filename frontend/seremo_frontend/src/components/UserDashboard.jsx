import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole !== "user") {
      setShowPopup(true);
    }
  }, [navigate]);

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold">Access Denied</h2>
            <p>You need to log in as a User to view this page.</p>
            <button className="btn btn-primary mt-4" onClick={() => navigate("/login")}>Go to Login</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <>
          <UserNavbar />
          <div className="text-center mt-10">
            <h1 className="text-2xl font-bold">Welcome, User!</h1>
            <p>This is your dashboard.</p>
          </div>
        </>
      )}
    </>
  );
};

export default UserDashboard;
