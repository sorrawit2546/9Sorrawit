"use client"

import "@/styles/globals.css";
import Footer from "@/components/footer";
import axios from "axios";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Notedot() {
    return (
        <SidebarProvider className=" bg-white dark:bg-black">
            <AppSidebar />
            <div className="flex text-black dark:text-white w-full">
                <div className="flex text-4xl justify-center w-full mt-5">
                   To-Do Lists
                </div>
            </div>
           
        </SidebarProvider>

    )
}