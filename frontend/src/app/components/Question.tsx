import { delay } from "motion";
import { motion } from "motion/react";
const Question = ({ question = "tell me about yourself" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, x: 30 }}
      className="flex gap-2 justify-center items-center font-sans bg-dark text-lg p-3 w-fit rounded-lg shadow-2xl"
    >
      <div className="flex justify-center items-center rounded-full bg-white w-6 h-6 text-center text-black">
        <p className="font-bold">A</p>{" "}
      </div>
      <h2 className="">{question}</h2>
    </motion.div>
  );
};

export default Question;
