import { Box, Container, Typography, Grid } from "@mui/material"

import PaperCardComponent from "../../components/common/PaperCardComponent"
import CarouselComponent from "../../components/common/CarouselComponent"

const services = [
    {
        id: 1,
        title: 'Premium Products',
        description: 'We offer a wide range of high - quality computer products from trusted brands, ensuring durability and reliability.'
    },

    {
        id: 2,
        title: 'Extended Warranties',
        description: 'Enjoy peace of mind with our extended warranties and comprehensive service plans.'
    },

    {
        id: 3,
        title: 'Best Prices',
        description: 'We offer competitive pricing on all our computer products without compromising on quality.'
    },

    {
        id: 4,
        title: 'After-Sales Support',
        description: ' Our dedicated after - sales support team is available to assist you with any issues or questions you may have.'
    },

    {
        id: 5,
        title: 'Latest Technology',
        description: 'Stay ahead with the latest and most innovative technology available on the market.'
    },

    {
        id: 6,
        title: 'Custom Solutions',
        description: 'We provide custom - built computers and configurations to suit your specific needs.'
    },

    {
        id: 7,
        title: 'Comprehensive Support',
        description: ' From setup to troubleshooting, we offer comprehensive support to ensure you get the most out of your products.'
    },
]

const WorkWithUs = () => {

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
