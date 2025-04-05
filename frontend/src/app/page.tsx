import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
export default function Home() {
  return (
    <main className="h-screen p-4 flex flex-col items-center justify-center text-xl">
      <Head />
      <Chatbox />
      <Messagebar />
    </main>
  );
}
