import { Container, Box, Grid, Typography } from "@mui/material"

import CarouselComponent from "../../components/common/CarouselComponent"
import PaperCardComponent from "../../components/common/PaperCardComponent"

const Process = ({ data }) => {

    return (
        <Box
            sx={{
                // background: '#f3f6ff',
                position: 'relative'
            }}
        >
            <Container
                fixed
            >
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px'
                    }}
                >
                    <Box>
                        <Grid
                            container
                            spacing={2}
                        // justifyContent='center'
                        >
                            <Grid
                                xs={12}
                                sm={10}
                                md={6}
                                item
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant='body1'
                                            component='p'
                                            textAlign='left'
                                            textTransform='uppercase'
                                            fontWeight='500'
                                            gutterBottom
                                        >
                                            Our Process
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            textAlign='left'
                                            fontWeight='700'
                                            gutterBottom
                                        >
                                            An uncomplicated yet effective process
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            component='p'
                                            gutterBottom
                                            fontWeight='500'
                                            textAlign='left'
                                        >
                                            As specialists in design and development, we assist you through the entire process, from your initial website concept to design, development, launch, and scaling!
                                        </Typography>

                                    </Box>
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
                                        data.map(({ id, name, description, icon }) => (
                                            <Box
                                                key={id}
                                                sx={{
                                                    padding: '16px'
                                                }}
                                            >
                                                <PaperCardComponent
                                                    alignItems='left'
                                                    textAlign='left'
                                                    title={name}
                                                    icon={icon}
                                                    description={description}
                                                    avatarHeight='48'
                                                    avatarWidth='48'
                                                />
                                            </Box>
                                        ))
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container >

        </Box>
    )
}

export default Process
