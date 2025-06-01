"use client"

import "@/styles/globals.css";
import Footer from "@/components/footer";
import axios from "axios";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { JSX, useEffect, useState } from "react";
import type { ApiNote } from '../types';
import Card_note from "@/components/card_note";
import { Divide } from "lucide-react";

interface Users {
    name: string,
    email: string,
    password: string,
    role: "ADMIN" | "USER";
}

interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}


export default function Notedot() {
    const [selectedNode, setSelectedNode] = useState<ApiNote | null>(null); // State เก็บ Node ที่ถูกเลือก
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<Users | null>(null); // เก็บข้อมูลผู้ใช้
    const [isOpenCreate, setOpenCreate] = useState<boolean>(false);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            fetchUserProfile(storedToken); // ดึงข้อมูลผู้ใช้เมื่อมี token
        }
    }, []);

    const popupOpen = async () => {
        try {
            if (!isOpenCreate) {
                setOpenCreate(true);
            }
            console.log(isOpenCreate);
        } catch (error) {

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

    const [notes, setNote] = useState<Note[]>([]);

    useEffect(() => {
        fetchDataNote();
    }, [])

    const fetchDataNote = async () => {
        try {
            const res = await axios.get("http://localhost:4000/api/notes");
            setNote(res.data);
            console.log(notes)
        } catch (error) {
            console.log({ error });
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setToken(null);
        setUserInfo(null);
        alert("Logged out successfully!");
        window.location.href = "/";
    };
    return (
        <SidebarProvider className=" ">
            <AppSidebar />
            {!token ? (
                <div>

                </div>
            ) : (
                <div className="flex bg-white dark:bg-black">
                    <div className="flex text-black dark:text-white w-full">
                        <div className="flex flex-col text-4xl w-screen h-screen  mt-5 ml-5">
                            <div className="justify-items-start">Hi!👋 {userInfo?.user[0].name}</div>
                            <div className="mt-4 w-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => { popupOpen } }> <span className="flex justify-center">+</span> </div>

                            <div className="grid grid-cols-4 ">
                                {notes.map((note, index) => (
                                    <div className=" bg-blue-500 hover:bg-blue-700 rounded-md w-60 h-60 text-white mt-4">
                                        <div className="text-[24px]" key={index} >
                                            <div className="pl-4 pr-4 pt-4">{note.title}</div>
                                            <div className="w-56 h-56 pl-4 pr-4 pt-4 pb-4 ">
                                                {note.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </SidebarProvider>

    )
}