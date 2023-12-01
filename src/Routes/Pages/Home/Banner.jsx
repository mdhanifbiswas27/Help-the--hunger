import banner from'../../../assets/donation-final.jpg'

const Banner = () => {
    return (
        <div className='relative '>
            <div><img className='h-[600px] w-full' src={banner} alt="" /></div>
            <div className='bg-opacity-10 absolute top-0 bg-gradient-to-r from-[#BB272E] to-[rgba(21, 21, 21, 0)] h-full w-full'>
                    <div className=' translate-y-[160px]'>
                         <h1 className='text-white font-extrabold  text-[100px] leading-[100px]'>Share <br /> Your Extra Food <br /> To Hunger</h1>
                    </div>
            </div>
        </div>
    );
};

export default Banner;