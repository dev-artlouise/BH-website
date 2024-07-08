import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import About from '../pages/About';
import Services from '../pages/Services';
import Fortpolio from '../pages/Fortpolio';
import Contact from "../pages/Contact";
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
                path: '/contact-us',
                element: <Contact />,
            },

        ]
    },


]);

export default router;
