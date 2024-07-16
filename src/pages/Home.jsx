import Hero from "../components/Hero";
import Companies from "../layouts/home/Companies";
import Services from "../layouts/home/Services";
import WorkWithUs from "../layouts/home/WorkWithUs";
import Process from "../layouts/home/Process";
import Projects from "../layouts/home/Projects";
import Reviews from "../layouts/home/Reviews";
import WorkFlow from '../layouts/home/Workflow'
import Testimonials from '../layouts/home/Testimonials'
// import Workflow from "../components/Workflow";
// import Testimonials from "../components/Testimonials";

import { Container } from "@mui/material";

const Home = () => {
    return (
        <>
            <Hero />
            <Companies />
            <Services />
            <WorkWithUs />
            <Process />
            <Projects />
            <Reviews />
            {/* <Projects /> */}
            {/* <Testimonials /> */}

        </>
    )
}

export default Home