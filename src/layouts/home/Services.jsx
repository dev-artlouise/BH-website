import { Box, Container, Typography } from "@mui/material"

import CarouselComponent from "../../components/common/CarouselComponent"
import PaperCardComponent from "../../components/common/PaperCardComponent"

const services = [
    { id: 1, name: 'Web Design', description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
    { id: 2, name: 'Web Design', description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
    { id: 3, name: 'Web Design', description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
    { id: 4, name: 'Web Design', description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
    { id: 5, name: 'Web Design', description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
    { id: 6, name: 'Web Design', description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
]

const Services = () => {
    return (
        <>
            <Box
                sx={{
                    background: '#f3f6ff',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px',
                    }}
                >
                    <Container>
                        <Box
                            sx={{
                                maxWidth: { sm: '720px', lg: '1236px' }
                            }}
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
                                    Services
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

                        </Box>
                    </Container >

                    <Box>
                        <CarouselComponent
                            slidesToShow={4}
                            slidesToScroll={4}
                            sliderContent={
                                services.map(({ id, name, description }) => (
                                    <Box
                                        key={id}
                                        sx={{
                                            padding: '16px'
                                        }}
                                    >
                                        <PaperCardComponent
                                            avatarHeight='48'
                                            avatarWidth='48'
                                            alignItems='center'
                                            textAlign='center'
                                            title={name}
                                            description={description}
                                        />
                                    </Box>
                                ))
                            }
                        />
                    </Box>

                </Box>
            </Box >
        </>
    )
}

export default Services