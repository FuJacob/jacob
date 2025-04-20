"use client";
import Messagebar from "./Messagebar";
import Question from "./Question";
import Typewriter from "typewriter-effect";
import { useState, useContext, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Message from "./Message";
import QandA from "./QandA";
/**
 * Chatbox component that displays a conversation interface
 * with questions and answers in a scrollable container
 */

import { useMessage } from "../MessageContext";
const Chatbox = () => {
  const { messages } = useMessage();

  const [currSection, setCurrSection] = useState(-1);
  const [showResponse, setShowResponse] = useState(0);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  useEffect(() => {
    const waitBeforeChat = setTimeout(() => setCurrSection(0), 2500);
    return () => clearTimeout(waitBeforeChat);
  }, []);

  return (
    <div className="flex flex-col justify-left items-start w-full h-4/7 sm:h-3/5 gap-12 sm:text-2xl">
      <div className="overflow-y-auto space-y-8">
        {/* ===== INTRODUCTION SECTION ===== */}

        {currSection >= 0 && (
          <div className="flex flex-col gap-3">
            <div className="py-3" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="tell me about yourself" />
            </motion.div>{" "}
            {showResponse >= 1 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `hi i'm jacob fu. i study cs & finance at waterloo. i like to build things sometimes.`
                      )
                      .start()
                      .callFunction(() => {
                        scrollToBottom();
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== PROJECTS SECTION ===== */}
        {currSection >= 1 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="how did you get into software development?" />
            </motion.div>

            {showResponse >= 2 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `↪ in grade 8 i made a popular .io game on modd.io`
                      )
                      .typeString(`<br>↪ in grade 12 i did 2 internships`)
                      .typeString(
                        `<br>↪ in 1a term of waterloo i learnt python in CFM101`
                      )
                      .typeString(`<br>↪ then i went to 5 hackathons`)
                      .typeString(`<br>↪ now i am here`)
                      .start()
                      .callFunction(() => {
                        scrollToBottom();
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== WORK EXPERIENCE SECTION ===== */}
        {currSection >= 2 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="where have you worked before?" />
            </motion.div>

            {showResponse >= 3 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `<span class="inline-block bg-[#2AB24C] text-center px-2 py-1 rounded-lg font-sans text-lg font-bold">Weehooey</span> – IT Intern`
                      )
                      .typeString(
                        `<br><br><span class="inline-block bg-[#7d393a] text-center px-2 py-1 rounded-lg font-sans text-lg  font-bold">1000 Islands Gan. Chamber</span> – Web/Graphic Intern`
                      )
                      .typeString(
                        `<br><br><span class="inline-block bg-[#FF2381] text-center px-2 py-1 rounded-lg font-sans  text-lg font-bold">PetMap</span> – Software Engineer`
                      )
                      .typeString(
                        `<br><br><span class="inline-block bg-[#2B5D81] text-center px-2 py-1 rounded-lg font-sans text-lg  font-bold">3Tenets Consulting</span> – Full Stack Developer`
                      )
                      .typeString(
                        `<br><br><span class="inline-block bg-[#3A36BD] text-center px-2 py-1 rounded-lg font-sans text-lg  font-bold">Bridgewell Financial</span> – Software Engineering Intern`
                      )
                      .start()
                      .callFunction(() => {
                        scrollToBottom();
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
                {/* <div className="flex flex-wrap gap-3 font-sans font-black text-lg">
                  <div className="group bg-[#2AB24C] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">Weehooey</span>
                    <span className="hidden group-hover:block italic font-bold">
                      Information Technology Intern
                    </span>
                  </div>

                  <div className="group w-fit bg-[#7d393a] text-center px-2 py-1 rounded-lg">
                    <span className="group-hover:hidden">
                      200 Islands Gan. Chamber
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
                </div> */}
              </div>
            )}
          </div>
        )}

        {/* ===== PROJECTS SECTION ===== */}
        {currSection >= 3 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="what kind of projects have you worked on?" />
            </motion.div>

            {showResponse >= 4 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'check out my <a href="https://github.com/fujacob" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">github</a>.'
                      )
                      .start()
                      .callFunction(() => {
                        scrollToBottom();
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== PERSONAL INTERESTS SECTION ===== */}
        {currSection >= 4 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="what do you do outside of studying/working?" />
            </motion.div>

            {showResponse >= 5 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        "i love playing volleyball, badminton, and ping-pong (im so unique)."
                      )
                      .start()
                      .callFunction(() => {
                        scrollToBottom();
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== CONTACT INFORMATION SECTION ===== */}
        {currSection >= 5 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                scrollToBottom();
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="how can i contact you?" />
            </motion.div>

            {showResponse >= 6 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'you can reach me at <a href="mailto:jjacobfu@gmail.com" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">jjacobfu@gmail.com</a>, or connect/send me a message on <a href="https://www.linkedin.com/in/fujacob/" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">linkedin</a>.'
                      )
                      .start()
                      .callFunction(() => {
                        scrollToBottom();
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== PERSONAL INTERESTS SECTION ===== */}
        {currSection >= 6 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="i wanna ask you some more questions right now though" />
            </motion.div>
          </div>
        )}

        {showResponse >= 7 && (
          <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("sure. ask me anything below then 👇")
                  .start()
                  .callFunction(() => {
                    scrollToBottom();
                    setCurrSection(currSection + 1);
                  });
              }}
              options={{
                delay: 2,
                cursor: "",
              }}
            />
          </div>
        )}

        {messages &&
          messages.map(
            (
              { question, answer }: { question: string; answer: string },
              index: number
            ) => {
              scrollToBottom();
              return (
                <Message
                  question={question}
                  msg={answer}
                  key={index}
                  scrollToBottom={scrollToBottom}
                />
              );
            }
          )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Chatbox;
