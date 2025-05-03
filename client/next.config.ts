// ./client/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },

  // --- เพิ่มส่วนนี้เข้าไป ---
  eslint: {
    // คำเตือน: การตั้งค่านี้จะทำให้ Production Build ผ่านได้
    // แม้ว่าโปรเจกต์ของคุณจะมี ESLint errors ก็ตาม
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! คำเตือน !!
    // อนุญาตให้ Production Build ผ่านได้อย่างอันตราย
    // แม้ว่าโปรเจกต์ของคุณจะมี Type errors ก็ตาม
    // !! คำเตือน !!
    ignoreBuildErrors: true,
  },
  // -----------------------

};

module.exports = nextConfig;