import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    

    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-lg"></span></div>
    }

  if(user){ 
    return children;
  }
  return <Navigate to='/Login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;