"use client"

import "@/styles/globals.css";
import Footer from "@/components/footer";
import axios from "axios";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useEffect, useState } from "react";
interface Users {
    name: string,
    email: string,
    password: string,
    role: "ADMIN" | "USER";
}


export default function Notedot() {
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<Users | null>(null); // เก็บข้อมูลผู้ใช้

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            fetchUserProfile(storedToken); // ดึงข้อมูลผู้ใช้เมื่อมี token
        }
    }, []);

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
        <SidebarProvider className=" bg-white dark:bg-black">
            <AppSidebar />
            {!token ? (
                <div>
                    Pls. Login
                </div>
            ) : (
                <div>
                    <div className="flex text-black dark:text-white w-full">
                        <div className="flex text-4xl justify-center w-full mt-5 ml-5">
                            <div>Hi!👋 {userInfo?.user[0].name}</div>
                        </div>
                    </div>
                </div>
            )}


        </SidebarProvider>

    )
}