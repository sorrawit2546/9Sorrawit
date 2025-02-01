'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MyParams {
  params: { id: string };
}

interface Blogs {
  id: number;
  Title: string;
  Description: string;
  Thumbnail?: { url: string };
  Date: string;
  email?: string | null;
  author: string;
}

export default function Page({ params }: MyParams) {
  const [data, setData] = useState<Blogs | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.id) return;

    const getDataById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?filters[id][$eq]=${params.id}`
        );
        const blogData = response.data?.data?.[0];

        if (!blogData) {
          setError('No blog found');
          return;
        }

        setData(blogData);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };

    getDataById();
  }, [params.id]);

  console.log(data)

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <div>
          <h1>{data.Title}</h1>

          {/* ใช้ dangerouslySetInnerHTML แสดง HTML */}
          
         
          {data.Thumbnail?.url && <img src={data.Thumbnail.url} alt={data.Title} />}

          <p>{data.Date}</p>
          <p>{data.email || 'No email provided'}</p>
          <p>{data.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
