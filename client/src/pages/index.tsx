import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Bar from "@/components/bar";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
        <Banner />
        <Bar/>
        <Timeline/>
        <div className="border-black border-2  flex justify-self-center"></div>
        <div className="font-manrope text-[50px] font-bold pt-6 flex justify-self-center">Journal Writting</div>
        <Footer/>
    </div>
  );
}
