import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";
import Botlogo from "../../assets/chatbot.png";
import { IoIosArrowDown } from "react-icons/io";
import Chatform from "./Chatform";
import Chatmsg from "./Chatmsg";
import { BsChatRightFill } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import { myInfo } from "../../Introdution.js";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: myInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();
  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");
      const apiResponce = data.candidates[0].content.parts[0].text
        .replace()
        .trim();
      updateHistory(apiResponce);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);
  return (
    <div className={`Chatbot ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span>
          <BsChatRightFill />
        </span>
        <span>
          <RiCloseLargeLine />
        </span>
      </button>
      <div className="Chat-popup">
        <div className="Chat-header">
          <div className="header-info">
            <img src={Botlogo} alt="bot-logo" className="bot-logo" />
            <h2 className="logo-text">Portfolio Assistant</h2>
          </div>
          <button
            className="arrow-down"
            onClick={() => setShowChatbot((prev) => !prev)}
          >
            <IoIosArrowDown />
          </button>
        </div>

        <div ref={chatBodyRef} className="Chat-body">
          <div className="message bot-message">
            <img src={Botlogo} alt="bot-logo" className="bot-logo" />
            <p className="message-text">
              Hello 👋
              <br />I am Shreyash,s portfolio assistant. Would you like to know
              about his skills, projects, education, or resume first?
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <Chatmsg key={index} chat={chat} />
          ))}
        </div>
        <div className="Chat-footer">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
