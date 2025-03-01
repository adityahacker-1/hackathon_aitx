"use client"

import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Namaste! Which ritual would you like assistance with today?", sender: "bot" },
  ]);
  const [chatbotInput, setChatbotInput] = useState("");

  const handleSubmitChatbot = async () => {
    if (chatbotInput.trim() === "") return;

    setMessages((prevMessages) => [...prevMessages, { text: chatbotInput, sender: "user" }]);

    try {
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        query: chatbotInput,
      });

      setMessages((prevMessages) => [...prevMessages, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Error: Unable to get a response.", sender: "bot" }]);
    }

    setChatbotInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitChatbot();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-orange-400">Hindu Ritual Chatbot</h2>
      <div className="w-full h-60 overflow-y-auto p-2 bg-gray-800 rounded flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 max-w-[80%] rounded-md ${msg.sender === "user" ? "bg-blue-600 self-end text-right" : "bg-gray-700 self-start"}`}>
            <span className="text-sm">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center mt-3 space-x-2">
        <textarea
          className="flex-1 p-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400"
          placeholder="Ask about Hindu rituals..."
          value={chatbotInput}
          onChange={(e) => setChatbotInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all"
          onClick={handleSubmitChatbot}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
