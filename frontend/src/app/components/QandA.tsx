import React from "react";
import Question from "./Question";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// Proper prop types
type QandAProps = {
  index: number;
  currSection: number;
  setCurrSection: React.Dispatch<React.SetStateAction<number>>;
  showResponse: number;
  setShowResponse: React.Dispatch<React.SetStateAction<number>>;
  question?: string;
  msg?: string;
  scrollToBottom?: () => void;
};

const QandA = ({
  index,
  currSection,
  setCurrSection,
  showResponse,
  setShowResponse,
  question = "question",
  msg = "test test",
  scrollToBottom = () => {},
}: QandAProps) => {
  if (currSection < index) return null;

  return (
    <div className="flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onAnimationComplete={() => {
          setShowResponse((prev) => prev + 1);
        }}
      >
        <Question question={question} />
      </motion.div>

      {showResponse >= currSection + 1 && (
        <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(msg || "")
                .start()
                .callFunction(() => {
                  scrollToBottom();
                  setCurrSection((prev) => prev + 1);
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
  );
};

export default React.memo(QandA);
