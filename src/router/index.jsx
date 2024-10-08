import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import About from '../pages/About';
import Services from '../pages/Services';
import Fortpolio from '../pages/Fortpolio';
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Projects from '../pages/projects/Projects';
import Project from "../pages/projects/Project";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },

            {
                path: '/about-us',
                element: <About />,
            },

            {
                path: '/services',
                element: <Services />,
            },

            {
                path: '/fortpolio',
                element: <Fortpolio />,
            },

            {
                path: '/products',
                element: <Products />,
            },

            {
                path: '/projects',
                element: <Projects />,
                children: [
                    {
                        path: ':id',
                        element: <Project />
                    }
                ]
            },

            {
                path: '/contact-us',
                element: <Contact />,
            },

        ]
    },


]);

export default router;
