"use client";
import Messagebar from "./Messagebar";
import Question from "./Question";
import Typewriter from "typewriter-effect";
import { useState, useContext, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Message from "./Message";
/**
 * Chatbox component that displays a conversation interface
 * with questions and answers in a scrollable container
 */

import { useMessage } from "../MessageContext";
const Chatbox = () => {
  const { messages } = useMessage();

  const [currSection, setCurrSection] = useState(0);
  const [showResponse, setShowResponse] = useState(0);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-left items-start w-full h-3/5 gap-12 mb-12">
      <div className="overflow-y-auto space-y-8">
        {/* ===== INTRODUCTION SECTION ===== */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onAnimationComplete={() => setShowResponse(showResponse + 1)}
          >
            <Question question="tell me about yourself" />
          </motion.div>{" "}
          {showResponse >= 1 && (
            <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `hi i'm jacob fu — a cs and finance student at the university of waterloo. i'm interested in building things that make life easier for businesses and/or people.`
                    )
                    .start()
                    .callFunction(() => {
                      setCurrSection(currSection + 1);
                    });
                }}
                options={{
                  delay: 10,
                  cursor: "",
                }}
              />
            </div>
          )}
        </div>

        {/* ===== WORK EXPERIENCE SECTION ===== */}
        {currSection >= 1 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => setShowResponse(showResponse + 1)}
            >
              <Question question="where have you worked before?" />
            </motion.div>

            {showResponse >= 2 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Hello! Not too much on my end - just here and ready to chat or help with whatever you need today. How are you doing? Is there something specific I can assist you with?"
                      )
                      .start()
                      .callFunction(() => {
                        setShowResponse(showResponse + 1);
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 10,
                    cursor: "",
                  }}
                /> */}
                <div className="flex flex-wrap gap-3 font-sans font-black text-sm">
                  <div className="group bg-[#2AB24C] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">Weehooey</span>
                    <span className="hidden group-hover:block italic font-bold">
                      Information Technology Intern
                    </span>
                  </div>

                  <div className="group w-fit bg-[#7d393a] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">
                      1000 Islands Gan. Chamber
                    </span>
                    <span className="hidden group-hover:block italic font-bold">
                      Web and Graphic Designer Intern
                    </span>
                  </div>

                  <div className=" group bg-[#FF2381] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">PetMap</span>
                    <span className="hidden group-hover:block italic font-bold">
                      Software Engineer
                    </span>
                  </div>

                  <div className=" group bg-[#2B5D81] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">
                      3Tenets Consulting
                    </span>
                    <span className="hidden group-hover:block italic font-bold">
                      Full Stack Developer
                    </span>
                  </div>

                  <div className=" group bg-[#3A36BD] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">
                      Bridgewell Financial
                    </span>
                    <span className="hidden group-hover:block italic font-bold">
                      Software Engineering Intern
                    </span>
                  </div>
                </div>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.start().callFunction(() => {
                      setShowResponse(showResponse + 1);
                      setCurrSection(currSection + 1);
                    });
                  }}
                  options={{
                    delay: 10,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== PROJECTS SECTION ===== */}
        {currSection >= 2 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => setShowResponse(showResponse + 1)}
            >
              <Question question="what kind of projects have you worked on?" />
            </motion.div>

            {showResponse >= 3 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `hi i'm jacob fu — a cs and finance student at the university of waterloo. i'm interested in building things that make life easier for businesses and people.`
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 10,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== PERSONAL INTERESTS SECTION ===== */}
        {currSection >= 3 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => setShowResponse(showResponse + 1)}
            >
              <Question question="what do you do outside of studying/working?" />
            </motion.div>

            {showResponse >= 4 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        "outside of studying and working i really like playing volleyball, badminton, and some ping-pong here and there (yeah ik im so unique). i also like losing lots of money trading tech stocks and going to hackathons!"
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 10,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== CONTACT INFORMATION SECTION ===== */}
        {currSection >= 4 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => setShowResponse(showResponse + 1)}
            >
              <Question question="how can i contact you?" />
            </motion.div>

            {showResponse >= 5 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("you can reach me at ")
                      .pauseFor(100)
                      .typeString(
                        '<a href="mailto:jjacobfu@gmail.com" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">jjacobfu@gmail.com</a>'
                      )
                      .typeString(", or find me on ")
                      .pauseFor(100)
                      .typeString(
                        '<a href="https://www.linkedin.com/in/fujacob/" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">linkedin</a>'
                      )
                      .typeString(" and ")
                      .pauseFor(100)
                      .typeString(
                        '<a href="https://github.com/fujacob" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">github</a>'
                      )
                      .typeString(". always happy to chat or collaborate!")
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 10,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}
        {messages &&
          messages.map(
            (
              { question, answer }: { question: string; answer: string },
              index: number
            ) => <Message question={question} msg={answer} key={index} />
          )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Chatbox;
