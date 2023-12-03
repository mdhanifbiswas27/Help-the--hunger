import { useLoaderData } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";



const Details = () => {
    const axiosPublic = UseAxiosPublic();
    const LoadedFood = useLoaderData();
    const { FoodName, photo, quantity, location, time, comment, donatorName, donatorEmail, donatorPhoto,_id } = LoadedFood;
   const {user} = useContext(AuthContext)
   const userEmail = user.email;


    const handleRequest =(photo,FoodName,time,quantity)=>{
        const requestFood = {
             photo:photo,
             requsterEmail:userEmail,
             FoodName: FoodName,
             time:time,
             quantity:quantity
        }

         axiosPublic.post('/requestedFood',requestFood)
         .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Food request successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
         })
    }
   
    return (
        <div className="max-w-screen-xl mx-auto mt-7">
            <div >
                <div className="flex justify-center">
                    <div><img className="w-[200px] h-[200px]" src={photo} alt="" /></div>

                </div>
                <div>
                    <h1 className="font-bold text-[30px] text-center">Food Details</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Value</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Food Name</td>
                                    <td>{FoodName}</td>

                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Quantity</td>
                                    <td>{quantity}</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>PickUp Location</td>
                                    <td>{location}</td>

                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Expire Time</td>
                                    <td>{time}</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>5</th>
                                    <td>Opinion</td>
                                    <td>{comment}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="font-bold text-[30px] text-center">Donner</h2>
                    <hr />
                    <div className=" flex justify-center">
                        <div>
                            <div>
                                <img className="h-[200px] w-[200px] rounded-full my-6" src={donatorPhoto} alt="" />
                            </div>
                            <div>
                                <h1 className="uppercase">Donner:{donatorName}</h1>
                                <h2>E-mail:{donatorEmail}</h2>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center mt-5"><button onClick={()=>handleRequest(photo,FoodName,time,quantity)}  className="btn hover:bg-[#BB272E] bg-[#BB272E] text-white">Request</button></div>
                </div>
            </div>
        </div>
    );
};

export default Details;