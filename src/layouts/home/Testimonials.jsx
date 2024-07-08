import { Container, Typography, Grid, Card, CardContent, Box, Avatar, } from '@mui/material';

import { UserRound } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            user: "John Doe",
            company: "Stellar Solutions",
            image: '',
            text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
        },
        {
            user: "Jane Smith",
            company: "Blue Horizon Technologies",
            image: '',
            text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
        },
        {
            user: "David Johnson",
            company: "Quantum Innovations",
            image: '',
            text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
        },
        {
            user: "Ronee Brown",
            company: "Fusion Dynamics",
            image: '',
            text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
        },
        {
            user: "Michael Wilson",
            company: "Visionary Creations",
            image: '',
            text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
        },
        {
            user: "Emily Davis",
            company: "Synergy Systems",
            image: '',
            text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
        },
    ];

    return (
        <Container sx={{ mt: 10, letterSpacing: '0.1em' }}>
            <Typography
                variant="h2"
                align="center"
                sx={{
                    fontSize: {
                        xs: '2.25rem', // text-4xl
                        sm: '3.75rem', // sm:text-6xl
                        lg: '4.5rem',  // lg:text-7xl
                    },
                    fontWeight: 'bold',
                    my: {
                        xs: 5,
                        lg: 10,
                    },
                }}
            >
                What people are saying
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
                {testimonials.map(({ user, company, text, image }, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <Card variant="outlined" sx={{ p: 2, borderColor: 'neutral.800' }}>
                            <CardContent>
                                <Typography variant="body1" sx={{ mb: 4 }}>
                                    {text}
                                </Typography>
                                <Box display="flex" alignItems="center" mt={2}>
                                    {image ? (
                                        <Avatar src={image} alt={user} sx={{ width: 48, height: 48, mr: 2, border: 1, borderColor: 'neutral.300' }} />
                                    ) : (
                                        <Avatar sx={{ width: 48, height: 48, mr: 2, border: 1, borderColor: 'neutral.300', bgcolor: 'transparent' }}>
                                            <UserRound sx={{ fontSize: 40 }} />
                                        </Avatar>
                                    )}
                                    <Box>
                                        <Typography variant="h6">{user}</Typography>
                                        <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                                            {company}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Testimonials