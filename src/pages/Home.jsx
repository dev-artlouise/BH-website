import Hero from "../components/Hero";
import Projects from "../components/Projects";
import WorkFlow from '../layouts/home/Workflow'
import Testimonials from '../layouts/home/Testimonials'
// import Workflow from "../components/Workflow";
// import Testimonials from "../components/Testimonials";

import { Container } from "@mui/material";

const Home = () => {
    return (
        <>
            <Container
                sx={{
                    my: 10
                }}
            >
                <Hero />
                <WorkFlow />
                <Testimonials />
                {/* <Projects /> */}
                {/* <Testimonials /> */}
            </Container>
        </>
    )
}

export default Home