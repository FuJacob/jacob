"use client";
import { useState } from "react";
import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
import { MessageProvider } from "./MessageContext";
import { motion } from "motion/react";
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar, FaRocket } from "react-icons/fa";
import TopBoxBar from "./components/TopBoxBar";
export default function Home() {
  return (
    <motion.div
      className="flex flex-col sm:justify-center items-center sm:h-9/10 w-full h-full"
      // initial={{ scale: 0.95 }}
      // whileHover={{ scale: 1 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 200,
      //   mass: 0.3,
      // }}
    >
      <TopBoxBar />
      <div className="h-full sm:h-[56rem] w-full overflow-y-auto p-4 flex flex-col items-center justify-end text-xl bg-background shadow-2xl sm:rounded-b-3xl">
        <MessageProvider>
          <Head />
          <Chatbox />
          <Messagebar />
        </MessageProvider>
      </div>
    </motion.div>
  );
}
