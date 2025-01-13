import { useState, useEffect } from 'react';

export default function Footer() {
    return (
        <div className="max-w-full w-full h-auto bg-gradient-to-b from-[#F7F7F7] to-[#6B9900] flex items-center justify-self-center justify-center rounded-t-[50px] mt-[20px] font-manrope space-x-[85px]">
            <div className='pt-48px pb-48px'>
                <div className='space-y-10'>
                    <div className="flex items-center justify-center gap-[15px]">
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="/logo9sorrawit.png"
                            alt="logowebsite"
                        />
                        <label className="font-manrope font-semibold text-[48px] bg-gradient-to-r from-[#C800FF] to-[#410097] inline-block text-transparent bg-clip-text">
                            9Sorrawit
                        </label>
                    </div>
                    <div className='font-white text-[40px] font-bold text-white'>
                        <label htmlFor="">Copyright 2025 — 9Sorrawit. All rights reserved.</label>
                    </div>
                    <div className='flex gap-[20px] justify-center'>
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="/logo9sorrawit.png"
                            alt="logowebsite"
                        />
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="/logo9sorrawit.png"
                            alt="logowebsite"
                        />
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="/logo9sorrawit.png"
                            alt="logowebsite"
                        />
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="/logo9sorrawit.png"
                            alt="logowebsite"
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}