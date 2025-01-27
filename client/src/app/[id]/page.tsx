'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


interface myParams {
    params: {
        id:string
    }
}
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

export default function Page({ params }: myParams) {
  const [data, setData] = useState<blogs | null>(null);

  useEffect(() => {
    const getDataid = async () => {
      const response = await axios.get(`http://localhost:1337/api/blogs?filters[id][$eq]=${params.id}`);
      const data = response.data.data;
      setData(data);
    };
    getDataid();
  }, [params.id]);

  console.log(data)
  return (
    <div>
       
 
    </div>
  );
}
