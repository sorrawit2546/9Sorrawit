"use client"
import { useState, useEffect } from 'react';

export default function Footer() {
    let dateYear = new Date().getFullYear();
    return (
        <div className="max-w-full w-full h-auto flex items-center justify-self-center justify-center rounded-t-[50px] mt-[20px] font-manrope space-x-[85px]">
            <div className='pt-11 pb-11'>
                <div className='space-y-5'>
                    <div className="flex items-center justify-center gap-[10px]">
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]"
                            src="/newlog_website.PNG"
                            alt="logowebsite"
                        />
                        <label className="font-manrope font-semibold text-[48px] bg-gradient-to-r from-[#303030] to-[#0051ff] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#0051ff] inline-block text-transparent bg-clip-text">
                            9Sorrawit
                        </label>
                    </div>
                    <div className='font-white text-3xl font-bold dark:text-white text-center'>
                        <label htmlFor="">Copyright © {dateYear} — ninesorrawit.dev All Rights Reserved</label>
                    </div>
                </div>
            </div>
        </div>
    );
}