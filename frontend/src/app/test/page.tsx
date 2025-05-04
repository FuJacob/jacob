"use client";
import React from "react";
import Message from "../components/Message";
import Time from "../components/Time";
import Head from "../components/Head";
import Typewriter from "typewriter-effect";

import Messagebar from "../components/Messagebar copy"; 
import { FaHashtag, FaShareAlt, FaUserFriends } from "react-icons/fa";
const page = () => {
  return (
    <main  className="h-screen max-w-1/2 bg-dark flex justify-center items-center">
      
        <div className="flex justify-center items-center">
        <Messagebar />
        </div>
    </main>

  );
};

export default page;
