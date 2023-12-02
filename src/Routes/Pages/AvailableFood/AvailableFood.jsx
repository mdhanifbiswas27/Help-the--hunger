import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FoodCard from "./FoodCard";


const AvailableFood = () => {
    const [food, setFood] = useState([0]);
    console.log(food);

    useEffect (()=>{
        fetch('http://localhost:5000/food/')
        .then(res=>res.json())
        .then(data=> setFood(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <Helmet>
                <title>Help The Hunger/AvailableFood</title>
            </Helmet>

            <h1 className="text-[35px] font-extrabold text-center py-5">Available foods are here!</h1>
            <div className="flex justify-center">
            <div className="py-5"><input placeholder="Search as your need" className=" p-1 hover:outline-none border-2 border-[#BB272E] w-[250px] h-[40px] rounded-lg" type="search" /> <button className="bg-[#BB272E] h-[40px] mt-1 rounded-r-lg px-4 -ml-10 text-white">Search</button></div>
            </div>
            <div className="grid grid-cols-3">
              
               {
                food.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
               }

            </div>
        </div>
    );
};

export default AvailableFood;