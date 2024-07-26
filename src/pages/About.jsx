import ButtonComponent from '../components/common/ButtonComponent'
import CardComponent from '../components/common/CardComponent'
import Introduction from '../layouts/about/Introduction'
import Stats from '../layouts/about/Stats'
import Mission from '../layouts/about/Mission'
import Vision from '../layouts/about/Vision'
import WorkWithUs from '../layouts/sections/WorkWithUs'
import OurStory from '../layouts/about/OurStory'
import Team from '../layouts/about/Team'

import { Grid, Container, Box, Typography, Avatar, Paper, } from '@mui/material'


const About = () => {

    const features = [
        { label: 'Years in business', value: '7' },
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Satisfied Customer', value: '99%' }
    ]

    return (
        <>
            <Box
                sx={{
                    background: '#f3f6ff',
                    position: 'relative'
                }}
            >

                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px',
                    }}
                >
                    <Container
                        fixed
                    >
                        <Introduction />
                        <Stats
                            data={features}
                        />
                    </Container>

                </Box>

            </Box>

            <Box>
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px',
                        margin: '0px, auto',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                    }}
                >
                    <Container
                        fixed
                    >
                        <Grid
                            container
                            spacing={8}
                        >

                            {/* Mission */}
                            <Grid item xs={12} sm={6}>
                                <Mission />
                            </Grid>

                            {/* Vision */}
                            <Grid item xs={12} sm={6}>
                                <Vision />
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </Box>

            <Box>
                <WorkWithUs />
            </Box>

            <Box>
                <OurStory />
            </Box>

            <Box>
                <Team />
            </Box>


        </>
    )
}

export default About