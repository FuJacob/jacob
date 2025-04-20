import React from "react";
import Message from "../components/Message";
import Time from "../components/Time";
import Head from "../components/Head"
const page = () => {
  return (
    <>
      <Head />
      {/* <Message question="Whats your favourite colour" msg="Whats up my guy bro" /> */}
      <Time />
    </>
  );
};

export default page;
