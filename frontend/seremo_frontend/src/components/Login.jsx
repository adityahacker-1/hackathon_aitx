import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginNavbar from "./LoginNavbar";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData); // ✅ Debugging Log

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Server Response:", response.data); // ✅ Debugging Log

      if (response.status === 200) {
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("role", response.data.role);

        alert(response.data.message);
        navigate(response.data.role === "boss" ? "/boss-dashboard" : "/user-dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error);
      setErrorMessage("Invalid credentials! Please try again.");
    }
  };

  return (
    <>
      <LoginNavbar />
      <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-white rounded">
        <h2 className="text-center text-2xl font-bold text-black">Login</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="input input-bordered w-full" />
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        <p className="text-center mt-4 text-black">
          Not registered?{" "}
          <button onClick={() => navigate("/register")} className="text-blue-500 hover:underline">
            Register here
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
