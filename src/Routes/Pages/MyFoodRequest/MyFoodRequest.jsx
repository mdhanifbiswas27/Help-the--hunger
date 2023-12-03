import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyFoodRequest = () => {
    const axiosPublic = UseAxiosPublic();
    const [food, setFood] = useState([0]);
    const { user } = useContext(AuthContext);
    const userEmail = user.email;



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('requestedFood');
                const filterData = response.data.filter(item => item.requsterEmail === userEmail);
                setFood(filterData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (userEmail) {
            fetchData();
        }
    }, [axiosPublic, userEmail]);


    return (
        <div>
            <div>
                <Helmet>
                    <title>Help The Hunger/MyFoodRequest</title>
                </Helmet>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th><img src="" alt="" /></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Manage</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            food.map( (item, index) => <tr key={index}>
                                <th>
                                    <label>
                                         <p>{index+1}</p>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    <p>{item.FoodName}</p>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Date will be expire:{item.time}</span>
                                </td>
                                <td> <p>Quantity:{item.quantity}</p></td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Manage</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    
                                </th>
                                
                                <th>
                                    <button  className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;