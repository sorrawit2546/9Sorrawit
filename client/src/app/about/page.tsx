
import "@/styles/globals.css";
import { ModeToggle } from "@/components/modetoggle";
import Header from "@/components/header";
import ScrollTriggered from "@/components/ScrollTriggered";

export default function About() {
  return (
    <div className="dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <ScrollTriggered/>
      </div>
    </div>
  );
}
