"use client";
import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
import { MessageProvider } from "./MessageContext";
import { motion } from "motion/react";
export default function Home() {
  return (
    <motion.div
      className="flex sm:justify-center items-center h-screen "
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        mass: 0.3,
      }}
    >
      <div className="h-4/5 sm:h-4/5 w-full overflow-y-auto p-4 flex flex-col items-center justify-end text-xl bg-[#262624] shadow-2xl rounded-3xl">
        <MessageProvider>
          <Head />
          <Chatbox />
          <Messagebar />
        </MessageProvider>
      </div>
    </motion.div>
  );
}
