import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {Kanit, Manrope} from '@next/font/google';
const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'], // กำหนดน้ำหนักที่ต้องการใช้
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'], // กำหนดน้ำหนักที่ต้องการใช้
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.className}, ${kanit.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
