import { Outlet } from "react-router-dom";
import Navbar from "../Routes/Pages/shared/Navbar";
import Footer from "../Routes/Pages/shared/Footer";


const Main = () => {
    return (
        <div>
            <div className="bg-[#CBE8E9]">
                <div className="max-w-screen-xl mx-auto"> <Navbar></Navbar></div>
            </div>
            <Outlet></Outlet>
           <div className="bg-[#CBE8E9]"><div className="max-w-screen-xl mx-auto"> <Footer></Footer></div></div>
        </div>
    );
};

export default Main;