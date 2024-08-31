import React, { useState } from "react";
import "./Chatbot.css";
import botIcon from "../src/components/images/bot-icon.png";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setConversation((prevConversation) => [
        ...prevConversation,
        { prompt, response: data.generatedText },
      ]);
      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
      setConversation((prevConversation) => [
        ...prevConversation,
        { prompt, response: "Error generating response" },
      ]);
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
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="chatbot">
          <h1>Chat with the Bot</h1>
          <div className="chat-history">
            {conversation.map((entry, index) => (
              <div key={index} className="chat-entry">
                <p>
                  <strong>You:</strong> {entry.prompt}
                </p>
                <p>
                  <strong>Bot:</strong> {entry.response}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
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
}

export default Chatbot;
