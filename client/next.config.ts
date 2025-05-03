/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Warning นี้อาจจะต้องแก้ทีหลัง แต่ไม่น่าเกี่ยวกับ Font
  },

  optimizeFonts: false, // <--- ลองเพิ่มบรรทัดนี้

  // ส่วนที่ ignore ESLint/TypeScript (ถ้ายังใส่อยู่)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;