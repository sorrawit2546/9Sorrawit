"use client"
import "@/styles/globals.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Note_box from "@/components/note";
import Header from "@/components/header";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";


export default function About() {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<Users | null>(null); // เก็บข้อมูลผู้ใช้
  const [positivePost, setPositivePost] = useState<PositivePost[] | null>([]);


  interface Users {
    name: string,
    email: string,
    password: string,
    role: "ADMIN" | "USER";
  }

  interface PositivePost {
    id: number,
    createdAt: string,
    updated_at: string,
    content: string,
    image: string[],
    email: string,
    userId: string,
  }



  const infoSectionRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleDeletePositive = async (id: number) => {
    try {
      const response = await axios.delete(`http://server:4000/api/positivepost/${id}`);
      if (response.status === 200) {
        console.log("Delete Complete:", response.data);
        setPositivePost((prev) => prev?.filter((post) => post.id !== id) ?? []);
        //window.location.reload();
      } else {
        console.warn("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error deleting positive note:", error);
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const scrollToInfo = () => {
    if (infoSectionRef.current) {
      infoSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken); // ดึงข้อมูลผู้ใช้เมื่อมี token
    }
  }, []);

  const fetchUserProfile = async (authToken: string) => {
    try {
      const response = await axios.get<Users>(`api/users`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // Handle the response data
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };


  useEffect(() => {
    const fetchPositiveNote = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/getpositiveposts`); //
        setPositivePost(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching positive note:", error);
      }
    }

    fetchPositiveNote();
  }, []);


  return (
    <div className="xl:w-full  xl:space-y-32 dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="flex font-manrope  items-center justify-center">
        <div className="flex flex-col lg:text-[50px] mb:text-[30px]  font-bold items-center space-y-4">
          <h1 className="">Positive Note</h1>
          <h1>3 Lines of positive notes</h1>
          <div className="xl:flex xl:flex-row lg:flex lg:flex-row mb:flex mb:flex-col mb:justify-center mb:items-center gap-5 ">
            <div className="flex flex-row  text-[30px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToInfo}
                className="bg-[#007AFF] rounded-[50px] text-white w-52 h-14"
              >
                What Is?
              </motion.button>
            </div>

            <div className="flex flex-row text-[30px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleButtonClick}
                className="bg-cyan-500 rounded-[50px] text-white w-60 h-14"
              >
                More Info.
              </motion.button>

              {showPopup && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                >
                  <div className="bg-white p-6 rounded-lg w-[720px] h-[400px] font-kanit ">
                    <h2 className="font-semi dark:text-black">Information</h2>
                    <p className="font-semi mt-4 dark:text-black">การเขียนบันทึกเชิงบวก 3 บรรทัด คือให้เขียนเรื่องราวสนุกสนานที่เกิดขึ้นในวันนี้ จำนวน 3 เรื่องภายในระยะเวลา 15 นาทีก่อนนอน หรือถ้าเป็นไปได้ ให้เขียนตอนก่อนเข้านอนจริงๆ เพราะความทรงจำช่วง 15 นาทีก่อนเข้านอนจะฝังอยู่ในความทรงจำมากที่สุด</p>
                    <button
                      onClick={handleClosePopup}
                      className="mt-4 bg-cyan-500 text-white dark:text-black py-2 px-4 rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>
      {/* Section ที่จะเลื่อนลงมา */}
      <div ref={infoSectionRef} className="flex flex-col font-manrope items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="xl:mt-24 flex text-[40px]"
        >
          <h1 className="xl:max-w-4xl xl:text-[50px] lg:text-[50px] mb:text-[35px] mb:ml-3  mb:mr-3 mb:mt-3 font-bold text-center ">
            Theory from Dr. Zion Kabasawa. <br /> It talks about harvesting happiness each day through taking 3 lines of notes.
          </h1>
        </motion.div>
        {/* <div className="flex gap-3 text-[20px]">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#007AFF] rounded-[50px] text-white w-44 h-14"
          >
            <a href="/register">Register</a>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-cyan-500 rounded-[50px] text-white w-44 h-14"
          >
            <a href="/login">Login</a>
          </motion.button>
        </div> */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Note_box />
        </motion.div>

        <div>
          {positivePost?.map((post) => (
            <div key={post.id}>
              <div className="xl:w-[1000px] xl:h-full px-6 py-6 bg-white drop-shadow-2xl rounded-[30px] items-center mt-5 mb-5 dark:text-black">
                <div>
                  <p className="font-bold text-[20px]">🌃 เรื่องราวในวันที่ : {post.createdAt.substring(0, 10)}</p>
                </div>
                <p className="py-2">✉️ {post.email}</p>
                <p className="font-bold text-[20px] py-2">{post.content}</p>

                <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  {Array.isArray(post.image) && post.image.map((imagePost, index) => (
                    <img
                      key={index}
                      src={`/${imagePost}`}
                      alt={`Post Image ${index}`}
                      style={{
                        width: '200px', // กำหนดขนาดให้เหมาะสม
                        marginRight: '10px', // ให้มีระยะห่างระหว่างภาพ
                        objectFit: 'cover' // เพื่อให้ภาพไม่ยืด
                      }} className="rounded-lg"
                    />
                  ))}
                </div>
                {/* <div className="mt-2">
                  <Button variant="destructive" onClick={() => handleDeletePositive(post.id)}>
                    Delete
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>

  );
}
