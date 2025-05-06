import { delay } from "motion";
import { motion } from "motion/react";
const Question = ({ question = "tell me about yourself" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, x: 30 }}
      className="flex gap-2 justify-center items-center font-sans bg-dark text-xs sm:text-sm p-3 w-fit rounded-lg shadow-2xl"
    >
      <img src="snoopy.png" className="rounded-full w-6 h-6 object-cover" />{" "}
      <h2 className="">{question}</h2>
    </motion.div>
  );
};

export default Question;
