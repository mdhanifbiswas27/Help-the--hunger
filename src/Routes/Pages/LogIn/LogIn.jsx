import { Link } from "react-router-dom";


const LogIn = () => {
    return (
        <div>
            <div className="hero py-10 bg-base-200">
                <div className="hero-content ">
                    
                    <div className="card  shadow-2xl bg-base-100 w-[400px]">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <hr className=" py-3"></hr>
                        <div>
                            <h1>New here please <Link to='/register'><button className="btn-link">register</button></Link></h1>
                            <p>Use google to continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;