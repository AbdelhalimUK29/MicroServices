import {Navigate, createBrowserRouter} from 'react-router-dom';
import DefaultLayout from '../pages/DefaultLayout';
import GuestLayout from '../pages/GuestLayout';
import Login from '../components/Login';
import SignUp from "../components/SignUp";
import LandingPage from '../pages/LandingPage';
import IteamCarte from '../pages/IteamCarte';
import CheckOutPage from '../pages/CheckOutPage';
import ProductDetails from '../pages/ProductDetails';
import Product from '../pages/Product';
import Notfound from '../pages/Notfound';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProductForm from '../pages/Dashboard/ProductForm';
import ShowProduct from '../pages/Dashboard/ShowProduct';
import UpdateProduct from '../pages/Dashboard/UpdateProduct';


const route=createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to='/home'/>
            },
            {
                path:'/home',
                element:<LandingPage/>
        
            },
            {
                path:'/product',
                element:<Product/>
        
            },
            {
                path:'/product/:id',
                element:<ProductDetails/>
        
            },
            {
                path:'/iteamcarte',
                element:<IteamCarte/>
            },  
            {
                path:'/checkout',
                element:<CheckOutPage/>
            },  
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
        
            },
            {
                path:'/signup',
                element:<SignUp/>
        
            },
        ]

    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard/show',
                element:<ShowProduct/>
        
            },
            {
                path:'/dashboard/create',
                element:<ProductForm/>
            },
            {
                path:'/dashboard/update/:id',
                element:<UpdateProduct/>,
            },
        ]

    },

    {
        path:'*',
        element:<Notfound/>
    }
])
export default route;