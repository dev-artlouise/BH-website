import { Container, Typography, Grid, Box, Avatar } from "@mui/material";

import { CheckCircle2 } from "lucide-react"
import discussImg from '../../assets/discuss.jpg'

const Workflow = () => {

    const checklistItems = [
        {
            title: "Workflow 1",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
            title: "Workflow 2",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
            title: "Workflow 3",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
            title: "Workflow 4",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
    ];

    return (
        <Container sx={{ mt: 10 }}>
            <Typography
                variant="h2"
                align="center"
                sx={{
                    fontSize: {
                        xs: '2.25rem', // text-4xl
                        sm: '3.75rem', // sm:text-6xl
                        lg: '4.5rem',  // lg:text-7xl
                    },

                    mt: 3,
                    fontWeight: 'bold',
                    // letterSpacing: '0.1em',
                }}
            >
                Your go-to partner for digital solutions
            </Typography>

            <Grid container justifyContent="center" spacing={4} sx={{ mt: 5 }}>
                <Grid item xs={12} lg={6} sx={{ pt: 3 }}>
                    <img src={discussImg} alt="Discuss" style={{ borderRadius: '1.5rem', width: '100%' }} />
                </Grid>
                <Grid item xs={12} lg={6} sx={{ pt: 3 }}>
                    {checklistItems.map(({ title, description }, index) => (
                        <Box key={index} display="flex" mb={3}>
                            <Avatar
                                sx={{
                                    bgcolor: 'neutral.900',
                                    color: 'green.400',
                                    height: '2.5rem',
                                    width: '2.5rem',
                                    p: 1,
                                }}
                            >
                                <CheckCircle2 />
                            </Avatar>
                            <Box ml={2}>
                                <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                                    {title}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Workflow