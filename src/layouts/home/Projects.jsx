import { Box, Container, Typography, Grid } from '@mui/material'
import CardComponent from '../../components/common/CardComponent'
import ButtonComponent from '../../components/common/ButtonComponent'

const projects = [
    { id: 1, title: 'Title 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '' },
    { id: 2, title: 'Title 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '' },
    { id: 3, title: 'Title 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '' },
    { id: 4, title: 'Title 4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '' },
]

const Projects = () => {
    return (
        <Box
            sx={{
                paddingTop: '64px',
                paddingBottom: '64px',
            }}
        >
            <Container
                fixed
            >
                <Box>
                    <Box
                        sx={{
                            marginBottom: '32px'
                        }}
                    >

                        <Typography
                            variant='body1'
                            component='p'
                            textAlign='center'
                            textTransform='uppercase'
                            fontWeight='500'
                            gutterBottom
                        >
                            Our Work
                        </Typography>

                        <Typography
                            variant="h3"
                            textAlign='center'
                            fontWeight='700'
                            gutterBottom
                        >
                            Our team is dedicated to delivering exceptional results with every detail.
                        </Typography>

                        <Typography
                            variant="h6"
                            component='p'
                            gutterBottom
                            fontWeight='500'
                            textAlign='center'
                        >
                            From your new website concept through to design, development, launch, and scaling!
                        </Typography>

                    </Box>

                    <Grid
                        container
                    >
                        {projects.map(({ id, title, description, image }) => (
                            <Grid

                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                sx={{
                                    paddingLeft: '32px',
                                    paddingTop: '32px'
                                }}
                            >
                                <CardComponent
                                    title={title}
                                    image={image}
                                    cardContent={
                                        <>
                                            <Box>
                                                <Typography
                                                    variant='h6'
                                                    gutterBottom
                                                    fontWeight='500'
                                                >
                                                    {title}
                                                </Typography>

                                                <Typography
                                                    variant='body1'
                                                    component='p'
                                                >
                                                    {description}
                                                </Typography>
                                            </Box>
                                        </>
                                    }
                                    cardActions={
                                        <>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                    width: '100%'  // Ensure the Box takes the full width of its container
                                                }}>
                                                <ButtonComponent
                                                    size='small'
                                                    label='Learn More'
                                                />
                                            </Box>

                                        </>
                                    }
                                />

                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Container >
        </Box >
    )
}

export default Projects
