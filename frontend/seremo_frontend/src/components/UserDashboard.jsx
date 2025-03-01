import React from "react";
import Navbar from "./Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Welcome, User!</h1>
        <p>This is your dashboard.</p>
      </div>
    </>
  );
};

export default UserDashboard;
