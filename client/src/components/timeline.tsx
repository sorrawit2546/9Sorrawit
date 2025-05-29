"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Timeline() {
    return (
        <div className="xl:w-[1280px] lg:w-[900px] md:w-[850px] sm:w-[600px] mb:ml-3 mb:mr-3 h-full bg-white dark:text-black drop-shadow-2xl rounded-[50px] mb-[40px] pb-[60px] flex flex-col items-center justify-self-center justify-center text-center font-manrope gap-5 mt-10">
            <label htmlFor="" className=' flex flex-row pt-10 text-[28px] md:text-[48px] font-semibold bg-gradient-to-r from-[#FF0062] to-[#D0BCFF] inline-block text-transparent bg-clip-text'><img className='w-14 h-full mr-3 mt-3 mb:hidden' src="/content-writing.png" alt="" />Let’s Write Something to create <br /> Secondary Brain</label>
            <div className='text-2xl font-kanit'>
                <div>บันทึกเรื่องราวที่สนใจ เกี่ยวกับการพัฒนาเว็บไซต์ <br /> Coding, Technology, Node.js, React.js,...</div>
            </div>
            <div className='flex xl:flex-row lg:flex-row space-x-5 mb:flex-col mb:justify-center mb:items-center'>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} className='flex xl:w-80 justify-center text-2xl font-bold mt-6  rounded-[15px] bg-[#e6e6e6] w-40 h-14 '>
                    <div className='flex items-center pr-2'>
                        <img src="/images/React-icon.png" alt="" className='w-[40px] h-[40px] ' />
                    </div>
                    <button className='flex items-center gap-2 sm:hidden md:block lg:block xl:block'>React</button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} className='flex xl:w-full justify-center text-2xl font-bold mt-6  rounded-[15px] bg-[#e6e6e6] w-40 h-14  '>
                    <div className='flex items-center pr-2'>
                        <img src="/images/tailwind-logo.svg" alt="" className='w-[40px] h-[40px]'></img>
                    </div>
                    <button className='flex items-center gap-2 sm:hidden md:block lg:block xl:block'>Tailwind</button>
                </motion.div>
            </div>

        </div>
    );
}
