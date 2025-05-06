"use client";
import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
export default function ResumeButton() {
  return (
    <a
      href="https://www.youtube.com/watch?v=98zHKN-xSHk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
        className="absolute gap-2 bg-hubspot rounded-full p-1 sm:p-2 border-2 hover:scale-110 transition duration-300 ease-in-out"
      >
        {/* <p className="font-sans font-black text-xs">RESUME</p>{" "} */}
        <FaBriefcase className=" text-xs sm:text-sm" />
      </motion.div>
    </a>
  );
}
