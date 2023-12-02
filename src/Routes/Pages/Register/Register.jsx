import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import  { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const {createUser,loginUserWithGoogle,UpdateProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const Photo = form.Photo.value;
        const password = form.password.value;
        console.log(name,email,Photo, password);

        // create user
        createUser(email,password)
        .then(()=>{
            UpdateProfile(name,Photo)
            .then(()=>{
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            });
            
            
        })
        .catch(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "something wrong try again",
                showConfirmButton: false,
                timer: 1500
              });
        })
    };

    const handleLoginWithGoogle = ()=>{
        loginUserWithGoogle()
        .then(()=>{
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "User Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
        })
        .catch(()=>{
            Swal.fire({
                position: "middle",
                icon: "error",
                title: "Something wrong try again",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
        })
    }

    return (
        <div>
            <Helmet>
                <title>Help The Hunger/Register</title>
            </Helmet>
            <div className="hero py-10 bg-base-200">
                <div className="hero-content ">

                    <div className="card  shadow-2xl bg-base-100 w-[700px] p-10 box-content">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="flex justify-between mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-[300px] border-[#BB272E]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-[300px] border-[#BB272E]" required />
                                </div>
                            </div>
                            <div className="flex justify-between mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-[300px] border-[#BB272E]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-[300px] border-[#BB272E]" required />
                                    
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#BB272E] text-white hover:bg-[#BB272E]">Register</button>
                                <h1 className="text-right py-2">Already have an account? please <Link to='/login'><button className="btn-link">Login</button></Link></h1>

                            </div>
                        </form>
                        <hr className=" pt-2"></hr>
                        <div className="flex justify-center py-5">
                            <div onClick={handleLoginWithGoogle} className="flex items-center border-2 px-2 py-1 rounded-full">
                                <p>
                                    <FcGoogle></FcGoogle>
                                </p>
                                <p>continue with Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;