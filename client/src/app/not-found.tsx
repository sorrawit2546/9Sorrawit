import Link from "next/link";
import "@/styles/globals.css";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 font-kanit">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-600">Page Not Found.</p>
      <Link href="/" className="text-blue-500 mt-4">
        กลับไปยังหน้าแรก
      </Link>
    </div>
  );
}
