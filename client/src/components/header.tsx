'use client'
import { useState, useEffect, MouseEvent } from 'react';
import { X, Menu } from 'lucide-react';
import { ModeToggle } from './modetoggle';

export default function Header() {
    const [currentPath, setCurrentPath] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    const [isScrolling, setIsScrolling] = useState(false);

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 1280px)').matches) {
                setMobileDrawerOpen(false); // ปิดเมนูเมื่อหน้าจอใหญ่ขึ้นถึง xl
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // เรียกใช้เมื่อโหลดหน้าเว็บ

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setIsMounted(true);
        setCurrentPath(window.location.pathname);

        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        const handleScroll = () => {
            setIsScrolling(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener('popstate', handleLocationChange);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleNavClick = (path: any, e: any) => {
            e.preventDefault();
            window.history.pushState({}, '', path);
            setCurrentPath(path);
        };
    },);


    function handleNavClick(arg0: string, e: MouseEvent<HTMLAnchorElement>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div
            className={`sticky top-0 z-[1000] w-full h-auto pt-5 pb-5 space-x-auto transition-all duration-300 ${isScrolling
                ? 'bg-white/50 backdrop-blur-md shadow'
                : 'bg-transparent'
                } flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-center font-manrope space-x-5`}
        >
            <div className=" max-w-full w-96 mb:flex-row sm:flex-row  md:flex-row flex items-center justify-center gap-[15px]">
                <img
                    className="w-[80px] lg:w-[60px] h-fulllg:h-[60px]"
                    src="/newlog_website.PNG"
                    alt="logowebsite"
                />
                <label className="font-manrope font-semibold xl:pr-32 text-[48px] md:text-6xl lg:text-6xl bg-gradient-to-r from-[#303030] to-[#0051ff] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#0051ff] inline-block text-transparent bg-clip-text">
                    9Sorrawit
                </label>
            </div>
            <div className=" font-semibold text-3xl space-x-10 flex  mb:hidden sm:hidden sm:space-x-0 md:hidden  lg:hidden xl:block dark:text-white">
                <a
                    href="/"
                    onClick={(e) => isMounted && handleNavClick('/', e)}
                    className={`sm:ml-0 ml-10 px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                            : 'dark:text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    Home
                </a>
                <a
                    href="/note"
                    onClick={(e) => isMounted && handleNavClick('/github', e)}
                    className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/github'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                            : 'dark:text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    Note
                </a>
                <a
                    href="/resource"
                    onClick={(e) => isMounted && handleNavClick('/design', e)}
                    className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/design'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                            : 'dark:text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    Resource
                </a>
                <a
                    href="/about"
                    onClick={(e) => isMounted && handleNavClick('/about', e)}
                    className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/about'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                            : 'dark:text-white hover:text-black hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50 '}`}
                >
                    About
                </a>
            </div>
            <div className='flex flex-row space-x-3 items-center md:pt-5 lg:pt-5 xl:pt-0'>
                <ModeToggle />
                <div className='xl:hidden md:flex justify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="text-center font-semibold text-3xl flex flex-col justify-center items-center dark:text-white py-5">
                    <a
                        href="/"
                        onClick={(e) => isMounted && handleNavClick('/', e)}
                        className={`sm:ml-0 ml-10 px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/'
                                ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                                : 'dark:text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                    >
                        Home
                    </a>
                    <a
                        href="/note"
                        onClick={(e) => isMounted && handleNavClick('/github', e)}
                        className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/github'
                                ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                                : 'dark:text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                    >
                        Note
                    </a>
                    <a
                        href="/design"
                        onClick={(e) => isMounted && handleNavClick('/design', e)}
                        className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/design'
                                ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                                : 'dark:text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                    >
                        Desgin
                    </a>
                    <a
                        href="/about"
                        onClick={(e) => isMounted && handleNavClick('/about', e)}
                        className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/about'
                                ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black '
                                : 'dark:text-white hover:text-black hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50 '}`}
                    >
                        About
                    </a>
                </div>
            )}
        </div>
    );
}