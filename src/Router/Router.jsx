import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import SignInPage from "../Pages/Login/SignInPage/SignInPage";
import SignUpPage from "../Pages/Login/SignUpPage/SignUpPage";

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
            }
        ]
    }
]) 