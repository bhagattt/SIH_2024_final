import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import botIcon from "../src/components/images/bot-icon.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load chat history from local storage
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setMessages(savedMessages);
  }, []);

  // Save chat history to local storage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const generateResponse = async (userMessage) => {
    const API_URL = "http://localhost:3000/generate-content";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: userMessage }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      return data.generatedText || "Sorry, I didn't understand that.";
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleChat = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { text: input, type: "outgoing" };
    const newMessages = [
      ...messages,
      newMessage,
      { text: "Thinking...", type: "incoming" },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const botMessage = await generateResponse(input);
      const updatedMessages = newMessages.slice(0, -1);
      updatedMessages.push({ text: botMessage, type: "incoming" });
      setMessages(updatedMessages);
    } catch {
      const updatedMessages = newMessages.slice(0, -1);
      updatedMessages.push({
        text: "Error: Unable to get a response from the server.",
        type: "incoming",
      });
      setMessages(updatedMessages);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <img
        src={botIcon}
        alt="Chatbot"
        className="chatbot-icon"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className="chatbot">
          <h1>Chat with the Bot</h1>
          <div className="chat-history">
            {messages.map((message, index) => (
              <div key={index} className={`chat-entry ${message.type}`}>
                {message.type === "incoming" && (
                  <img src="images/bot.jpg" alt="Bot" />
                )}
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleChat} className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
