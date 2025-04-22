"use client";
import React from "react";
import Message from "../components/Message";
import Time from "../components/Time";
import Head from "../components/Head";
import Typewriter from "typewriter-effect";
const page = () => {
  return (
    <>
      <span className="font-black text-xl text-center py-0.5 rounded-lg">
        Weehooey
      </span>
      <span className="ml-2 text-xs font-sans italic rounded-2xl">
        Oct 2023 - Jan 2024
      </span>
      <br />
      <span className="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">
        Information Technology Intern
      </span>
  
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="font-black text-xl text-center py-0.5 rounded-lg">Weehooey</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Oct 2023 - Jan 2024</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Information Technology Intern</span>')
            .typeString('<br><br><span class="font-black text-xl text-center py-0.5 rounded-lg">1000 Islands Gan. Chamber</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Jun 2024 – Sep 2024</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Web/Graphic Intern</span>')
            .typeString('<br><br><span class="font-black text-xl text-center py-0.5 rounded-lg">PetMap</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Dec 2024 – Mar 2025</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Software Engineer</span>')
            .typeString('<br><br><span class="font-black text-xl text-center py-0.5 rounded-lg">3Tenets Consulting</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Jan 2025 – Present</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Full Stack Developer</span>')
            .typeString('<br><br><span class="font-black text-xl text-center py-0.5 rounded-lg">Bridgewell Financial</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Feb 2025 – Apr 2025</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Software Engineering Intern</span>')
            .start();
        }}
        options={{
          delay: 2,
          cursor: "",
        }}
      />
      <div className="p-24">
        <h1 className="text-sm sm:text-9xl font-semibold">
          @fujacob
          <p className="font-black text-base sm:text-9xl">
            jacob.fu@uwaterloo.ca
          </p>
        </h1>
      </div>
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
