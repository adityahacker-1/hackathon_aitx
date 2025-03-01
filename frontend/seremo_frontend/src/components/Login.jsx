import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleSubmit from "./handleSubmit";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-white rounded">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit(formData, navigate, setErrorMessage)} className="space-y-4">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="input input-bordered w-full" />
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
