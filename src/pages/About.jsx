import ButtonComponent from '../components/common/ButtonComponent'
import CardComponent from '../components/common/CardComponent'

import { Grid, Container, Box, Typography, Avatar, Paper } from '@mui/material'

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
            <Container>
                <Box my={4}>
                    <Grid container spacing={2}>

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
                                    We Are Broadheaders
                                </Typography>

                                <Typography
                                    variant="h2"
                                    fontWeight='700'
                                    mt={4}
                                >
                                    We bring your ideas to life and Build products people love
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
                                component='div'
                            >
                                <Grid container spacing={2} >
                                    {features.map(({ label, value }, index) => (
                                        <Grid item xs={12} lg={4} key={index}>
                                            <Box display="flex"
                                                flexDirection='column'
                                                justifyContent="center"
                                                alignItems="center"
                                                height="100%"
                                                my={5}
                                            >
                                                <Typography
                                                    variant="h3"
                                                    fontWeight='500'
                                                    mb={2}
                                                >
                                                    {value}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                >
                                                    {label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}

                                    <Grid item xs={12}>
                                        <Box
                                            my={5}
                                        >
                                            <hr />
                                        </Box>
                                    </Grid>
                                </Grid>
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