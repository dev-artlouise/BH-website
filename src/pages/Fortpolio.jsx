import { Box, Container, Grid, Typography } from "@mui/material"

import CardComponent from "../components/common/CardComponent"
import ButtonComponent from "../components/common/ButtonComponent"

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