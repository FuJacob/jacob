"use client";
import { motion } from "motion/react";
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
import Icon from "./Icon";

import { useState } from "react";
import { useMessage } from "../MessageContext";
import { FaArrowRight } from "react-icons/fa6";
const Messagebar = () => {
  // const [answer, setAnswer] = useState("");
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
    // setAnswer(data.answer);
    return data.answer;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currMsg.trim()) {
      const answer = await getResponse();
      console.log("wtf");

      setMessages([...messages, { question: currMsg, answer: answer }]);
      console.log(answer);
    }
    setCurrMsg("");
  };
  return (
    <div className="flex w-full gap-2 sm:mb-4 text-2xl">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
          duration: 1,
        }}
        className="flex justify-between items-center bg-accent rounded-lg p-1 w-4/5 h-16"
      >
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex items-center w-full rounded-lg text-lg sm:text-2xl">
            <input
              value={currMsg}
              className="px-4 focus:outline-none w-full mb-1"
              type="text"
              placeholder="ask me anything :)"
              onChange={(e) => setCurrMsg(e.target.value)}
            />
            <button
              type="submit"
              className="flex justify-center items-center w-11 h-10 hover:text-hubspot hover:duration-300 hover:scale-110 bg-dark rounded-lg mr-1"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
          duration: 1,
        }}
        className="flex flex-1 flex-row justify-center items-center gap-1 rounded-lg h-16 bg-accent p-2"
      >
        <Icon link="https://www.linkedin.com/in/fujacob/">
          <FaLinkedinIn />
        </Icon>
        <Icon link="https://github.com/fujacob/">
          <FaGithub />
        </Icon>
        <Icon link="https://www.linkedin.com/in/fujacob/">
          <FaTwitter />
        </Icon>{" "}
        <Icon link="mailto:jjacobfu@gmail.com">
          <FaEnvelope />
        </Icon>
      </motion.div>
    </div>
  );
};

export default Messagebar;
