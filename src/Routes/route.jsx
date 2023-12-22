import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard/Dashboard";

export const router = createBrowserRouter([
     {
     path: "/",
      element: <Main></Main>,
      children:[
          {
               path:'/',
               element: <Home></Home>
          },
          {
               path:"/login",
               element: <Login></Login>
          },
          {
               path:"/signUp",
               element: <SignUp></SignUp>
          }
      ]
      },
      {
          path:"/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      }
     ]);
     