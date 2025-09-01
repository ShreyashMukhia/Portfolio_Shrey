import React, { useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Chatform({ chatHistory, setChatHistory, generateBotResponse }) {
  const inputRef = useRef();

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above, please adderss this query: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form action="#" className="Chat-form" onSubmit={handelFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="arrow-up">
        <FaArrowAltCircleUp />
      </button>
    </form>
  );
}

export default Chatform;
