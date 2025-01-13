import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Bar from "@/components/bar";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
        <div>
        <Header />
        <Banner />
        <Bar/>
        <Timeline/>
        <Footer/>
        </div>
    </div>
  );
}
