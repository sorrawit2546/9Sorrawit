'use client'
import axios from 'axios';
import React, { FormEvent, useEffect, useRef } from 'react'
import { useState, DragEvent } from "react";

export default function Note() {
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
    const [content, setContent] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState("");
    const [errorContent, setErrorContent] = useState("");

    const handleBlur = () => {
        if (!email) {
            setError("*กรุณากรอกอีเมล");
        } else {
            setError("");
        }
    };

    const handleBlurContent = () => {
        if (!content) {
            setErrorContent("*กรุณากรอกข้อมูล");
        } else {
            setError("");
        }
    };


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newFiles = Array.from(files);
            setImageFiles((prevFiles) => [...prevFiles, ...newFiles]);

            // Create preview URLs for display
            const newPreviewUrls: string[] = [];
            newFiles.forEach((file) => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if (e.target?.result) {
                            newPreviewUrls.push(e.target.result as string);
                            if (newPreviewUrls.length === newFiles.length) {
                                setImagePreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
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
            const newFiles = Array.from(files).filter(file => file.type.startsWith("image/"));
            setImageFiles((prevFiles) => [...prevFiles, ...newFiles]);

            // Create preview URLs for display
            const newPreviewUrls: string[] = [];
            newFiles.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target?.result) {
                        newPreviewUrls.push(e.target.result as string);
                        if (newPreviewUrls.length === newFiles.length) {
                            setImagePreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            if (!content || !email) {
                alert("กรุณากรอกข้อมูลให้ครบถ้วน ตามช่องที่มีเครื่องหมาย *");
            } else {
                formData.append('content', content);
                formData.append('email', email);

                // Append each image file to the FormData
                imageFiles.forEach((file, index) => {
                    formData.append('images', file); // 'images' will be the field name in multer
                });

                const res = await axios.post("api/positivepost", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                
                console.log("Post submitted successfully:", res.data);
                window.location.reload();

                // Reset form after successful submission
                setContent('');
                setEmail('');
                setImageFiles([]);
                setImagePreviewUrls([]);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col xl:max-w-4xl xl:w-[896px] xl:max-h-full xl:h-full mb:w-[300px] bg-white drop-shadow-2xl rounded-[30px] items-center mt-5 mb-5 dark:text-black'>
                    <div className='flex flex-col items-center justify-center space-x-4'>
                        <div
                            className="xl:w-[700px] lg:w-[700px] h-60 mb:w-[250px] flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-white p-4 text-gray-500 cursor-pointer transition hover:border-blue-500 hover:bg-blue-50 mt-7"
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

                            {/* Display image previews */}
                            <div
                                id="image-container"
                                className="mt-4 flex gap-4 overflow-x-auto scrollbar-hidden"
                                style={{ maxWidth: "100%" }}
                            >
                                {imagePreviewUrls.map((url, index) => (
                                    <img
                                        key={index}
                                        src={url}
                                        alt={`Preview ${index}`}
                                        className="max-h-32 rounded-lg flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mt-7 justify-start'>
                            <div>
                                <input
                                    className='pl-2 pr-2 pt-2 pb-2 bg-slate-100 rounded-[15px] h-[49px]'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={handleBlur}
                                    type="email"
                                    placeholder='example@9note.com'
                                />
                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='px-5'>
                            <textarea
                                className="xl:w-[700px] lg:w-[700px] mb:w-[250px] mt-5 pl-3 pr-3 pt-3 pb-3 bg-slate-100 rounded-[15px]"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                onBlur={handleBlurContent}
                                cols={80}
                                rows={4}
                                placeholder='เรื่องเชิงบวกในวันนี้ของคุณมีอะไรบ้าง แชร์ให้เราฟังหน่อย :)'
                            ></textarea>
                            {errorContent && <p className="text-red-500 text-sm mt-1">{errorContent}</p>}
                        </div>
                        <div className='flex items-center justify-center mt-5 mb-5'>
                            <button
                                type="submit"
                                className='px-10 py-2 rounded-md bg-gray-600 text-white'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'กำลังส่ง...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
