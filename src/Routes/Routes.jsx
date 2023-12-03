import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import AvailableFood from "./Pages/AvailableFood/AvailableFood";
import AddFood from "./Pages/AddFood/AddFood";
import ManageMyFood from "./Pages/ManageMyFood/ManageMyFood";
import MyFoodRequest from "./Pages/MyFoodRequest/MyFoodRequest";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Update from "./Pages/ManageMyFood/Update";
import Details from "./Pages/FoodDetails/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        
        {
            path:'/AvailableFoods',
            element:<AvailableFood></AvailableFood>
        },
        {
          path:'/AddFood',
          element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
        },
        {
          path:'/ManageMyFoods',
          element:<PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes>
        },
        {
          path:'/MyFoodRequest',
          element:<PrivateRoutes><MyFoodRequest></MyFoodRequest></PrivateRoutes>
        },
        {
          path:'/Login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/Update/:_id',
          element:<Update></Update>,
          loader:({params})=> fetch(`https://my-assignment-eleven-server-site-1rgkx3ejw.vercel.app/food/${params._id}`),
        },
        {
          path:'/details/:_id',
          element:<PrivateRoutes><Details></Details></PrivateRoutes>,
          loader:({params})=> fetch(`https://my-assignment-eleven-server-site-1rgkx3ejw.vercel.app/food/${params._id}`),
        }
      ]
    },
  ]);

  export default router;