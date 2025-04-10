"use client";
import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
import { MessageProvider } from "./MessageContext";
export default function Home() {
  return (
    <main className="h-screen p-4 flex flex-col items-center justify-center text-xl">
      <MessageProvider>
        <Head />
        <Chatbox />
        <Messagebar />
      </MessageProvider>
    </main>
  );
}
