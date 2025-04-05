"use client";
import Messagebar from "./Messagebar";
import Question from "./Question";
import Typewriter from "typewriter-effect";
/**
 * Chatbox component that displays a conversation interface
 * with questions and answers in a scrollable container
 */
const Chatbox = () => {
  return (
    <div className="flex flex-col justify-left items-start w-full h-3/5 gap-12">
      <div className="overflow-hidden overflow-y-auto space-y-8">
        {/* ===== INTRODUCTION SECTION ===== */}
        <div className="flex flex-col gap-3">
          <Question question="tell me about yourself" />
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "sure! i'm jacob fu — a cs and finance student at the university of waterloo. i love solving problems at the intersection of tech, business, and design."
                  )
                  .start();
              }}
              options={{
                delay: 10,
                cursor: "",
              }}
            />
          </div>
        </div>

        {/* ===== WORK EXPERIENCE SECTION ===== */}
        <div className="flex flex-col gap-3">
          <Question question="where have you worked before?" />
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)

                  .typeString(
                    "Hello! Not too much on my end - just here and ready to chat or help with whatever you need today. How are you doing? Is there something specific I can assist you with?"
                  )
                  .start();
              }}
              options={{
                delay: 10,
                cursor: "",
              }}
            />
          </div>
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <div className="flex flex-col gap-3">
          <Question question="what kind of projects have you worked on?" />
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(5000)

                  .typeString(
                    "Hello! Not too much on my end - just here and ready to chat or help with whatever you need today. How are you doing? Is there something specific I can assist you with?"
                  )
                  .start();
              }}
              options={{
                delay: 10,
                cursor: "",
              }}
            />
          </div>
        </div>

        {/* ===== PERSONAL INTERESTS SECTION ===== */}
        <div className="flex flex-col gap-3">
          <Question question="what do you do outside of work?" />
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(7500)

                  .typeString(
                    "outside of work, i'm usually playing volleyball, ping pong, or badminton — anything competitive and fast-paced. i also enjoy poker for the strategy, and occasionally losing money trading tech stocks for fun (and pain). keeps me sharp, one way or another."
                  )
                  .start();
              }}
              options={{
                delay: 10,
                cursor: "",
              }}
            />
          </div>
        </div>

        {/* ===== CONTACT INFORMATION SECTION ===== */}
        <div className="flex flex-col gap-3">
          <Question question="how can i contact you?" />
          <div>
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
                  .start();
              }}
              options={{
                delay: 10,
                cursor: "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
