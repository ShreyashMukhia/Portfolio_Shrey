import React from "react";
import Botlogo from "../../assets/chatbot.png";
function Chatmsg({ chat }) {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message `}
      >
        {chat.role === "model" && (
          <img src={Botlogo} alt="bot-logo" className="bot-logo" />
        )}
        <p className="message-text">{chat.text}</p>
      </div>
    )
  );
}

export default Chatmsg;
