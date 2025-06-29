"use client"
import "@/styles/globals.css";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import {useState} from "react";
import Note_box from "@/components/note";
import Header from "@/components/header";


export default function About() {
  const infoSectionRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const scrollToInfo = () => {
    if (infoSectionRef.current) {
      infoSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="xl:w-full  xl:space-y-32 dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="flex font-manrope items-center justify-center">
        <div className="flex flex-col text-[50px] font-bold items-center space-y-4">
          <h1>9Note</h1>
          <h1 className="">3 Lines of positive notes</h1>
          <div className="flex flex-row gap-5"> 
          <div className="flex flex-row text-[30px]">
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
          <h1 className="xl:max-w-4xl font-bold text-center">
            Theory from Dr. Zion Kabasawa. <br /> It talks about harvesting happiness each day through taking 3 lines of notes.
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Note_box />
        </motion.div>
      </div>


    </div>


  );
}
