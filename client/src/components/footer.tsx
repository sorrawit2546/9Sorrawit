import { useState, useEffect } from 'react';

export default function Footer() {
    let dateYear = new Date().getFullYear();
    return (
        <div className="max-w-full w-full h-auto bg-gradient-to-b from-[#F7F7F7] to-[#6B9900] flex items-center justify-self-center justify-center rounded-t-[50px] mt-[20px] font-manrope space-x-[85px]">
            <div className='pt-48 pb-48'>
                <div className='space-y-10'>
                    <div className="flex items-center justify-center gap-[15px]">
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="/logo9sorrawit.png"
                            alt="logowebsite"
                        />
                        <label className="font-manrope font-semibold text-[48px] bg-gradient-to-r from-[#000000] to-[#0051ff] inline-block text-transparent bg-clip-text">
                            9Sorrawit
                        </label>
                    </div>
                    <div className='font-white text-4xl font-bold text-white text-center'>
                        <label htmlFor="">Copyright {dateYear} — 9Sorrawit. All rights reserved.</label>
                    </div>
                    <div className='flex gap-[20px] justify-center'>
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="https://static.vecteezy.com/system/resources/previews/018/930/747/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
                            alt="logowebsite"
                        />
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="https://img.icons8.com/m_rounded/512/facebook-new.png"
                            alt="logowebsite"
                        />
                        <img
                            className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                            src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
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