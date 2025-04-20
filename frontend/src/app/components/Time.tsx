"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Question from "./Question";
import Head from "./Head";
const Time = () => {
  const [currTime, setCurrTime] = useState(
    new Date().toLocaleTimeString([], { hour12: false })
  );
  const currDate = new Date().toLocaleDateString();

  useEffect(() => {
    const interval = setInterval(
      () => setCurrTime(new Date().toLocaleTimeString([], { hour12: false })),
      1000
    );
    interval;
  }, [currTime]);
  return (
    <>
      <motion.div
        initial={{ x: -2000, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.6,
          duration: 1,
        }}
        className="bg-dark rounded-lg flex justify-between items-center w-full h-20 px-4 py-6 mt-2"
      >
        <div className="flex w-full sm:w-2/3 items-center gap-2">
          <img src="snoopy1.png" alt="snoopy" className="w-8 sm:w-24" />
          <h1 className="text-sm sm:text-lg font-semibold">
            prepare like it will all go wrong . . .
            <p className="font-black text-base sm:text-2xl">show up like it won't.</p>
          </h1>
        </div>
        <div className="bg-white p-0.5 h-full rounded-full" />
        <div className="hidden sm:block font-bold text-xs sm:text-lg flex flex-col text-right px-2 py-1 shadow-2xl">
          <h2>{currTime}</h2> <h2>{currDate}</h2>
        </div>
      </motion.div>
    </>
  );
};

export default Time;
