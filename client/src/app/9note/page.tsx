"use client"
import "@/styles/globals.css";
import Image from "next/image";
import Header from "@/components/header";
import { Content } from "next/font/google";

export default function About() {
  return (
    <div className="">
        <Header/>
        <div className="flex flex-col max-w-full lg:max-w-7xl lg:mt-40 justify-self-center items-center">
          <h1 className="text-8xl">9Note</h1><br />
          <h1 className="text-8xl">3 lines of positive notes</h1>
          <button className="w-60 h-20 mt-6 rounded-[50px] bg-[#007AFF] text-5xl" id="secondary">What Is</button>
          
        </div>
    </div>
  );
}
