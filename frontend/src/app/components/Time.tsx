"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Question from "./Question";
import Head from "./Head";
import Typewriter from "typewriter-effect";

const Time = () => {
  // const [currTime, setCurrTime] = useState(
  //   new Date().toLocaleTimeString([], { hour12: false })
  // );
  const [index, setIndex] = useState(0);

  const currDate = new Date().toLocaleDateString();

  const strings = [
    "↳ i wanted to be a civil engineer, then an optometrist — now i'm here",
    "↳ i made an .io game in 2019 that hit 4.2M plays from 248K users",
    "↳ i like poker, but i get bored after an hour every time",
    "↳ i've crashed overnight in the MC building more than 5 times",
    "↳ my favourite uwaterloo course so far has been CFM101",
    "↳ born and raised in kingston, ON — have been here my whole life",
    "↳ i love volleyball, even if i kind of suck at it",
    "↳ favourite anime? easy — naruto",
    "↳ favourite movie? probably parasite — you should watch it",
  ];

  useEffect(() => {
    const fadeInInterval = setInterval(
      () => setIndex((prev) => (prev + 1) % strings.length),
      4000
    );

    return () => {
      clearInterval(fadeInInterval);
    };
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setCurrTime(new Date().toLocaleTimeString([], { hour12: false })),
  //     1000
  //   );
  //   clearInterval(interval);
  // }, [currTime]);
  return (
    <motion.div
      initial={{ x: -2000, scale: 0 }}
      animate={{ x: 0, scale: 1 }}
      transition={{
        type: "spring",
        ease: "easeInOut",
        delay: 0.6,
        duration: 1,
      }}
      className="hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out  bg-dark rounded-lg flex justify-between items-center w-full h-20 px-4 py-6 mt-2"
    >
      <div className="flex w-full items-center gap-2">
        <img src="snoopy1.png" alt="snoopy" className="w-4 sm:w-16" />
        <div className="flex flex-col">
          <h1 className="text-xs sm:text-sm font-semibold">
            here's some fun facts about me :{")"}
          </h1>

          <motion.div
            className="text-sm sm:text-lg font-black"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {strings[index]}
          </motion.div>
        </div>
        {/* <Typewriter
                options={{
                  strings: [
                    "↳ Wanted to be a civil engineer, then an optometrist — now swe",
                    "↳ Built an io game in 2019 that hit 4.2M plays from 248K people",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20
                }}
              /> */}
      </div>
      {/* <div className="bg-white p-0.5 h-full rounded-full" /> */}
      {/* <div className="hidden sm:block font-bold text-xs sm:text-lg flex flex-col text-right px-2 py-1 shadow-2xl">
        {/* <h2>{currTime}</h2> */}
      {/* <h2>{currDate}</h2> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Time;
