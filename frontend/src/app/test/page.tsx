"use client"
import React from "react";
import Message from "../components/Message";
import Time from "../components/Time";
import Head from "../components/Head"
import Typewriter from "typewriter-effect"
const page = () => {
  return (
    <>
      <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out text-2xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<br><span class="italic bg-dark border-1 px-2 text-center font-black py-0.5 rounded-lg">Weehooey</span> &nbsp; | &nbsp; IT Intern &nbsp; | &nbsp; <span class="p-1 bg-white rounded-md text-xs font-sans text-dark font-bold">Oct 2023 - Jan 2024</span>`
              )
              .typeString(
                `<br><br><span class="italic bg-dark border-1 px-2 text-center font-black py-0.5 rounded-lg">1000 Islands Gan. Chamber</span> &nbsp; | &nbsp; Web/Graphic Intern &nbsp; | &nbsp; <span class="p-1 bg-white rounded-md text-xs font-sans text-dark font-bold">Jun 2024 – Sep 2024</span>`
              )
              .typeString(
                `<br><br><span class="italic bg-dark border-1 px-2 text-center font-black py-0.5 rounded-lg">PetMap</span> &nbsp; | &nbsp; Software Engineer &nbsp; | &nbsp; <span class="p-1 bg-white rounded-md text-xs font-sans text-dark font-bold">Dec 2024 – Mar 2025</span>`
              )
              .typeString(
                `<br><br><span class="italic bg-dark border-1 px-2 text-center font-black py-0.5 rounded-lg">3Tenets Consulting</span> &nbsp; | &nbsp; Full Stack Developer &nbsp; | &nbsp; <span class="p-1 bg-white rounded-md text-xs font-sans text-dark font-bold">Jan 2025 – Present</span>`
              )
              .typeString(
                `<br><br><span class="italic bg-dark border-1 px-2 text-center font-black py-0.5 rounded-lg">Bridgewell Financial</span> &nbsp; | &nbsp; Software Engineering Intern &nbsp; | &nbsp; <span class="p-1 bg-white rounded-md text-xs font-sans text-dark font-bold">Feb 2025 – Apr 2025</span>`
              )
              .start();

          }}
          options={{
            delay: 2,
            cursor: "",
          }}
        />
      </div>
    </>
  );
};

export default page;
