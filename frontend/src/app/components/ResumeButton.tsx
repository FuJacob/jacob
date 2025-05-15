"use client";
import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
export default function ResumeButton() {
  return (
    <a
      href="https://youtu.be/Sn3SUnL44w4?si=35OyaUUAQPh2BnYN&t=7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
        className="absolute gap-2 bg-hubspot rounded-full p-2 sm:p-3 border-2 dark:text-foreground text-accent hover:scale-110 transition duration-300 ease-in-out"
      >
        {/* <p className="font-sans font-black text-xs">RESUME</p>{" "} */}
        <FaBriefcase className=" sm:text-xl " />
      </motion.div>
    </a>
  );
}
