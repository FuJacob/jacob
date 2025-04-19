"use client";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaArrowAltCircleRight,
} from "react-icons/fa";

import { useState } from "react";
import { useMessage } from "../MessageContext";
const Messagebar = () => {
  const [currMsg, setCurrMsg] = useState("");
  const { messages, setMessages } = useMessage();

  const getResponse = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: currMsg }),
    });
    const data = await response.json();
    console.log(data);
    return data.answer;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currMsg.trim()) {
      const answer = getResponse();
      setMessages([...messages, { question: currMsg, answer: answer }]);
      console.log(answer);
    }
    setCurrMsg("");
  };
  return (
    <div className="flex w-full gap-4 mb-4">
      <form
        className="flex justify-between items-center bg-accent rounded-lg p-1 w-4/5 h-12"
        onSubmit={handleSubmit}
          >
        <div className="flex items-center w-full rounded-lg">
          <input
            value={currMsg}
            className="px-4 focus:outline-none w-full mb-1"
            type="text"
            placeholder="send me a message..."
            onChange={(e) => setCurrMsg(e.target.value)}
          />
          <button className="flex justify-center items-center w-12 h-12">
            <FaArrowAltCircleRight className="text-2xl" />
          </button>

        </div>
      </form>
      <div className="flex justify-center items-center w-1/3 gap-2 bg-accent rounded-lg w-2/5 h-12">
        <a
          className="flex justify-center items-center bg-dark font-bold w-8 h-8 font-sans rounded-full hover:bg-hubspot hover:scale-110 hover:duration-300"
          href="https://www.linkedin.com/in/fujacob/"
          target="_blank"
        >
          <FaLinkedinIn className="text-lg" />
        </a>

        <a
          className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full hover:bg-hubspot hover:scale-110 hover:duration-300"
          href="https://www.linkedin.com/in/fujacob/"
          target="_blank"
        >
          <FaGithub className="text-lg" />
        </a>

        <a
          className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full hover:bg-hubspot hover:scale-110 hover:duration-300"
          href="https://www.linkedin.com/in/fujacob/"
          target="_blank"
        >
          <FaTwitter className="text-lg" />
        </a>

        <a
          className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full hover:bg-hubspot hover:scale-110 hover:duration-300"
          href="https://www.linkedin.com/in/fujacob/"
          target="_blank"
        >
          <FaEnvelope className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default Messagebar;
