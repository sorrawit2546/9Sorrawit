"use client"
import Header from '@/components/header'
import React, { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import "@/styles/globals.css";
import { Interface } from 'readline';
import axios from 'axios';
import Link from 'next/link';

export default function page() {
    interface Users {
        name: string,
        email: string,
        password: string,
        role: "ADMIN" | "USER";
    }

    const [email, setEmail] = useState<Users["email"]>();
    const [password, setPassword] = useState<Users["password"]>();
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<Users | null>(null); // เก็บข้อมูลผู้ใช้

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            fetchUserProfile(storedToken); // ดึงข้อมูลผู้ใช้เมื่อมี token
        }
    }, []);


    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const res = await axios.post("http://localhost:4000/api/login", {
            email,
            password
        });
        console.log(res.data)

        const { role, name, email: userEmail } = res.data.user;
        const { token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        setToken(token);

        // เก็บข้อมูลผู้ใช้
        setUserInfo({ name: name || "Unknown", email: userEmail || "Unknown", password: password || "", role });

        // Redirect ตาม Role
        if (res.data.user.role === "ADMIN") {
            window.location.href = "/admin";
        } else {
            window.location.href = "/user";
        }
    }

    const fetchUserProfile = async (authToken: string) => {
        try {
            const response = await axios.get<Users>("http://localhost:4000/api/users", {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            // Handle the response data
            setUserInfo(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setToken(null);
        setUserInfo(null);
        alert("Logged out successfully!");
        window.location.href = "/";
      };

    return (
        <div className='font-manrope font-bold'>
            <Header />
            {!token ? (
            <div className="flex justify-self-center">
                <form onSubmit={handleLogin}>
                    <div className="flex flex-row w-[980px] h-[500px] shadow-2xl  rounded-xl space-x-20">
                        <div className="flex w-[490px] h-full shadow-2xl rounded-xl justify-center items-center">
                            <img className="w-[300px] h-[300px]" src="/logo9sorrawit.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-start space-y-2">
                            <div className="">
                                Email
                            </div>
                            <div className="flex flex-row-10">
                                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="email" name="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="example@gmail.com" />
                            </div>
                            <div>
                                Password
                            </div>
                            <div className="flex flex-row ">
                                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="password" name="password" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Input password" />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="bg-white dark:bg-black dark:hover:hover:bg-sky-400  dark:text-white shadow-2xl rounded-3xl w-40 h-10 mt-5" type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            ):(
                <div>
                     <button onClick={handleLogout} className="bg-white dark:bg-black dark:hover:hover:bg-sky-400  dark:text-white shadow-2xl rounded-3xl w-40 h-10 mt-5" type="submit">Logout</button>
                </div>
            )}
        </div>
    )
}
