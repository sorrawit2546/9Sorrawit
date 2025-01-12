import Image from 'next/image';
export default function Header() {
    return (
        <div className="max-w-full w-[1500px] h-[119px] bg-[#D0BCFF] flex items-center justify-self-center justify-center rounded-[50px] mt-[20px] font-manrope space-x-[85px]">
            <div className="flex items-center justify-center gap-[15px]">
                <Image className="w-[100px] h-[100px] rounded-[50px] border-[2px]" src="/logo9sorrawit.png" alt="logowebsite" width={100}
                    height={100} />
                <label htmlFor="" className="font-manrope font-semibold text-[48px] bg-gradient-to-r from-[#C800FF] to-[#410097] inline-block text-transparent bg-clip-text">9Sorrawit</label>
            </div>
            <div className="font-semibold text-[48px] space-x-[85px] text-white">
                <a href="/" className="hover:text-black ">Home</a>
                <a href="" className="hover:text-black">Github</a>
                <a href="" className="hover:text-black">Desgin</a>
                <a href="" className="hover:text-black">About</a>
            </div>
        </div>
    );
}
