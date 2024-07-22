import ButtonComponent from '../components/common/ButtonComponent'
import CardComponent from '../components/common/CardComponent'
import Introduction from '../layouts/about/Introduction'
import Stats from '../layouts/about/Stats'
import Mission from '../layouts/about/Mission'
import Vision from '../layouts/about/Vision'
import WorkWithUs from '../layouts/about/WorkWithUs'

import { Grid, Container, Box, Typography, Avatar, Paper, } from '@mui/material'

const About = () => {

    const features = [
        { label: 'Years in business', value: '7' },
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Satisfied Customer', value: '99%' }
    ]

    const teamMembers = [
        {
            name: 'John Doe',
            title: 'CEO',
            description: ' pariatur doloribus quibusdam qui molestias.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Jane Smith',
            title: 'CTO',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sara Johnson',
            title: 'CFO',
            description: 'Quaerat et ea dicta quos possimus vitae fuga magni nisi eveniet,',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sara Johnson',
            title: 'CFO',
            description: 'Illum quae voluptatibus provident praesentium doloribus.',
            photo: 'https://via.placeholder.com/150',
        },
    ];

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

            <Container>
                <Box my={4}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>

                        </Grid>

                        <Grid item xs={12}>
                            <Box
                                component={'div'}
                                display="flex"
                                my={8}
                                flexDirection="column"
                                textAlign='center'
                            >
                                <Typography
                                    variant="h4"
                                    fontSize='1rem'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                >
                                    Our Story
                                </Typography>

                                <Typography
                                    variant="h2"
                                    fontWeight='700'
                                    mt={4}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </Typography>

                                <Typography
                                    variant="h6"
                                    fontWeight='500'
                                    mt={4}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto autem obcaecati error aliquam quo, et fugiat dolorem pariatur repellendus soluta culpa labore ex! Facere magnam et natus ex corporis! Provident?
                                </Typography>

                                <Box mt={4}>
                                    <ButtonComponent
                                        label='Contact us'
                                        variant='outlined'
                                        size='large'
                                    />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box
                                component={'div'}
                                display="flex"
                                my={8}
                                flexDirection="column"
                                textAlign='center'
                            >
                                <Typography
                                    variant="h4"
                                    fontSize='1rem'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                >
                                    Meet the Team
                                </Typography>

                                <Box
                                    my={5}
                                >
                                    <Grid container spacing={4}  >
                                        {teamMembers.map(({ photo, name, title, description }, index) => (
                                            <Grid item xs={12} sm={6} md={3} key={index}>
                                                <Paper
                                                    elevation={3}
                                                    sx={{
                                                        height: '275px',
                                                        borderRadius: '12px',
                                                        backgroundColor: 'rgb(34, 43, 69)',
                                                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
                                                    }}>
                                                    <Box
                                                        p={2}
                                                    >
                                                        <Avatar
                                                            src={photo}
                                                            alt={name}
                                                            sx={{
                                                                width: 80,
                                                                height: 80,
                                                            }}
                                                        />
                                                        <Box
                                                            mt={4}
                                                            textAlign='start'
                                                            color='#F9FAFC'
                                                        >
                                                            <Box my={2}>
                                                                <Typography
                                                                    variant="body1" component="span">
                                                                    {name}
                                                                </Typography>
                                                                <Typography variant="body2" color="">
                                                                    {title}
                                                                </Typography>
                                                            </Box>

                                                            <Typography variant="body2" color="">
                                                                {description}
                                                            </Typography>
                                                        </Box>

                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        ))}

                                    </Grid>
                                </Box>

                            </Box>
                        </Grid>

                    </Grid >
                </Box>
            </Container >

        </>
    )
}

export default About