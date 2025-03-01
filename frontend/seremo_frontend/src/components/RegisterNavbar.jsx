import React from "react";
import { Link } from "react-router-dom";

const RegisterNavbar = () => {
  return (
    <div className="navbar bg-gray-900 text-white px-6 py-4">
      <div className="flex-1">
        <Link to="/" className="text-lg font-bold">
          <img src="/logo.png" alt="Company Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="btn btn-outline">Home</Link>
        <Link to="/login" className="btn btn-outline">Login</Link>
      </div>
    </div>
  );
};

export default RegisterNavbar;