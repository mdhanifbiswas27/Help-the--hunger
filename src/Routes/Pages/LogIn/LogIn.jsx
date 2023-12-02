import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";



const LogIn = () => {
    const { loginUserWithGoogle, LogInWithEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // login a user
        LogInWithEmailAndPassword(email,password)
        .then(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User LogIn successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
        })
        .catch(()=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something wrong try again",
                showConfirmButton: false,
                timer: 1500
              });
              
        })
                  
    }

    const handleLoginWithGoogle = () => {
        loginUserWithGoogle()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something wrong try again",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <div className="hero py-10 bg-base-200">
                <div className="hero-content ">

                    <div className="card  shadow-2xl bg-base-100 w-[400px]">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <h1 className="text-right py-2">New here? please <Link to='/register'><button className="btn-link">register</button></Link></h1>

                            </div>
                        </form>
                        <hr className=" pt-2"></hr>
                        <div className="flex justify-center py-5">
                            <div onClick={handleLoginWithGoogle} className="cursor-pointer flex items-center border-2 px-2 py-1 rounded-full">
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

export default LogIn;