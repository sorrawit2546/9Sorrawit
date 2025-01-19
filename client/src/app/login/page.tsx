"use client"
import Header from '@/components/header'
import React from 'react'
import "@/styles/globals.css";

export default function page() {
    return (
        <div className='font-manrope font-bold'>
            <Header />
            <div className="flex justify-self-center">
                <form>
                    <div className="flex flex-row w-[980px] h-[500px] shadow-2xl  rounded-xl space-x-20">
                        <div className="flex w-[490px] h-full shadow-2xl rounded-xl justify-center items-center">
                            <img className="w-[300px] h-[300px]" src="/logo9sorrawit.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-start space-y-2">
                            <div className="">
                                Email
                            </div>
                            <div className="flex flex-row-10">
                                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="email" name="email"   placeholder="example@gmail.com" />
                            </div>
                            <div>
                                Password
                            </div>
                            <div className="flex flex-row ">
                                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="password" name="password"   placeholder="Input password" />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="bg-white dark:bg-black dark:hover:hover:bg-sky-400  dark:text-white shadow-2xl rounded-3xl w-40 h-10 mt-5" type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
