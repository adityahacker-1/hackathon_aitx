import axios from "axios";

const handleSubmit = (formData, navigate, setErrorMessage) => {
  return async (e) => {
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
};

export default handleSubmit;
