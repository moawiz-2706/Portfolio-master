import React, { useState } from "react";
import Chatbot from "./Chatbot";
import { AiOutlineRobot, AiOutlineClose } from "react-icons/ai";

function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-chatbot-container">
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <AiOutlineClose />
            </button>
          </div>
          <Chatbot />
        </div>
      )}
      <button
        className={`chatbot-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineRobot size={30} />
      </button>
    </div>
  );
}

export default FloatingChatbot;
