"use client";
import React, { useContext, useState } from "react";
import Message from "../components/Message";
import Time from "../components/Time";
import Head from "../components/Head";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { createContext } from "react";
import Messagebar from "../components/Messagebar copy";
import { FaHashtag, FaShareAlt, FaUserFriends } from "react-icons/fa";

const GlobalStateContext = createContext(null);

const page = () => {
  const [show, setShow] = useState(0);
  return (
    <GlobalStateContext.Provider value={{ show, setShow }}>
      <main className="h-screen max-w-1/2 bg-dark flex justify-center items-center">
        <div className="flex justify-center items-center">
          <Messagebar />
        </div>
      </main>
    </GlobalStateContext.Provider>
  );
};

export default page;
