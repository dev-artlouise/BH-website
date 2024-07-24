import Hero from "../layouts/sections/Hero";
import Projects from "../layouts/sections/Projects"
import Testimonials from "../layouts/sections/Testimonials";
import ContactForm from "../layouts/sections/ContactForm";

import Companies from "../layouts/home/Companies";
import Services from "../layouts/home/Services";
import Process from "../layouts/home/Process";

//data
import { services, companies, process, projects, testimonials } from "../data";

const Home = () => {
    return (
        <>
            <Hero />
            <Companies
                data={companies}
            />
            <Services
                data={services}
            />
            <Process
                data={process}
            />
            <Projects
                data={projects}
            />
            <Testimonials
                data={testimonials}
            />
            <ContactForm />
        </>
    )
}

export default Home