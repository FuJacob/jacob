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
    <div className=" overflow-y-auto flex flex-col justify-left items-start w-full h-4/10 sm:h-[55%] gap-12 text-base sm:text-xl bg-">
      <div className="space-y-8 ">
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
                        `hi i'm jacob fu. i study cs & finance at waterloo. i like playing volleyball and badminton, and i'm goated at valorant.`
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
                        `↳ in grade 8 i made a popular .io game on modd.io`
                      )
                      .typeString(`<br>↳ in grade 12 i did 2 internships`)
                      .typeString(`<br>↳ then i went to 5 hackathons`)
                      .typeString(`<br>↳ now i am here`)
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
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out text-lg ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        '<span class="font-black text-xl text-center py-0.5 rounded-lg">Weehooey</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Oct 2023 - Jan 2024</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Information Technology Intern</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">1000 Islands Gan. Chamber</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Jun 2024 – Sep 2024</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Web/Graphic Intern</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">PetMap</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Dec 2024 – Mar 2025</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Software Engineer</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">3Tenets Consulting</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Jan 2025 – Present</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Full Stack Developer</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">Bridgewell Financial</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Feb 2025 – Apr 2025</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Software Engineering Intern</span>'
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                        scrollToBottom();
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
                        'check out my <a href="https://github.com/fujacob" target="_blank" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">github</a>.'
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

        {/* ===== PERSONAL INTERESTS SECTION =====
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
        )} */}

        {/* ===== CONTACT INFORMATION SECTION ===== */}
        {currSection >= 4 && (
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

            {showResponse >= 5 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'you can reach me at <a href="mailto:jjacobfu@gmail.com" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">jjacobfu@gmail.com</a>, or connect/send me a message on <a href="https://www.linkedin.com/in/fujacob/" target="_blank"  class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">linkedin</a>.'
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
        {currSection >= 4 && (
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
              <Question question="i want to ask you more questions tho ..." />
            </motion.div>

            {showResponse >= 5 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("sure, send me a message below then! ")

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
