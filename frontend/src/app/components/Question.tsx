const Question = ({ question = "tell me about yourself" }) => {
  return (
    <div className="flex gap-2 justify-center items-center font-sans bg-dark text-sm p-3 w-fit rounded-lg">
      <div className="flex justify-center items-center rounded-full bg-white w-6 h-6 text-center text-black">
        <p className="font-bold">A</p>{" "}
      </div>
      <h2 className="">{question}</h2>
    </div>
  );
};

export default Question;
