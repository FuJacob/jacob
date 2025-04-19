import React from "react";

const Head = () => {
  return (
    <div className="text-lg flex flex-col justify-end mb-6 h-2/5">
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center items-center w-1/3">
          <div className="relative z-50 left-38 top-14 w-10 h-10 bg-green-600 rounded-full border-4" />
          <img
            src="avatar4.jpg"
            alt="profile picture of jacob"
            className="w-42 h-42 rounded-full border-4 shadow-2xl object-cover"
          />
        </div>
        <div className="flex flex-col w-2/3">
          <h1 className="text-5xl font-semibold mb-2">
            hello, i'm <span className="font-black">jacob fu</span>.
          </h1>
          <h2 className="font-bold mb-4">
            &mdash; always confused, always learning
          </h2>
          <div className="bg-dark p-3 rounded-lg shadow-2xl">
            <h2 className="flex items-center gap-1">
              ↪ incoming intern @{" "}
              <img
                src="hubspot.png"
                className="w-4 h-4 rounded-lg"
                alt="hubspot"
              />
              <span className="text-hubspot font-bold">HubSpot</span> this
              summer 2025
            </h2>{" "}
            <h2 className="">
              ↪ cs & finance @ University of Waterloo, graduating '2029
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
