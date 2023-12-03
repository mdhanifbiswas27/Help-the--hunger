import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex justify-center items-center min-h-screen">
            <div>
                <h1 className="text-[30px] font-medium text-red-500">Something wrong here....</h1>
                <Link to='/'><button className="px-4 py-2 border-2 border-red-500">Home</button></Link>
            </div>
        </div>
    );
};

export default Error;