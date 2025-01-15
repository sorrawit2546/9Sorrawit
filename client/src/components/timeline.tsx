import Image from 'next/image';
export default function Timeline() {
    return (
        <div className="xl:w-[1280px] h-full bg-white drop-shadow-2xl rounded-[50px] mb-[40px] pb-[40px] flex flex-col items-center justify-self-center justify-center text-center font-manrope gap-5 ">
            <label htmlFor="" className=' pt-7 text-[64px] font-semibold bg-gradient-to-r from-[#FF0062] to-[#D0BCFF] inline-block text-transparent bg-clip-text'>My Work Experience</label>
            <div className=' border-[5px] bg-[#B2FF00] border-black w-[50px] h-[50px] rounded-[100px]'>
            </div>
            <div className='flex flex-row w-full justify-center gap-10'>
                <div className='border-[5px] border-black border-dashed  bg-gradient-to-r from-[#D0BCFF] to-[#F8D0D0] rounded-[50px] max-w-lg w-full h-60 mt-10 '></div>
                <div className='border-[5px] border-black h-[300px]'></div>
                <div className='max-w-lg w-full'></div>
            </div>
            <div className=' border-[5px] bg-[#a4df1c] border-black w-[50px] h-[50px] rounded-[100px]'></div>
            <div className='flex flex-row w-full justify-center gap-10'>
                <div className='  rounded-[50px] max-w-lg w-full h-60'></div>
                <div className='border-[5px] border-black h-[300px]'></div>
                <div className='mr- border-[5px] border-black  bg-gradient-to-r from-[#FFD7A0] to-[#FF9797] rounded-[50px] max-w-lg w-full h-60 mt-10'></div>
            </div>
            <div className=' border-[5px] bg-[#91c419] border-black w-[50px] h-[50px] rounded-[100px]'></div>
            <div className='flex flex-row w-full justify-center gap-10'>
                <div className='border-[5px] border-black border-double rounded-[50px] max-w-lg w-full h-60  bg-gradient-to-r from-[#a4ad1d] to-[#01522c] mt-10'></div>
                <div className='border-[5px] border-black h-[300px]'></div>
                <div className='max-w-lg w-full '></div>
            </div>
            <div className=' border-[5px] bg-[#628511] border-black w-[50px] h-[50px] rounded-[100px]'></div>
        </div>
    );
}
