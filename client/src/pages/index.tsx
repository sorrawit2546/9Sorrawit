import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  );
}
