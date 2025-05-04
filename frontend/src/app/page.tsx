"use client";
import { useState } from "react";
import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
import { MessageProvider } from "./MessageContext";
import { motion } from "motion/react";
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar, FaRocket } from "react-icons/fa";

export default function Home() {
  const currDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <motion.div
      className="flex flex-col sm:justify-center items-center sm:h-4/5 h-full"
      // initial={{ scale: 0.95 }}
      // whileHover={{ scale: 1 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 200,
      //   mass: 0.3,
      // }}
    >
      <div className="flex justify-center items-center text-secondary font-sans text-xs sm:text-sm font-bold sm:rounded-t-3xl w-full p-4 bg-dark shadow-2xl gap-4 ">
        <div className="sm:flex hidden justify-center items-center gap-1">
          {" "}
          <FaRocket /> seeking winter 2026{" "}
        </div>
        <span className="hidden sm:flex">•</span>
        <div className="flex justify-center items-center gap-1">
          <FaLocationPin /> Toronto, Canada
        </div>
        •
        <div className="flex justify-center items-center gap-1">
          <FaCalendar /> {currDate}
        </div>{" "}
      </div>

      <div className=" w-full overflow-y-auto p-4 flex flex-col items-center justify-end text-xl bg-[#262624] shadow-2xl sm:rounded-3xl">
        <MessageProvider>
          <Head />
          <Chatbox />
          <Messagebar />
        </MessageProvider>
      </div>
    </motion.div>
  );
}
