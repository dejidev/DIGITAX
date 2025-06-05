import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Service from "../pages/Service";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/careers",
                element: <Careers />
            },
            {
                path: "/contacts",
                element: <Contact />
            },
            {
                path: "/project",
                element: <Project />
            },
            {
                path: "/services",
                element: <Service />
            }

        ]
    }
])


export default router