import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Bar from "@/components/bar";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/modetoggle";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1>9Note</h1>
    </div>
  );
}
