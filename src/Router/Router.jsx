import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import SignInPage from "../Pages/Login/SignInPage/SignInPage";
import SignUpPage from "../Pages/Login/SignUpPage/SignUpPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'private',
                element:<PrivatePage></PrivatePage>
            },
            {
                path:'login',
                element:<SignInPage></SignInPage>
            },
            {
                path:'signup',
                element:<SignUpPage></SignUpPage>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'addcoffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
]) 