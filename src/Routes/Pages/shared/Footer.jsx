import logo from '../../../assets/logo4.png'
import { FaYoutube, FaTwitter,FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content flex justify-between">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Share food to hunger</a>
                    <a className="link link-hover">Collect extra food</a>
                    <a className="link link-hover">Serve food to hunger</a>
                    <a className="link link-hover">Inspire other to share extra food</a>
                </nav>
                <nav>
                    <header className="footer-title">Organization</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 pt-4 border-t text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <img className='h-[150px]' src={logo} alt="" />
                    <p className='font-medium'>No Waste No Hunger<br />Share Your Extra Food To Hunger</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <h2>Follow us on:</h2>
                    <div className="grid grid-flow-col gap-4">
                        <BiLogoInstagramAlt className='text-2xl text-[#F7006D]'></BiLogoInstagramAlt>
                        <FaTwitter className='text-2xl text-[#1C96E8]'></FaTwitter>
                        <FaYoutube className='text-2xl text-[#FF0000]'></FaYoutube>
                        <FaFacebookF className='text-2xl text-[#0863F7]'></FaFacebookF>
                        <BiLogoLinkedinSquare className='text-2xl text-[#0C61BF]'></BiLogoLinkedinSquare>
                    </div>
                </nav>
            </footer>
            <div className='flex justify-center pb-4'>
                <div className=' '>
                    <p className='font-medium'>No Waste No Hunger social community Jhenaidah,Bangladesh</p>
                    <h1 className='flex ml-24'>copyright<p className='text-red-500'>&copy;</p>2023 All Rights Reserved</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;