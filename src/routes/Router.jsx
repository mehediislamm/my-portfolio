
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../component/layout/Main";
import Home from "../component/Home/Home/Home";
import About from "../component/About/About";
import Project from "../component/Project/Project";
import Contact from "../component/Contact/Contact";
import Skill from "../component/Skill/Skill";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'project',
            element:<Project></Project>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        },
        {
            path:'skill',
            element:<Skill></Skill>
        },
      ]
    },
  ]);