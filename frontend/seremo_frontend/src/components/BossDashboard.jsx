import React from "react";
import Navbar from "./Navbar";

const BossDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Welcome, Boss!</h1>
        <p>Here you can manage users and view reports.</p>
      </div>
    </>
  );
};

export default BossDashboard;
