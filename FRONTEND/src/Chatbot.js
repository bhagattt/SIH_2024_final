import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const createChatLi = (message, classname) => (
    <li className={`chat ${classname}`} key={Date.now()}>
      {" "}
      {/* Key for unique elements */}
      {classname === "outgoing" ? (
        <p>{message}</p>
      ) : (
        <>
          <img src="images/bot.jpg" alt="" />
          <p>{message}</p>
        </>
      )}
    </li>
  );

  const generateResponse = async (userMessage) => {
    const API_URL = "http://localhost:3000/generate-content";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userMessage }),
      });
      const data = await response.json();
      const botMessage =
        data.generatedText || "Sorry, I didn't understand that.";
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Remove "Thinking..." message
        createChatLi(botMessage, "incoming"),
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Remove "Thinking..." message
        createChatLi(
          "Error: Unable to get a response from the server.",
          "incoming"
        ),
      ]);
    }
  };

  const handleChat = () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      createChatLi(input, "outgoing"),
      createChatLi("Thinking...", "incoming"),
    ]);

    generateResponse(input);
    setInput("");
  };

  return (
    <div>
      <button
        className="chatbot-toggler"
        onClick={() => setShowChatbot((prev) => !prev)}
      >
        Toggle Chatbot
      </button>
      {showChatbot && (
        <div className="chatbox-container">
          <ul className="chatbox">{messages}</ul>
          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <span onClick={handleChat}>Send</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
