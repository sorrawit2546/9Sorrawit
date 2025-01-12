import Image from 'next/image';
export default function Bar() {
    return (
        <div data-aos="fade-down" data-aos-duration="3000" className="text-white max-w-full lg:w-[1500px] h-[200px] bg-gradient-to-r from-[#D0BCFF80] to-[#00000080] flex items-center justify-self-center justify-center rounded-[50px] mt-[40px] font-manrope gap-10 ">
            <div className='flex h-[100px] w-[220px] justify-center items-center gap-[20px]'>
                <img className="w-[100px] h-[100px] border-[2px] rounded-[100px]" src="" alt="" />
                <label htmlFor="" className='text-[48px]'>BUU</label>
            </div>
            <div className='flex h-[100px] w-[220px] justify-center items-center gap-[20px]'>
                <img className="w-[100px] h-[100px] border-[2px] rounded-[100px]" src="" alt="" />
                <label htmlFor="" className='text-[48px]'>SE</label>
            </div>
            <div className='flex h-[100px] w-[220px] justify-center items-center gap-[20px]'>
                <img className="w-[100px] h-[100px] border-[2px] rounded-[100px]" src="" alt="" />
                <label htmlFor="" className='text-[48px]'>TTT</label>
            </div>
            <div className='flex h-[100px] w-[400px] justify-center items-center gap-[20px]'>
                <img className="w-[100px] h-[100px] border-[2px] rounded-[100px]" src="" alt="" />
                <label htmlFor="" className='text-[48px]'>Siam Denso</label>
            </div>
        </div>
    );
}
