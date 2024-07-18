import { Box, Container, Grid, Typography } from "@mui/material"

import CardComponent from "../components/common/CardComponent"
import ButtonComponent from "../components/common/ButtonComponent"

import Testimonials from "../layouts/fortpolio/Testimonials"

const Fortpolio = () => {

    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error',
            image: 'https://via.placeholder.com/150',
            path: '',
            category: 'Web'
        },

        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error',
            image: 'https://via.placeholder.com/150',
            path: '',
            category: 'Mobile'
        },

        {
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error',
            image: 'https://via.placeholder.com/150',
            path: '',
            category: 'Web'
        },

        {
            title: 'Project 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error',
            image: 'https://via.placeholder.com/150',
            path: '',
            category: 'Mobile'
        },
    ]

    return (
        <div>
            <Box>
                <Container>

                    <Box my={8}>
                        <Box my={8}>
                            <Box
                                textAlign='center'
                                marginBottom={4}
                                my={8}
                            >
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    component="p"
                                    textAlign='center'
                                    fontSize='1rem'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                >
                                    Our Work
                                </Typography>

                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    fontWeight='700'
                                >
                                    Our team strives to achieve excellence in every detail of our work.
                                </Typography>

                                <Typography
                                    variant="h6"
                                    component='p'
                                >
                                    From your new website concept to its design, development, launch, and expansion!
                                </Typography>

                            </Box>

                            <Grid container spacing={5}>
                                {projects.map(({ title, description, image }, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Box
                                            component='a'
                                        >
                                            <CardComponent

                                                image={image}
                                                title="Card Title"
                                                cardContent={
                                                    <>
                                                        <Typography
                                                            variant="h5"
                                                            component="div"
                                                            gutterBottom
                                                        >
                                                            {title}
                                                        </Typography>

                                                        <Typography
                                                            variant="body2"
                                                            gutterBottom
                                                        >
                                                            {description}
                                                        </Typography>
                                                    </>
                                                }
                                                cardActions={
                                                    <>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'flex-end',
                                                                width: '100%',
                                                            }}
                                                        >
                                                            <ButtonComponent label="Learn More" size="small" variant="text" />
                                                        </Box>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>

                <Testimonials />
            </Box>
        </div>
    )
}

export default Fortpolio