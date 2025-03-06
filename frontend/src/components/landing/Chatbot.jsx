"use client";

import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Namaste! Which ritual would you like assistance with today?", sender: "bot" },
  ]);
  const [chatbotInput, setChatbotInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitChatbot = async () => {
    if (chatbotInput.trim() === "") return;

    setIsLoading(true);
    setMessages((prevMessages) => [...prevMessages, { text: chatbotInput, sender: "user" }]);

    try {
      const response = await axios.post("", {
        message: chatbotInput,  // ✅ Fixed key to match backend
      });

      setMessages((prevMessages) => [...prevMessages, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Error: Unable to get a response.", sender: "bot" }]);
    }

    setChatbotInput("");
    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitChatbot();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 bg-gray-900 text-white rounded-lg shadow-lg transform translate-x-6">
      <h2 className="text-2xl font-bold mb-3 text-orange-400">Hindu Ritual Chatbot</h2>
      
      <div className="w-full h-96 overflow-y-auto p-3 bg-gray-800 rounded flex flex-col gap-3">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 max-w-[85%] rounded-lg ${msg.sender === "user" ? "bg-blue-600 self-end text-right" : "bg-gray-700 self-start"}`}>
            <span className="text-base">{msg.text}</span>
          </div>
        ))}
      </div>
      
      <div className="w-full flex items-center mt-4 space-x-3">
        <textarea
          className="flex-1 p-3 text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400"
          placeholder="Ask about Hindu rituals..."
          value={chatbotInput}
          onChange={(e) => setChatbotInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-5 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
          onClick={handleSubmitChatbot}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
