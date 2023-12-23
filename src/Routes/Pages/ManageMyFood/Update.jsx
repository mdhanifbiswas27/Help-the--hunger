
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const LoadFood = useLoaderData();
    const { _id } = LoadFood;
    console.log(LoadFood)

    const handleUpdateFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const FoodName = form.FoodName.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const time = form.time.value;
        const comment = form.comment.value;
        const photo = form.photo.value;
       
        const updateFood= {FoodName,photo,quantity,location,time,comment}

     //    add food to server
     fetch(`https://my-assignment-eleven-server-site-q0osxmnty.vercel.app/food/${_id}`, {
         method: "PUT",
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(updateFood)
     })
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
         if (data.modifiedCount > 0) {
             Swal.fire({
                 title: 'success',
                 text: 'Product updated successfully!',
                 icon: 'success',
                 confirmButtonText: 'OK'
             })
         }
     })
 }

    return (
        <div>
            <div className="hero-content mx-auto">

                <div className="card  shadow-2xl bg-base-100 w-[600px] p-10 box-content">
                    <form onSubmit={handleUpdateFood} className="card-body">
                        <div className="flex justify-between">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="FoodName" placeholder="Food Name" className="input input-bordered border-[#BB272E]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Food Photo" className="input input-bordered border-[#BB272E]" required />

                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Food Quantity" className="input input-bordered border-[#BB272E]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" name="location" placeholder="Pickup Location" className="input input-bordered border-[#BB272E]" required />

                            </div>
                        </div>
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expired Time</span>
                                </label>
                                <input type="text" name="time" placeholder="Expired Time" className="input input-bordered border-[#BB272E]" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <textarea name="comment" className="border-2 w-full h-32 border-[#BB272E] rounded-lg hover:outline-none p-1" placeholder="Write Your Opinion!!"></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="text-white btn btn-primary bg-[#BB272E] hover:bg-[#BB272E]">Update Food</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Update;