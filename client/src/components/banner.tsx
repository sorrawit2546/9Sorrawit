"use client"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './header';

export default function Banner() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="font-manrope w-full  bg-gradient-to-r from-[#F6EBE6] to-[#AEE1F9] justify-self-center dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#09658f]">
            <Header />
            <div className="max-w-full w-auto sm:pl-40 sm:pr-40 mb:max-w-max lg:w-6/6 2xl:w-6/6 pl-64 pr-64 pt-16 justify-self-center justify-center">
                <label htmlFor="" className="max-w-full flex text-[48px]  font-semibold ">💬Hi, I’m Sorrawit Sangmanee.</label>
                <label htmlFor="" className="max-w-full flex mb:flex-col sm:flex-col md:flex-row  text-[64px] font-bold  bg-gradient-to-r from-[#000000] to-[#0D00FF] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#c8ff00] inline-block text-transparent bg-clip-text">Full Stack Developer</label>
                <label htmlFor="" className="max-w-full flex mb:flex-col sm:flex-col md:flex-row md:text-[35px] lg:text-[40px] text-[40px]  font-bold  "><span className="bg-gradient-to-r from-[#C800FF] to-[#016466] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#c8ff00] inline-block text-transparent bg-clip-text">&nbsp;Software Engineering #12,&nbsp;</span> BUU</label>
                <div className="flex max-w-full justify-self-end lg:w-[500px] lg:h-[500px] md:w-80 md:h-80 sm:w-60 sm:h-60 mt-3   bg-[#FFFFFF]  rounded-full shadow-2xl">
                    <Image className='rounded-full' src="/cat.webp" alt="" width={500} height={500} />
                </div>
                <div className='z-10 flex mb:flex-col sm:flex-col sm:items-center md:flex-row  sm:pt-4 md:pt-4 mb:mt-5 max-w-full justify-start gap-[22px] pb-[70px] drop-shadow-2xl'>
                    <a href="https://github.com/sorrawit2546" target="_blank" rel="noopener noreferrer">
                    <Button className=' w-64 h-[90px] rounded-[10px] text-2xl font-semibold text-black bg-white'><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" width={50} />Github</Button>
                    </a>
                    <Button className=' w-64 h-[90px] rounded-[10px] text-2xl font-semibold text-black bg-white'><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" width={50} />Linked</Button>
                </div>
            </div>

        </div>
    );
}
