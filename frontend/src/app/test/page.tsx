"use client";
import React, { useContext, useState } from "react";
import Message from "../components/Message";
import Time from "../components/Time";
import Head from "../components/Head";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { createContext } from "react";
import { FaHashtag, FaShareAlt, FaUserFriends } from "react-icons/fa";

const page = () => {
  const [show, setShow] = useState(0);
  return (
    <main className="h-screen max-w-1/2 bg-dark flex justify-center items-center">
      <div className="flex justify-center items-center"></div>
    </main>
  );
};

export default page;
