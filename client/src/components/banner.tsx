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
        <div data-aos="fade-up" data-aos-duration="3000" className="font-manrope  w-full  bg-gradient-to-r from-[#F8D0D0] to-[#D0BCFF] justify-self-center ">
            <Header />
            <div className="max-w-full w-auto sm:pl-40 sm:pr-40 lg:w-5/6 2xl:w-6/6 pl-64 pr-64 pt-16 justify-self-center justify-center">
                <div className=''>
                    <label htmlFor="" className="max-w-full flex text-[48px]  font-semibold ">Hey, I’m 9Sorrawit Sangmanee</label>
                    <label htmlFor="" className="flex sm:flex-col md:flex-row text-[64px] font-bold  bg-gradient-to-r from-[#000000] to-[#0D00FF] inline-block text-transparent bg-clip-text">UX/UI Design / Front-end Developer</label>
                    <label htmlFor="" className="flex sm:flex-col md:flex-row text-[40px] font-bold  ">Graduate from <span className="bg-gradient-to-r from-[#C800FF] to-[#016466] inline-block text-transparent bg-clip-text">&nbsp;Software Engineering&nbsp;</span> BUU</label>
                </div>

                <div className="flex max-w-full justify-self-end border-[2px] lg:w-[500px] lg:h-[500px] md:w-80 md:h-80 bg-[#FFFFFF]  rounded-full">
                    <Image className='rounded-full' src="/cat.webp" alt="" width={500} height={500} />
                </div>
                <div className='flex sm:flex-col sm:items-center md:flex-row  md:pt-4 max-w-full justify-start gap-[22px] pb-[70px]'>
                    <div className=''></div>
                    <Button className='w-64 h-[90px] rounded-[50px] text-2xl font-semibold text-white bg-gradient-to-r from-[#3BE7EA] to-[#E29797]'><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" width={50} />Github</Button>
                    <Button className='w-64 h-[90px] rounded-[50px] text-2xl font-semibold text-white bg-gradient-to-r from-[#FFFFFF] to-[#6B9900]'><img src="https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png" alt="" width={50} />Medium</Button>
                    <Button className='w-64 h-[90px] rounded-[50px] text-2xl font-semibold text-white bg-gradient-to-r from-[#3BE7EA] to-[#B2FF00]'><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" width={50} />Linked</Button>
                </div>
            </div>

        </div>
    );
}
