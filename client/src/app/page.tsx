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
import Cardblog from "@/components/card";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";



export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 dark:text-white">
            <Banner />
            <Timeline />
            <div className="font-manrope text-[50px] font-bold pt-6 flex justify-self-center">
                BLOG!
               <Cardblog posts={[]} />
            </div>
            <Footer />
        </div>
    );
}
