import { useState, useEffect } from 'react';

export default function Header() {
    const [currentPath, setCurrentPath] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setCurrentPath(window.location.pathname);

        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    const handleNavClick = (path: any, e: any) => {
        e.preventDefault();
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    return (
        <div className="w-full h-auto pt-5 flex sm:flex-col md:flex-row lg:flex-row items-center justify-self-center justify-center font-manrope">
            <div className="max-w-full w-96 sm:flex-col  md:flex-row flex items-center justify-center gap-[15px]">
                <img
                    className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-[50px] border-[2px]"
                    src="/logo9sorrawit.png"
                    alt="logowebsite"
                />
                <label className="font-manrope font-semibold text-[48px] bg-gradient-to-r from-[#C800FF] to-[#410097] inline-block text-transparent bg-clip-text">
                    9Sorrawit
                </label>
            </div>
            <div className="font-semibold text-3xl space-x-10 flex sm:flex-col sm:space-x-0 md:flex-row">
                <a
                    href="/"
                    onClick={(e) => isMounted && handleNavClick('/', e)}
                    className={`sm:ml-0 ml-10 px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black'
                            : 'text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    Home
                </a>
                <a
                    href="/github"
                    onClick={(e) => isMounted && handleNavClick('/github', e)}
                    className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/github'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black'
                            : 'text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    Github
                </a>
                <a
                    href="/design"
                    onClick={(e) => isMounted && handleNavClick('/design', e)}
                    className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/design'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black'
                            : 'text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    Desgin
                </a>
                <a
                    href="/about"
                    onClick={(e) => isMounted && handleNavClick('/about', e)}
                    className={`px-6 py-2 rounded-[50px] transition-all duration-300 
                        ${isMounted && currentPath === '/about'
                            ? 'bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] text-black'
                            : 'text-white hover:bg-gradient-to-r from-[#B2FF00] to-[#FDDCDC] hover:bg-opacity-50'}`}
                >
                    About
                </a>
            </div>
            <div>
                <a href=""></a>
            </div>
        </div>
    );
}