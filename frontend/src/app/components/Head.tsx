import React from "react";

const Head = () => {
  return (
    <div className="text-lg flex flex-col justify-end mb-6 h-2/5 w-full">
      <div className="flex justify-between items-center gap-4">
        <div className="relative flex justify-center items-center w-1/3">
          <div className="absolute z-50 left-36 top-28 w-10 h-10 bg-green-600 rounded-full border-4" />
          <img
            src="avatar4.jpg"
            alt="profile picture of jacob"
            className="w-40 h-40 rounded-full border-4 shadow-2xl object-cover"
          />
        </div>
        <div className="flex-1 flex-col ">
          <h1 className="text-5xl font-semibold mb-2">
            hello, i'm <span className="font-black">jacob fu</span>.
          </h1>
          <h2 className="font-bold mb-4">
            {/* &mdash; always confused, always learning */}
            &mdash; nice to meet you, stranger
          </h2>
          <div className="bg-dark p-3 rounded-lg shadow-2xl">
            <h2 className="flex items-center gap-1">
              ↪ incoming intern @{" "}
              <img
                src="hubspot.png"
                className="w-4 h-4 rounded-lg"
                alt="hubspot"
              />
              <span className="text-hubspot font-bold">hubspot</span> this
              summer '25
            </h2>{" "}
            <h2 className="flex items-center gap-1">
              ↪ cs & finance student @
              <img
                src="waterloo.png"
                className="w-4 h-4 rounded-lg"
                alt="uwaterloo"
              />
              <span className="text-yellow-400 font-bold">uwaterloo</span>, class of '29
            </h2>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold mb-2"></h1>
        <div className="bg-dark p-3 rounded-lg shadow-2xl">
          <h2 className="">my favourite quote of all time: </h2>

          <h2 className="text-2xl italic">
            "expect disappointment, and you'll never be disappointed."
          </h2>
        </div>
      </div>
      <div className="mt-3 w-full bg-secondary h-0.5 rounded-full" />
    </div>
  );
};

export default Head;
