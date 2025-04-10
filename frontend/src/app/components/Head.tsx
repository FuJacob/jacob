import React from "react";

const Head = () => {
  return (
    <div className="text-lg flex flex-col justify-end mb-6 h-2/5">
      <div className="flex justify-center items-center gap-4">
        <img
          src="avatar4.jpg"
          alt="profile picture of jacob"
          className="w-36 h-36 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold mb-2">
            hello, i'm <span className="font-black">jacob fu</span>.
          </h1>
          <h2 className="font-bold mb-4">
            &mdash; always confused, always learning
          </h2>
          <div className="bg-dark p-3 rounded-lg shadow-2xl">
            <h2 className="">
              ↪ incoming SWE intern @ HubSpot this summer 2025
            </h2>{" "}
            <h2 className="">
              ↪ cs & finance @ University of Waterloo, graduating '2029
            </h2>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="mt-3 w-full bg-secondary h-0.5 rounded-full" />
    </div>
  );
};

export default Head;
