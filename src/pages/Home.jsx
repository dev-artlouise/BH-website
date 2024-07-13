import Hero from "../components/Hero";
import Companies from "../layouts/home/Companies";
import Projects from "../components/Projects";
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
            <WorkFlow />
            <Testimonials />
            {/* <Projects /> */}
            {/* <Testimonials /> */}

        </>
    )
}

export default Home