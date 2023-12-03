import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


const ManageMyFood = () => {
    const [myFood, setMyFood] = useState([0]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    console.log(userEmail);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => {
                const usersFood = data.filter(item => item.donatorEmail === userEmail);
                setMyFood(usersFood);
            })
    }, [userEmail]);

    const  handleDelete =(id)=>{
         console.log(id);
         Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/food/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()
                    )
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success',
                            )
                           
                        }
                        navigate("/ManageMyFoods")

                    })

            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>Help The Hunger/ManageMyFood</title>
            </Helmet>
            <h1 className="text-[35px] font-extrabold text-center my-5">Manage Your Foods</h1>
            {/* {
                myFood.map()
            } */}

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
                            myFood.map( (item, index) => <tr key={index}>
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
                                    <Link to={`/Update/${item._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                                    
                                </th>
                                
                                <th>
                                    <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default ManageMyFood;