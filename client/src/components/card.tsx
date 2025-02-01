"use client";

import Link from 'next/link';
import { useEffect } from 'react';

interface Post {
    slug: string;
    frontmatter: {
        title: string;
        metaDesc: string;
        socialImage: string;
    };
}

interface CardProps {
    posts: Post[];
}

export default function Card({ posts }: CardProps) {

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return (
        <div className='grid grid-cols-3 space-x-5 space-y-5 dark:text-black'>
            {posts.map(({ slug, frontmatter }) => (
                <div key={slug} className='flex flex-col drop-shadow-2xl max-w-full xl:w-80 xl:h-[400px] rounded-[30px] bg-white items-center hover:transition duration-500 hover:scale-110'>
                    <div className='flex justify-center items-center mt-6 ml-6 mr-6 mb-6 w-72 h-44 rounded-[15px] bg-gradient-to-b from-[#0D00FF] to-[#7D5FDF] to-[#EEBEBE]'>
                        <img className='rounded-[15px] w-72 h-44' src={`/${frontmatter.socialImage}`} alt="" />
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className='text-2xl pl-4 pr-4'>{frontmatter.title}</div>
                        <div className='text-xl pl-4 pr-4'>{frontmatter.metaDesc}</div>
                    </div>
                    <div className='flex justify-center items-center text-2xl font-bold mt-6 rounded-[15px] bg-[#e6e6e6] w-40 h-14 mb-5'>
                        <Link href={`/posts/${slug}`}>More</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
