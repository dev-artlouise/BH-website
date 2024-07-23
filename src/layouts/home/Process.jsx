import { Container, Box, Grid, Typography } from "@mui/material"

import CarouselComponent from "../../components/common/CarouselComponent"
import PaperCardComponent from "../../components/common/PaperCardComponent"

import { Lightbulb, SlidersVertical, SquareTerminal } from "lucide-react"

const process = [
    {
        id: 1,
        name: 'Idea',
        description: 'We start by meeting with your team to understand your project idea and objectives. Following this, our team collaborates to develop an action plan and proposal for your project.',
        icon: <Lightbulb height={48} width={48} />
    },
    {
        id: 2,
        name: 'Design',
        description: 'We begin by creating a mockup or prototype of your website and presenting it to you. With the initial mockup in hand, we then initiate the revision process to refine and perfect it.',
        icon: <SlidersVertical height={48} width={48} />
    },
    {
        id: 3,
        name: 'Development',
        description: 'We build your website following the best practices and standards to ensure it is fully responsive, incredibly fast, SEO-friendly, and highly scalable.',
        icon: <SquareTerminal height={48} width={48} />,
    },
]

const Process = () => {
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
                                        process.map(({ id, name, description, icon }) => (
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
