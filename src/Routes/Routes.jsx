import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import AvailableFood from "./Pages/AvailableFood/AvailableFood";
import AddFood from "./Pages/AddFood/AddFood";
import ManageMyFood from "./Pages/ManageMyFood/ManageMyFood";
import MyFoodRequest from "./Pages/MyFoodRequest/MyFoodRequest";
import LogIn from "./Pages/LogIn/LogIn";

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
          element:<AddFood></AddFood>
        },
        {
          path:'/ManageMyFoods',
          element:<ManageMyFood></ManageMyFood>
        },
        {
          path:'/MyFoodRequest',
          element:<MyFoodRequest></MyFoodRequest>
        },
        {
          path:'/Login',
          element:<LogIn></LogIn>
        }
      ]
    },
  ]);

  export default router;