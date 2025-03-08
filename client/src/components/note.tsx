'use client'
import axios from 'axios';
import React, { FormEvent, useEffect } from 'react'
import { useState, DragEvent } from "react";


export default function Note() {

    interface positivepost {

    }

    const [image, setImages] = useState<string[]>([]);
    const [content, setContent] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImages: string[] = [];
            Array.from(files).forEach((file) => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if (e.target?.result) {
                            newImages.push(e.target.result as string);
                            if (newImages.length === files.length) {
                                setImages((prevImages) => [...prevImages, ...newImages]);
                            }
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    };

    // Handle drag and drop
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files) {
            const newImages: string[] = [];
            Array.from(files).forEach((file) => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if (e.target?.result) {
                            newImages.push(e.target.result as string);
                            if (newImages.length === files.length) {
                                setImages((prevImages) => [...prevImages, ...newImages]);
                            }
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/positivepost", {
                content,
                image,
                email,
                date
            });
            console.log(res.data);
        } catch (error) {

        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col xl:max-w-4xl xl:w-[896px] xl:max-h-96 xl:h-[384px] bg-white drop-shadow-2xl rounded-[30px] items-center mt-5 dark:text-black'>
                    <div className='flex flex-row  items-center justify-center space-x-4'>
                        <div className='flex flex-col gap-1 mt-7'>
                            <div className=' '>
                                <input type="date" value={date} onChange={(e: any) => handleDateChange(e.target.value)}
                                    className="bg-slate-100 rounded-[15px] h-[49px] w-[200px] text-center appearance-none px-4" />
                            </div>
                            <div className='flex flex-row mt-5 space-x-5 bg-slate-100 rounded-[15px] h-[49px] w-[200px] items-center justify-center'>
                                <input type="radio" name="choice" id="1" value="option1" />
                                <label htmlFor="option1">5</label>
                                <input type="radio" name="choice" id="2" value="option2" />
                                <label htmlFor="option2">8</label>
                                <input type="radio" name="choice" id="3" value="option3" />
                                <label htmlFor="option3">10</label>
                            </div>
                            <div>
                                <input className='mt-5 pl-2 pr-2 pt-2 pb-2 bg-slate-100 rounded-[15px] h-[49px] ' value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" name="" id="" placeholder='example@9note.com' />
                            </div>
                        </div>
                        <div
                            className="w-80 h-48 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-white p-4 text-gray-500 cursor-pointer transition hover:border-blue-500 hover:bg-blue-50 mt-7"
                            onClick={() => document.getElementById("fileInput")?.click()}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            <span className="text-lg font-semibold">แบ่งปันภาพถ่ายได้ที่นี่ ;)</span>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                            />

                            {/* แสดงภาพที่เลือก */}
                            <div
                                id="image-container"
                                className="mt-4 flex gap-4 overflow-x-auto scrollbar-hidden"
                                style={{ maxWidth: "100%" }}
                            >
                                {image.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Preview ${index}`}
                                        className="max-h-32 rounded-lg flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className=''>
                            <textarea className="mt-5 pl-3 pr-3 pt-3 pb-3 bg-slate-100 rounded-[15px]" value={content} onChange={(e: any) => setContent(e.target.value)} id="" cols="80" rows="4" placeholder='เรื่องเชิงบวกในวันนี้ของคุณมีอะไรบ้าง แชร์ให้เราฟังหน่อย :)
                            เช่น 1.วันนี้ท้องฟ้าเป็นสีฟ้าสวยมาก ทำให้รู้สึกสดชื่นและมีพลังขึ้นมาทันที!'></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-black p-2 rounded">
                            Submit
                        </button>
                    </div>
                    

                </div>
            </form>
        </div>
    )
}
