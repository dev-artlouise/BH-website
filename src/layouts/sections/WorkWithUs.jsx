import { Box, Container, Typography, Grid } from "@mui/material"

import PaperCardComponent from "../../components/common/PaperCardComponent"
import CarouselComponent from "../../components/common/CarouselComponent"

import { services } from "../../data"

const WorkWithUs = ({ data }) => {

    return (
        <Box
            sx={{
                background: '#f3f6ff',
                position: 'relative',
            }}
        >
            <Container
                fixed
                justifyContent='center'
                alignItems='centerr'
            >
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px'
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            xs={12}
                            sm={10}
                            md={6}
                            item
                        >
                            <Box
                                sx={{
                                    marginBottom: '32px'
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                    gutterBottom
                                >
                                    Why choose us
                                </Typography>

                                <Typography
                                    variant='h3'
                                    fontWeight='700'
                                    gutterBottom
                                >
                                    High-impact design & development services
                                </Typography>

                                <Typography
                                    variant='body1'
                                    fontWeight='500'
                                    fontSize='1.2rem'
                                    gutterBottom
                                >
                                    We take you by hand on each step of the process
                                </Typography>
                            </Box>
                        </Grid>


                        <Grid
                            xs={12}
                            sm={10}
                            md={6}
                            item
                        >
                            <CarouselComponent
                                slidesToShow={1}
                                slidesToScroll={1}
                                sliderContent={
                                    services.map(({ id, title, description }) => (
                                        <Box
                                            key={id}
                                            sx={{
                                                padding: '16px'
                                            }}
                                        >
                                            <PaperCardComponent
                                                alignItems='left'
                                                textAlign='left'
                                                title={title}
                                                description={description}
                                            />
                                        </Box>
                                    ))
                                }
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box >
    )
}

export default WorkWithUs
