import { Box } from "@mui/material"

import Projects from '../layouts/sections/Projects'
import Testimonials from "../layouts/sections/Testimonials"

import { useNavigate } from "react-router-dom"

import { projects, testimonials } from "../data"

const Fortpolio = () => {
    return (
        <Box>
            <Projects
                data={projects}
            />

            <Testimonials
                data={testimonials}
            />
        </Box>
    )
}

export default Fortpolio