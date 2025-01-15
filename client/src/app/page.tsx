"use client"
import "@/styles/globals.css";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Bar from "@/components/bar";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/modetoggle";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 dark:text-white">
            <Banner />
            <Bar />
            <Timeline />
            <div className="xl:w-[1280px] border-black dark:border-white border-2  flex justify-self-center"></div>
            <div className="font-manrope text-[50px] font-bold pt-6 flex justify-self-center">
                Journal Writing
            </div>
            <Footer />
        </div>

    );
}
