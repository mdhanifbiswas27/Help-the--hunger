import banner from'../../../assets/donation-final.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div><img src={banner} alt="" /></div>
            <div className='absolute top-0 '>
                    <div>hi</div>
            </div>
        </div>
    );
};

export default Banner;