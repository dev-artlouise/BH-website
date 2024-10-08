import { Box } from "@mui/material"

import Projects from '../layouts/sections/Projects'
import Testimonials from "../layouts/sections/Testimonials"

import ContactForm from "../layouts/sections/ContactForm";

import { useNavigate } from "react-router-dom"

import { projects, testimonials } from "../data"

const Fortpolio = () => {
    return (
        <Box>
            <Projects />
            {/* <ContactForm /> */}
            {/* <Testimonials
                data={testimonials}
            /> */}
        </Box>
    )
}

export default Fortpolio