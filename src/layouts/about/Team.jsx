import { Box, Grid, Paper, Typography, Avatar, Container } from "@mui/material"

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

const Team = () => {
    return (
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

            <Container>

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
                                        // backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
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
                                        // color='#F9FAFC'
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
            </Container>


        </Box>
    )
}

export default Team