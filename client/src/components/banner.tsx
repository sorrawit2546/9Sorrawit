import Image from 'next/image';
import { Button } from "@/components/ui/button"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="font-manrope max-w-full w-[1490px] h-[942px] bg-gradient-to-r from-[#F8D0D0] to-[#D0BCFF] rounded-[50px] justify-self-center justify-center mt-[20px]">
            <div className="max-w-full pl-[89px] pr-[89px] pt-[70px]">
                <label htmlFor="" className="max-w-full flex text-[48px] font-semibold">Hey, I’m 9Sorrawit Sangmanee</label>
                <label htmlFor="" className="flex text-[64px] font-bold  bg-gradient-to-r from-[#000000] to-[#0D00FF] inline-block text-transparent bg-clip-text">UX/UI Design / Front-end Developer</label>
                <label htmlFor="" className="flex text-[40px] font-bold  ">Graduate from <span className="bg-gradient-to-r from-[#C800FF] to-[#016466] inline-block text-transparent bg-clip-text">&nbsp;Software Engineering&nbsp;</span> BUU</label>
                <div className="flex max-w-full justify-self-end border-[2px] w-[500] h-[500px] rounded-[500px] bg-[#FFFFFF]  ml-[89px]">
                </div>
                <div className='flex max-w-full justify-start gap-[22px] pb-[70px]'>
                    <Button className='w-[250px] h-[90px] rounded-[50px] text-[36px] font-semibold text-white bg-gradient-to-r from-[#3BE7EA] to-[#E29797]'><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" width={50} />Github</Button>
                    <Button className='w-[250px] h-[90px] rounded-[50px] text-[36px] font-semibold text-white bg-gradient-to-r from-[#FFFFFF] to-[#6B9900]'><img src="https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png" alt="" width={50} />Medium</Button>
                    <Button className='w-[250px] h-[90px] rounded-[50px] text-[36px] font-semibold text-white bg-gradient-to-r from-[#3BE7EA] to-[#B2FF00]'><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" width={50} />Linked</Button>
                </div>
            </div>

        </div>
    );
}
