"use client";
import { useState } from "react";
import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
import { MessageProvider } from "./MessageContext";
import { motion } from "motion/react";

export default function Home() {
  const currDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <motion.div
      className="flex flex-col justify-center items-center sm:justify-center sm:items-center h-screen "
      // initial={{ scale: 0.95 }}
      // whileHover={{ scale: 1 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 200,
      //   mass: 0.3,
      // }}
    >
      <div className="flex justify-center items-center text-secondary font-sans font-bold rounded-t-3xl w-full p-2 bg-dark shadow-2xl">
        {currDate}
      </div>

      <div className="h-4/5 sm:h-7/10 w-full overflow-y-auto p-4 flex flex-col items-center justify-end text-xl bg-[#262624] shadow-2xl rounded-3xl">
        <MessageProvider>
          <Head />
          <Chatbox />
          <Messagebar />
        </MessageProvider>
      </div>
    </motion.div>
  );
}
