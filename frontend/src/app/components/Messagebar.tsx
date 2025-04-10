"use client";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaArrowCircleUp,
  FaArrowUp,
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
    <div className=" w-full">
      <form
        className="flex justify-between items-center bg-accent rounded-lg p-2 w-full h-12"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center px-3 w-full rounded-lg">
          <input
            value={currMsg}
            className="focus:outline-none w-full mb-1"
            type="text"
            placeholder="send me a message..."
            onChange={(e) => setCurrMsg(e.target.value)}
          />
          {/* <button className="flex justify-center items-center bg-hubspot w-8 h-8 rounded-lg">
            <FaArrowUp className="text-sm" />
          </button> */}
        </div>
        <div className="flex justify-center items-center w-1/3 gap-2">
          <a
            className="flex justify-center items-center bg-dark font-bold w-8 h-8 font-sans rounded-full"
            href="https://www.linkedin.com/in/fujacob/"
            target="_blank"
          >
            <FaLinkedinIn className="text-lg" />
          </a>

          <a
            className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full"
            href="https://www.linkedin.com/in/fujacob/"
            target="_blank"
          >
            <FaGithub className="text-lg" />
          </a>

          <a
            className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full"
            href="https://www.linkedin.com/in/fujacob/"
            target="_blank"
          >
            <FaTwitter className="text-lg" />
          </a>

          <a
            className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full"
            href="https://www.linkedin.com/in/fujacob/"
            target="_blank"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Messagebar;
