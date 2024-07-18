import Hero from "../components/Hero";
import Companies from "../layouts/home/Companies";
import Services from "../layouts/home/Services";
import WorkWithUs from "../layouts/home/WorkWithUs";
import Process from "../layouts/home/Process";
import Projects from "../layouts/home/Projects";
import Reviews from "../layouts/home/Reviews";
import Contact from "../layouts/home/ContactForm";

import { Container } from "@mui/material";

const Home = () => {
    return (
        <>
            <Hero />
            <Companies />
            <WorkWithUs />
            <Services />
            <Process />
            <Projects />
            <Reviews />
            <Contact />
        </>
    )
}

export default Home