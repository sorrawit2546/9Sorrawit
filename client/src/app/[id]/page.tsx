'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


interface myParams {
    params: {
        id:string
    }
}
interface attractions {
  id: number,
  name: string,
  detail: string,
  coverimage: string,
  latitude: number,
  longitude: number
}

export default function Page({ params }: myParams) {
  const [data, setData] = useState<attractions | null>(null);

  useEffect(() => {
    const getDataid = async () => {
      const response = await axios.get(`https://www.melivecode.com/api/attractions/${params.id}`);
      const data = response.data;
      setData(data);
    };
    getDataid();
  }, [params.id]);

  return (
    <div>
      <li>
        {data?.attraction.name}
        {data?.attraction.detail}
      </li>
    </div>
  );
}
