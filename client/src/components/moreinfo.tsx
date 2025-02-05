"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"

export default function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div style={container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // จัดให้อยู่กึ่งกลางแนวนอน
    justifyContent: "center", // จัดให้อยู่กึ่งกลางแนวตั้ง
    width: "100vw", // ทำให้ container เต็มจอ
    height: "100vh", // ทำให้ container เต็มจอ
    position: "relative",
};


const box: React.CSSProperties = {
    width: 300,
    height: 300,
    backgroundColor: "#007AFF",
    borderRadius: "10px",
}


const button: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // จัดให้อยู่กึ่งกลางแนวนอน
    justifyContent: "center", // จัดให้อยู่กึ่งกลางแนวตั้ง
    width: "208px",
    height: "56px",
    backgroundColor: "#007AFF",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#ffffff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
}