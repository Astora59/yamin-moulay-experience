import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/projets",
        element: <Project />
    },
    {
        path:"/contact",
        element: <Contact />
    }

])

export default router