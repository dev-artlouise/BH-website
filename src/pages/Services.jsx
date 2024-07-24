import { Container, Box, Typography, Card, Avatar, Grid, CardContent } from "@mui/material"
import { Monitor, Component, Smartphone, SearchCheck, Lightbulb, SlidersVertical, SquareTerminal } from 'lucide-react';

import ButtonComponent from "../components/common/ButtonComponent"

import ImageDiscuss from '../assets/services.png'

import OurServices from "../layouts/services/OurServices";
import WhatWeDo from "../layouts/services/WhatWeDo";
import WorkWithUs from "../layouts/about/WorkWithUs";
import Process from "../layouts/home/Process";
import SeenOn from "../layouts/services/SeenOn";

import { companies } from "../data";

const Services = () => {

    const services = [
        { label: 'Web Development', icon: <Monitor height={48} width={48} />, description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
        { label: 'Mobile Development', icon: <Smartphone height={48} width={48} />, description: 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.' },
        { label: 'Product Design', icon: <Component height={48} width={48} />, description: 'We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.' },
        { label: 'Search Engine Optimization (SEO)', icon: <SearchCheck height={48} width={48} />, description: 'We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.' }
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
                <WhatWeDo />
                <WorkWithUs />
                <SeenOn
                    data={companies}
                />
                <Process />

                <Box
                    sx={{
                        background: '#f3f6ff',
                        position: 'relative'
                    }}
                >
                    <Box
                        sx={{
                            paddingTop: '64px',
                            paddingBottom: '64px'
                        }}
                    >
                        <Box
                            sx={{
                                // marginTop: 10,
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
                                    variant='contained'
                                    size='large'
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>



            </Box >
            {/* </Container> */}
        </>
    )
}

export default Services