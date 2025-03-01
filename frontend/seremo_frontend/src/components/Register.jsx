import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage("Registration failed! Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-white rounded">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="input input-bordered w-full" />
          <select name="role" onChange={handleChange} className="select select-bordered w-full">
            <option value="user">User</option>
            <option value="boss">Boss</option>
          </select>
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
