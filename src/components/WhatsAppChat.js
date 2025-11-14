// components/WhatsAppChat.jsx
import React, { useState } from "react";
import styled from "styled-components";

const WhatsAppChat = ({
  phoneNumber = "0122670130",
  companyName = "Think AI",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim()) {
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <WhatsappContainer>
      <>
        {/* WhatsApp Button */}
        <div className="whatsapp-btn" onClick={toggleChat}>
          <svg
            className="whatsapp-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </div>

        {/* Chat Window */}
        {isOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <img src="/your-logo.png" alt={`${companyName} Logo`} />
              <div className="chat-title">
                <h3>{companyName}</h3>
                <p>Typically replies within an hour</p>
              </div>
              <button className="close-btn" onClick={closeChat}>
                &times;
              </button>
            </div>
            <div className="chat-body">
              <div className="intro-message">
                <p>👋 Hello there!</p>
                <p>How can we help you today?</p>
              </div>
            </div>
            <div className="chat-footer">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
              />
              <button className="send-btn" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        )}
      </>
    </WhatsappContainer>
  );
};

export default WhatsAppChat;

const WhatsappContainer = styled.nav`
  /* components/WhatsAppChat.css */

  .whatsapp-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #25d366;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    transition: all 0.3s ease;
  }

  .whatsapp-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .whatsapp-icon {
    width: 35px;
    height: 35px;
    fill: white;
  }

  /* Chat Window Styles */
  .chat-window {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 999;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    color: black;
  }

  .chat-header {
    background-color: #075e54;
    color: white;
    padding: 15px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .chat-header img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .chat-title h3 {
    margin: 0;
    font-size: 16px;
  }

  .chat-title p {
    margin: 0;
    font-size: 12px;
    opacity: 0.8;
  }

  .chat-body {
    padding: 15px;
    background-color: #ece5dd;
    height: 200px;
    overflow-y: auto;
  }

  .intro-message {
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  .chat-footer {
    padding: 10px;
    display: flex;
    border-top: 1px solid #f1f1f1;
    background-color: white;
  }

  .chat-footer input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 20px;
    outline: none;
  }

  .send-btn {
    margin-left: 10px;
    background-color: #25d366;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0 15px;
    cursor: pointer;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;
