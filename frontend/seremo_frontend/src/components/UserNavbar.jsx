import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="navbar bg-gray-900 text-white px-6 py-4">
      <div className="flex-1">
        <h1 className="text-lg font-bold">User Dashboard</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/user-dashboard" className="btn btn-outline">Home</Link>
        <Link to="/profile" className="btn btn-outline">Profile</Link>
        <button onClick={handleLogout} className="btn btn-error">Logout</button>
      </div>
    </div>
  );
};

export default UserNavbar;
