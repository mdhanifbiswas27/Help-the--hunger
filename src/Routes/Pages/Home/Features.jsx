import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import FoodCard from "../AvailableFood/FoodCard";


const Features = () => {
    const [featuresFood, setFeaturesFood] = useState([0])

    const axiosPublic = UseAxiosPublic();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get("/food");
                // const sortedFood = response.data.sort((a, b) => new Date(a.time) - new Date(b.time));
                const sortedFood = response.data.sort((a, b) =>  b.quantity - a.quantity);
                setFeaturesFood(sortedFood);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, [axiosPublic]);


    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <h1 className="text-[30px] font-bold text-center py-10">Our Features Food</h1>
            <div className="grid grid-cols-3 mt-5 gap-10">
                {
                    featuresFood.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Features;