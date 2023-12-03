import { Link } from "react-router-dom";
import photoo from '../../../assets/Simple-Pure-CSS3-404-Error-Page.gif'

const Error = () => {
    return (
        <div className="relative max-w-screen-xl mx-auto flex justify-center items-center max-h-screen">
            
            <div className="">
                <img src={photoo} alt="" />
            </div>
            <div className="absolute bottom-10">
                <h1 className="text-[30px] font-medium text-red-500">Something wrong here....</h1>
                <Link to='/'><button className="px-4 py-2 border-2 border-red-500">Home</button></Link>
            </div>
        </div>
    );
};

export default Error;