import React from 'react'
import axios from 'axios'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function card() {
    interface blogs {
        id: number;
        Title: string;
        Description: string;
        Thumbnail:{
            url:string
        };
        Date: string;
        email: string | null;
        author: string;
    }

    const [data, setdata] = useState<blogs[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:1337/api/blogs/?populate=Thumbnail`);
                const result = res.data.data; // Access the array inside `data`

                // Format the data to match Blog interface
                const formattedData: blogs[] = result.map((item: any) => ({
                    id: item.id,
                    Title: item.Title || "No Title",
                    Description: item.Description
                        ? item.Description.map((desc: any) =>
                              desc.children.map((child: any) => child.text).join("")
                          ).join(" ")
                        : "No description available",
                    Thumbnail: item.Thumbnail.url || "/placeholder.jpg", // Use placeholder if no coverimage
                    Date: item.Date || "Unknown Date",
                    email: item.Email || null,
                    author: "Unknown", // Add static author (if not provided)
                }));

                setdata(formattedData);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchData();
    }, [])

    console.log(data);
    return (
        <div className='grid grid-cols-3 space-x-5 space-y-5 dark:text-black'>
            {data.map((blog , index) => (
                <div key={index} className='flex flex-col drop-shadow-2xl max-w-full xl:w-80 xl:h-[400px] rounded-[30px] bg-white items-center hover:transition duration-500 hover:scale-110'>
                    <div className='flex justify-center items-center mt-6 ml-6 mr-6 mb-6 w-72 h-44 rounded-[15px] bg-gradient-to-b from-[#0D00FF] to-[#7D5FDF] to-[#EEBEBE]'>
                        <img className='rounded-[15px] w-72 h-44' src={`http://localhost:1337${blog.Thumbnail}`} alt=""/>
                    </div>
                    <div className='flex flex-col  space-y-4'>
                        <div className='text-2xl pl-4 pr-4' id='content'>
                            {blog.Title}
                        </div>
                        <div className='text-xl pl-4 pr-4' id='detail'>
                        {blog.Description.length > 50 ? `${blog.Description.slice(0, 50)}...` : blog.Description}
                        </div>
                    </div>
        
                    <div className='flex justify-center items-center text-2xl font-bold mt-6  rounded-[15px] bg-[#e6e6e6] w-40 h-14 mb-5'>
                        <Link href={`/${blog.id}`}>More</Link>
                    </div>
              
                </div>
            ))}

        </div>
    )
}
