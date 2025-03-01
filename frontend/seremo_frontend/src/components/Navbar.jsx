import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // Get user role from local storage

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="navbar bg-blue-500 text-white px-6 py-4">
      <div className="flex-1">
        <h1 className="text-lg font-bold">
          {role === "boss" ? "Boss Dashboard" : role === "user" ? "User Dashboard" : "Welcome"}
        </h1>
      </div>
      <div className="flex gap-4">
        {role ? (
          <>
            <Link to={role === "boss" ? "/boss-dashboard" : "/user-dashboard"} className="btn btn-outline">
              Home
            </Link>
            {role === "boss" && <Link to="/manage-users" className="btn btn-outline">Manage Users</Link>}
            {role === "user" && <Link to="/profile" className="btn btn-outline">Profile</Link>}
            <button onClick={handleLogout} className="btn btn-error">Logout</button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline">Register</Link>
            <Link to="/login" className="btn btn-outline">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
