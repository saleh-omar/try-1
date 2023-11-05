import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/LogIn/Login";

import Register from "../Pages/Register/Register";

import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Addproduct from "../Pages/Addproduct/Addproduct";
import CarsCollction from "../Pages/Home/CarsCollction";
import CarDeatils from "../Pages/Home/CarDeatils";
import Mycart from "../Pages/My Cart/Mycart";
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import Privateroute from "./Privateroute";
import NoCar from "../Pages/Home/NoCar";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/data.json')
               
               
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/addproduct',
                element:<Privateroute><Addproduct></Addproduct></Privateroute>
            },

            {
                path: '/mycart',
                element:<Privateroute><Mycart></Mycart></Privateroute>,
                loader: () => fetch('https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cart')
            },
            {
                path: '/oneType/:name',
                element:<Privateroute><CarsCollction></CarsCollction></Privateroute>,
                loader: ({ params }) => fetch(`https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cars/${params.name}`)
            },

            {
                path: '/updat/:id',
                element:<UpdateCar></UpdateCar>,
                // loader: ({ params }) => fetch(`https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cars/${params.id}`)
                loader: ({ params }) => fetch(`https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cars/${params.name}/${params.id}`)
            },

            {
                path: '/oneType/:name/:id',
                element:<Privateroute><CarDeatils></CarDeatils></Privateroute>,
                loader: ({ params }) => fetch(`https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cars/${params.name}/${params.id}`)
            },

            {
                path: '/otherPage',
                element:<NoCar></NoCar>
            },

           
           
           
        
        ]
    }    
]);

export default router;