import Image from 'next/image';
export default function Timeline() {
    return (
        <div className="xl:w-[1280px] h-full bg-white dark:text-black drop-shadow-2xl rounded-[50px] mb-[40px] pb-[60px] flex flex-col items-center justify-self-center justify-center text-center font-manrope gap-5 mt-10">
            <label htmlFor="" className=' flex flex-row pt-10 text-[48px] font-semibold bg-gradient-to-r from-[#FF0062] to-[#D0BCFF] inline-block text-transparent bg-clip-text'><img className='w-14 h-full mr-3 mt-3' src="/content-writing.png" alt="" />Let’s Write Something to create <br/> Secondary Brain</label>
            <div className='text-2xl font-bold'>
                <div>บันทึกเรื่องราวที่สนใจ เกี่ยวกับการพัฒนาเว็บไซต์ <br /> Coding, Technology, Node.js, React.js,...</div>
            </div>
            <div className='flex flex-row space-x-5'>
                <div className='flex justify-center text-2xl font-bold mt-6  rounded-[15px] bg-[#e6e6e6] w-40 h-14 '>
                    <button className='flex items-center gap-2'><img src="/images/React-icon.png" alt="" className='w-[40px] h-[40px] '/>React</button>
                </div>
                <div className='flex justify-center text-2xl font-bold mt-6  rounded-[15px] bg-[#e6e6e6] w-40 h-14 '>
                    <button className=''>Tailwind</button>
                </div>
                <div className='flex justify-center text-2xl font-bold mt-6  rounded-[15px] bg-[#e6e6e6] w-40 h-14 '>
                    <button className=''>News</button>
                </div>
            </div>

        </div>
    );
}
