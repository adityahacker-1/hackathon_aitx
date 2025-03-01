import axios from "axios";

const handleSubmit = (formData, navigate, setErrorMessage) => {
  return async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", formData);

      if (response.status === 200) {
        localStorage.setItem("user_id", response.data.user_id); // Store user ID in local storage
        localStorage.setItem("role", response.data.role); // Store role
        alert(response.data.message);

        // Redirect user based on role
        if (response.data.role === "boss") {
          navigate("/boss-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }
    } catch (error) {
      setErrorMessage("Invalid email or password! Please try again.");
    }
  };
};

export default handleSubmit;
