import { FaSchool } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import { GiHotMeal , GiLovers} from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";



const OurImpact = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-28 py-10 box-border gap-6">
            <div className="flex justify-center">
            <h1 className="text-[34px] font-[900] text-center my-9 border-b-4 border-[#BB272E] ">Our Impact</h1>
            </div>
            
            <div className="grid grid-cols-3 gap-8 ">
                <div className="max-w-[250px] text-center mx-auto">
                    <div className=" flex justify-center"><p className="border-4 border-black p-4 box-content rounded-full"><FaSchool className="text-[#BB272E]  h-[50px] w-[50px]   "></FaSchool></p></div>
                    <p className="text-[20px] font-thin">We provide food to 88 schools in 4 school boards, across Kingston, Frontenac and Lennox & Addington</p>
                </div>
                <div className="max-w-[250px] text-center mx-auto">
                    <div className=" flex justify-center"><p className="border-4 p-4 border-black box-content rounded-full"><TbPackages className="text-[#BB272E]  h-[50px] w-[50px]   "></TbPackages></p></div>
                    <p className="text-[20px] font-thin">Our volunteers pack over $18,000 of food every week, over half a million dollars of food over the course of the school year</p>
                </div>
                <div className="max-w-[250px] text-center mx-auto">
                    <div className=" flex justify-center"><p className="border-4 p-4 border-black box-content rounded-full"><TbTruckDelivery className=" text-[#BB272E]  h-[50px] w-[50px]   "></TbTruckDelivery></p></div>
                    <p className="text-[20px] font-thin">Our drivers deliver food directly to the schools’ front doors,  over 600kms per week</p>
                </div>
                <div className="max-w-[250px] text-center mx-auto">
                    <div className=" flex justify-center"><p className="border-4 p-4 border-black box-content rounded-full"><GiHotMeal className="text-[#BB272E]  h-[50px] w-[50px]   "></GiHotMeal></p></div>
                    <p className="text-[20px] font-thin">Over 7,500 meals or snacks per week are provided by schools with the food we provide</p>
                </div>
                <div className="max-w-[250px] text-center mx-auto">
                    <div className=" flex justify-center"><p className="border-4 p-4 border-black box-content rounded-full"><PiStudentBold className="text-[#BB272E]  h-[50px] w-[50px]   "></PiStudentBold></p></div>
                    <p className="text-[20px] font-thin">Over the course of a school year, 16,000 students – half of all enrolled in the region – access their school’s nutrition program, either regularly or on occasion</p>
                </div>
                <div className="max-w-[250px] text-center mx-auto">
                    <div className=" flex justify-center"><p className="border-4 p-4 border-black box-content rounded-full"><GiLovers className="text-[#BB272E]  h-[50px] w-[50px]   "></GiLovers></p></div>
                    <p className="text-[20px] font-thin">Over 1000 volunteer hours are accrued each week to deliver nutrition programs in schools </p>
                </div>

            </div>
        </div>
    );
};

export default OurImpact;