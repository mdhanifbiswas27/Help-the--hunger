// import { useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Provider/AuthProvider";


// const AddFood = () => {
// const {user} = useContext(AuthContext)
//     const handleAddFood = (event) => {
//            event.preventDefault();
//            const form = event.target;
//            const FoodName = form.FoodName.value;
//            const quantity = form.quantity.value;
//            const location = form.location.value;
//            const time = form.time.value;
//            const comment = form.comment.value;
//            const photo = form.photo.value;
//            const donatorName = user.displayName;
//            const donatorEmail = user.email;
//            const donatorPhoto = user.photoURL;
//            const newFood= {FoodName,photo,quantity,location,time,comment,donatorName,donatorEmail,donatorPhoto}

//         //    add food to server
//         fetch('http://localhost:5000/food', {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newFood)
//         })
//         .then((res)=>res.json())
//         .then((data)=>{
//             if (data.insertedId) {
//                 Swal.fire({
//                     title: 'success',
//                     text: 'Food added successfully!',
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 })
//             }
//         })
//     }
//     return (
//         <div className="py-10">
//             <p className="text-[30px] font-extrabold text-center">Donate Your Extra Food Here!</p>
//             <div>
//                 <div className="hero-content mx-auto">

//                     <div className="card  shadow-2xl bg-base-100 w-[600px] p-10 box-content">
//                         <form onSubmit={handleAddFood} className="card-body">
//                             <div className="flex justify-between">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Food Name</span>
//                                     </label>
//                                     <input type="text" name="FoodName" placeholder="Food Name" className="input input-bordered border-[#BB272E]" required />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Food Image URL</span>
//                                     </label>
//                                     <input type="text" name="photo" placeholder="Food Photo" className="input input-bordered border-[#BB272E]" required />

//                                 </div>
//                             </div>
//                             <div className="flex justify-between">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Food Quantity</span>
//                                     </label>
//                                     <input type="text" name="quantity" placeholder="Food Quantity" className="input input-bordered border-[#BB272E]" required />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Pickup Location</span>
//                                     </label>
//                                     <input type="text" name="location" placeholder="Pickup Location" className="input input-bordered border-[#BB272E]" required />

//                                 </div>
//                             </div>
//                             <div className="">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Expired Time</span>
//                                     </label>
//                                     <input type="text" name="time" placeholder="Expired Time" className="input input-bordered border-[#BB272E]" required />
//                                 </div>
//                                 <div>
//                                 <label className="label">
//                                         <span className="label-text">Additional Notes</span>
//                                     </label>
//                                 <textarea name="comment" className="border-2 w-full h-32 border-[#BB272E] rounded-lg hover:outline-none p-1" placeholder="Write Your Opinion!!"></textarea>
//                                 </div>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="text-white btn btn-primary bg-[#BB272E] hover:bg-[#BB272E]">Add Food</button>
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default AddFood;



import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddFood = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddFood = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const form = event.target;
            const FoodName = form.FoodName.value;
            const quantity = form.quantity.value;
            const location = form.location.value;
            const time = form.time.value;
            const comment = form.comment.value;
            const photo = form.photo.value;
            const donatorName = user.displayName;
            const donatorEmail = user.email;
            const donatorPhoto = user.photoURL;
            const newFood = {
                FoodName,
                photo,
                quantity,
                location,
                time,
                comment,
                donatorName,
                donatorEmail,
                donatorPhoto,
            };

            // add food to server
            const response = await fetch("http://localhost:5000/food", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFood),
            });

            const data = await response.json();

            if (response.ok && data.insertedId) {
                
                const updatedDonatePoint = user.donatePoint + 1;

               
                updateUserProfile({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    donatePoint: updatedDonatePoint,
                });

                Swal.fire({
                    title: "Success",
                    text: "Food added successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            } else {
                // Log the error for debugging
                console.error("Error adding food:", data);

                Swal.fire({
                    title: "Success",
                    text: "Food added successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            // Log the error for debugging
            console.error("Error adding food:", error);

            Swal.fire({
                title: "Error",
                text: "An unexpected error occurred. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="py-10">
            <p className="text-[30px] font-extrabold text-center">
                Donate Your Extra Food Here!
            </p>
            <div>
                <div className="hero-content mx-auto">
                    <div className="card shadow-2xl bg-base-100 w-[600px] p-10 box-content">
                        <form onSubmit={handleAddFood} className="card-body">
                            <div className="flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="FoodName"
                                        placeholder="Food Name"
                                        className="input input-bordered border-[#BB272E]"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Image URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="Food Photo"
                                        className="input input-bordered border-[#BB272E]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Quantity</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        placeholder="Food Quantity"
                                        className="input input-bordered border-[#BB272E]"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pickup Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Pickup Location"
                                        className="input input-bordered border-[#BB272E]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expired Time</span>
                                </label>
                                <input
                                    type="text"
                                    name="time"
                                    placeholder="Expired Time"
                                    className="input input-bordered border-[#BB272E]"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <textarea
                                    name="comment"
                                    className="border-2 w-full h-32 border-[#BB272E] rounded-lg hover:outline-none p-1"
                                    placeholder="Write Your Opinion!!"
                                ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className={`text-white btn btn-primary bg-[#BB272E] hover:bg-[#BB272E] ${isLoading && "opacity-50 cursor-not-allowed"
                                        }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Adding Food..." : "Add Food"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;


