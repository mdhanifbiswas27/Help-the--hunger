import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {
    const { FoodName, photo, quantity, location, time, comment, donatorName, donatorEmail, donatorPhoto, _id } = food;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className="w-full h-[250px]" src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" ">
                        <h2 className="card-title">{FoodName}</h2>
                        <p>Expire within:{time} days</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Quantity:{quantity}</p>
                        <p>Collect from:{location}</p>
                    </div>
                       <p>{comment}</p>
                       <hr />
                       <p>Donner:</p>
                       <hr />

                       <div className="flex justify-between items-center">
                         <p className="text-[18px]">{donatorName}</p>
                         <img className="h-[40px] w-[40px] rounded-full" src={donatorPhoto} alt="" />
                       </div>
                       <p>E-mail:{donatorEmail}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;