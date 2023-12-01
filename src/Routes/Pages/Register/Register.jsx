import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const Photo = form.Photo.value;
        const password = form.password.value;
        console.log(name,email,Photo, password);
    }

    return (
        <div>
            <div className="hero py-10 bg-base-200">
                <div className="hero-content ">

                    <div className="card  shadow-2xl bg-base-100 w-[700px] p-10 box-content">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="flex justify-between mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-[300px]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-[300px]" required />
                                </div>
                            </div>
                            <div className="flex justify-between mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-[300px]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-[300px]" required />
                                    
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <h1 className="text-right py-2">Already have an account? please <Link to='/login'><button className="btn-link">Login</button></Link></h1>

                            </div>
                        </form>
                        <hr className=" pt-2"></hr>
                        <div className="flex justify-center py-5">
                            <div className="flex items-center border-2 px-2 py-1 rounded-full">
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