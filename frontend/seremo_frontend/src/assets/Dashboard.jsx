import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/dashboard", { withCredentials: true })
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => axios.post("http://127.0.0.1:5000/logout")}>Logout</button>
    </div>
  );
};

export default Dashboard;
