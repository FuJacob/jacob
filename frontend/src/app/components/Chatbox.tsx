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
    <div className="flex flex-col justify-left items-start w-full h-2/5 sm:h-3/5 gap-12 sm:text-2xl">
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
                        `hi i'm jacob fu. i study cs & finance at waterloo. i like to build random stuff sometimes. i also like playing volleyball and badminton, and i'm goated at valorant.`
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
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out text-lg ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `<span class="bg-dark border-1 px-2 text-center py-0.5 rounded-lg">Weehooey<br class="sm:hidden"/> (Oct 2023 - Jan 2024)<br class="sm:hidden"/> | IT Intern</span>`
                      )
                      .typeString(
                        `<br><br><span class="bg-dark border-1 px-2 text-center py-0.5 rounded-lg">1000 Islands Gan. Chamber<br class="sm:hidden"/> (Jun 2024 – Sep 2024)<br class="sm:hidden"/> | Web/Graphic Intern</span>`
                      )
                      .typeString(
                        `<br><br><span class="bg-dark border-1 px-2 text-center py-0.5 rounded-lg">PetMap<br class="sm:hidden"/> (Dec 2024 – Mar 2025)<br class="sm:hidden"/> | Software Engineer</span>`
                      )
                      .typeString(
                        `<br><br><span class="bg-dark border-1 px-2 text-center py-0.5 rounded-lg">3Tenets Consulting<br class="sm:hidden"/> (Jan 2025 – Present)<br class="sm:hidden"/> | Full Stack Developer</span>`
                      )
                      .typeString(
                        `<br><br><span class="bg-dark border-1 px-2 text-center py-0.5 rounded-lg">Bridgewell Financial<br class="sm:hidden"/> (Feb 2025 – Apr 2025)<br class="sm:hidden"/> | Software Engineering Intern</span>`
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

        {/* ===== PERSONAL INTERESTS SECTION ===== */}
        {currSection >= 5 && (
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

        {showResponse >= 6 && (
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
