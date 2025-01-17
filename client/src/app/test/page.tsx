"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function page() {
    interface attractions {
        id: number,
        name: string,
        detail: string,
        coverimage: string,
        latitude: number,
        longitude: number
    }

    const [data, setData] = useState<attractions[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://www.melivecode.com/api/attractions');
            const result = await res.data;
            setData(result);
        }
        fetchData()
    }, [])

    return (
        <div>
            <div>{data.map(val => (
                <li>{val.name}</li>
            ))}</div>
        </div>
    )
}
