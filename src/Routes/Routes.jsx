import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:'menu',
          element: <Menu></Menu>
        }
      ]
    },
  ]);