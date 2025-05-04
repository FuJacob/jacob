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
import { FaHashtag } from "react-icons/fa";

import { useState } from "react";
import { useMessage } from "../MessageContext";
import { FaArrowRight } from "react-icons/fa6";
const Messagebar = () => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div className="flex w-full gap-2 text-2xl h-1/10">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
          duration: 1,
        }}
        className="flex justify-between items-center bg-accent rounded-lg p-1 w-full h-16"
      >
        <form className="w-full">
          <div className="flex items-center w-full rounded-lg text-lg sm:text-2xl">
            <input
              className="px-4 focus:outline-none w-full mb-1"
              type="text"
              placeholder="ask me anything :)"
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
        {showIcons && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex gap-1"
          >
            <Icon link="https://www.linkedin.com/in/fujacob/">
              <FaLinkedinIn />
            </Icon>
            <Icon link="https://github.com/fujacob/">
              <FaGithub />
            </Icon>
            <Icon link="https://www.linkedin.com/in/fujacob/">
              <div className="text-white text-2xl font-black">𝕏</div>
            </Icon>{" "}
            <Icon link="mailto:jjacobfu@gmail.com">
              <FaEnvelope />
            </Icon>
          </motion.div>
        )}

        <button
          onClick={() => setShowIcons(!showIcons)}
          className="flex justify-center items-center bg-dark font-bold w-10 h-10 text-xl font-sans rounded-lg hover:bg-hubspot hover:scale-110 hover:duration-300"
        >
          <FaHashtag />
        </button>
      </motion.div>
    </div>
  );
};

export default Messagebar;
