import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function card() {
    interface attractions {
        id: number,
        name: string,
        detail: string,
        coverimage: string,
        latitude: number,
        longitude: number
    }

    const [data, setdata] = useState<attractions[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://www.melivecode.com/api/attractions')
            const result = res.data;
            setdata(result);
        }
        fetchData();
    }, [])

    return (
        <div className='grid grid-cols-3 space-x-5 space-y-5'>
            {data.map(mock => (
                <div className='flex flex-col drop-shadow-2xl max-w-full xl:w-80 xl:h-96 rounded-[30px] bg-white items-center'>
                    <div className='flex justify-center items-center mt-6 ml-6 mr-6 mb-6 w-72 h-44 rounded-[15px] bg-gradient-to-b from-[#0D00FF] to-[#7D5FDF] to-[#EEBEBE]'>
                        <img className='rounded-[15px] w-72 h-44' src={mock.coverimage} alt=""/>
                    </div>
                    <div className='flex flex-col  space-y-4'>
                        <div className='text-3xl pl-4 pr-4' id='content'>
                            {mock.name}
                        </div>
                        <div className='text-2xl pl-4 pr-4' id='detail'>
                        {mock.detail.length > 50 ? `${mock.detail.slice(0, 50)}...` : mock.detail}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
