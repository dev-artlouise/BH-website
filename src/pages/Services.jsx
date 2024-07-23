import { Container, Box, Typography, Card, Avatar, Grid, CardContent } from "@mui/material"
import { Monitor, Component, Smartphone, SearchCheck, Lightbulb, SlidersVertical, SquareTerminal } from 'lucide-react';

import ButtonComponent from "../components/common/ButtonComponent"

import ImageDiscuss from '../assets/services.png'

import OurServices from "../layouts/services/OurServices";

const Services = () => {

    const services = [
        { label: 'Web Development', icon: <Monitor height={48} width={48} />, description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
        { label: 'Mobile Development', icon: <Smartphone height={48} width={48} />, description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
        { label: 'Product Design', icon: <Component height={48} width={48} />, description: 'We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.' },
        { label: 'Search Engine Optimization (SEO)', icon: <SearchCheck height={48} width={48} />, description: 'We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.' }
    ]

    const prevProjects = [
        { label: 'Airbnb', img: 'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg' },
        { label: 'Amazon', img: 'https://assets.maccarianagency.com/svg/logos/amazon-original.svg' },
        { label: 'Fitbit', img: 'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg' },
        { label: 'Netflix', img: 'https://assets.maccarianagency.com/svg/logos/netflix-original.svg' },
        { label: 'Google', img: 'https://assets.maccarianagency.com/svg/logos/google-original.svg' },
        { label: 'Paypal', img: 'https://assets.maccarianagency.com/svg/logos/paypal-original.svg' },
    ]

    const steps = [
        { title: 'Idea', icon: <Lightbulb height={48} width={48} />, description: 'We meet with your team to know more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.' },
        { title: 'Design', icon: <SlidersVertical height={48} width={48} />, description: 'We start by designing a mockup or prototype of your website, and present it to you. Once with the initial mockup, we start the revision process to perfect it.' },
        { title: 'Development', icon: <SquareTerminal height={48} width={48} />, description: 'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, SEO-friendly, and super scalable website.' }
    ]

    return (
        <>
            {/* <Container> */}
            <Box>

                <OurServices />

                <Container >
                    <Box my={8}>

                        <Box
                            my={8}
                        >
                            {/* Services Section */}
                            <Box
                                textAlign='center'
                                marginBottom={4}
                            >
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    component="P"
                                    textAlign='center'
                                    fontSize='1rem'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                >
                                    Our Services
                                </Typography>

                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    fontWeight='700'
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>

                                <Typography
                                    variant="h6"
                                    component='p'
                                >
                                    Ipsa labore saepe ducimus eum laudantium, aperiam libero rem minima! Dolor sunt explicabo dicta distinctio molestiae nemo officia aliquam, quibusdam expedita consequuntur!
                                </Typography>

                                <Box
                                    marginTop={3}
                                    display='flex'
                                    justifyContent='center'
                                >
                                    <ButtonComponent
                                        label='Contact us'
                                        variant='outlined'
                                        size='large'
                                    />
                                </Box>
                            </Box>

                            {/* Services Image Section */}
                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <img
                                    src={ImageDiscuss}
                                    alt='services-image'
                                    width={520}
                                    height={520}
                                />
                                {/* 
                                <Card
                                    sx={{
                                        textAlign: 'center'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={ImageDiscuss}
                                        alt='services-image'
                                        sx={{
                                            width: '50%',
                                            height: '50%',
                                        }}
                                    />
                                </Card> */}
                            </Box>
                        </Box>

                        <Box>
                            {/* What we do section */}
                            <Box
                                textAlign='center'
                                marginBottom={5}
                            >
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    component="P"
                                    textAlign='center'
                                    fontSize='1rem'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                >
                                    What we do
                                </Typography>

                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    fontWeight='700'
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>

                                <Typography
                                    variant="h6"
                                    component='p'
                                >
                                    Ipsa labore saepe ducimus eum laudantium, aperiam libero rem minima! Dolor sunt explicabo dicta distinctio molestiae nemo officia aliquam, quibusdam expedita consequuntur!
                                </Typography>

                                <Box
                                    marginTop={3}
                                    display='flex'
                                    justifyContent='center'
                                >
                                    <ButtonComponent
                                        label='Contact us'
                                        variant='outlined'
                                        size='large'
                                    />
                                </Box>
                            </Box>

                            {/* Services Grid Section */}
                            <Box
                                display='flex'
                                justifyContent="center"
                                alignItems="start"
                            >
                                <Grid
                                    container
                                    justifyContent='center'
                                >
                                    {services.map(({ label, icon, description }, index) => (
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            md={6}
                                            lg={4}
                                            paddingTop={4}
                                            paddingLeft={4}
                                            sx={{
                                                paddingTop: { xs: 5, sm: 2, md: 4, lg: 4 },
                                                paddingLeft: {
                                                    xs: 2, sm: 1, md: 2, lg: 4
                                                },
                                                paddingRight: {
                                                    xs: 2,
                                                }
                                            }}
                                            key={index}
                                        >
                                            <Box
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="start"
                                                height="100%">
                                                <Card
                                                    sx={{
                                                        borderRadius: '16px',
                                                        paddingBottom: '24px',
                                                    }}
                                                >
                                                    <CardContent
                                                        sx={{
                                                            padding: '48px',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Avatar
                                                            sx={{
                                                                height: '84px',
                                                                width: '84px',
                                                                marginBottom: '16px',
                                                                borderRadius: '20px'
                                                            }}
                                                        >

                                                            <Box>
                                                                {icon}
                                                            </Box>

                                                        </Avatar>

                                                        <Typography
                                                            textAlign='center'
                                                            variant="h6"
                                                            gutterBottom
                                                            fontSize='1.25rem'
                                                        >
                                                            {label}
                                                        </Typography>

                                                        <Typography
                                                            textAlign='center'
                                                            variant="body1" >
                                                            {description}
                                                        </Typography>
                                                    </CardContent>

                                                </Card>
                                            </Box>
                                        </Grid>
                                    ))}

                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container >

                <Box
                    bgcolor='##ffffff0a'
                    py={8}
                >
                    <Container>
                        <Box>
                            <Typography
                                variant="body1"
                                gutterBottom
                                component="P"
                                textAlign='center'
                                fontSize='1rem'
                                fontWeight='500'
                                textTransform='uppercase'
                            >
                                As seen on
                            </Typography>

                            <Box
                                display='flex'
                                flexWrap='wrap'
                                justifyContent='center'
                            >
                                {
                                    prevProjects.map(({ img, label }, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                maxWidth: '90px',
                                                marginTop: '16px',
                                                marginRight: '32px'
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={label}
                                                style=
                                                {{
                                                    width: '100%',
                                                    height: '100%',
                                                    filter: 'brightness(0) invert(0.7)'
                                                }} />
                                        </Box>
                                    ))
                                }

                            </Box>
                        </Box>
                    </Container>
                </Box>

                <Box
                    py={8}
                >
                    <Container>
                        <Box
                            textAlign='center'
                            marginBottom={5}
                        >
                            <Typography
                                variant="body1"
                                gutterBottom
                                component="P"
                                textAlign='center'
                                fontSize='1rem'
                                fontWeight='500'
                                textTransform='uppercase'
                            >
                                What we do
                            </Typography>

                            <Typography
                                variant="h3"
                                gutterBottom
                                fontWeight='700'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>

                            <Typography
                                variant="h6"
                                component='p'
                            >
                                Ipsa labore saepe ducimus eum laudantium, aperiam libero rem minima! Dolor sunt explicabo dicta distinctio molestiae nemo officia aliquam, quibusdam expedita consequuntur!
                            </Typography>

                            <Box
                                marginTop={3}
                                display='flex'
                                justifyContent='center'
                            >
                                {/* <ButtonComponent
                                    label='Contact us'
                                    variant='outlined'
                                    size='large'
                                /> */}
                            </Box>
                        </Box>

                        <Grid container spacing={2}>
                            {
                                steps.map(({ title, icon, description }, index) => (
                                    <Grid
                                        xs={12}
                                        sm={10}
                                        md={6}
                                        lg={4}
                                        key={index}
                                        paddingTop={4}
                                        paddingLeft={4}
                                        sx={{
                                            paddingTop: { xs: 5, sm: 2, md: 4, lg: 4 },
                                            paddingLeft: {
                                                xs: 2, sm: 1, md: 2, lg: 4
                                            },
                                            paddingRight: {
                                                xs: 2,
                                            }
                                        }}
                                    >
                                        <Box>
                                            {icon}
                                        </Box>

                                        <Typography
                                            variant='h6'
                                            component='h6'
                                            gutterBottom
                                        >
                                            {title}
                                        </Typography>

                                        <Typography
                                            variant='body1'
                                            component='clipPath'
                                            gutterBottom
                                        >
                                            {description}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>

                        <Box
                            sx={{
                                marginTop: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: { xs: 'column', sm: 'row' }, // Responsive flex direction
                            }}
                        >

                            <Typography
                                variant="h6"
                                component='h6'
                            >
                                Have an idea to discuss ?
                            </Typography>

                            <Box
                                sx={{
                                    marginLeft: {
                                        xs: '0px',
                                        sm: '16px'
                                    },
                                    marginTop: {
                                        xs: '16px',
                                        sm: '0px'
                                    }
                                }}
                            >
                                <ButtonComponent
                                    label='Contact us'
                                    variant='outlined'
                                    size='large'
                                />
                            </Box>
                        </Box>

                    </Container>

                </Box>
            </Box >
            {/* </Container> */}
        </>
    )
}

export default Services