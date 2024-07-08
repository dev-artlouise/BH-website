import { Container, Box, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about-us" },
        { label: "Services", path: "/services" },
        { label: "Fortpolio", path: "/fortpolio" },
        { label: "Contact", path: "/contact-us" },
    ];

    const socials = [
        { label: "Facebook", path: "#" },
        { label: "X", path: "#" },
        { label: "Intagram", path: "#" },
        { label: "Tiktok", path: "#" },
        { label: "Youtube", path: "#" },
    ];

    return (
        <footer>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 5,
                    backgroundColor: (theme) => theme.palette.grey[800],
                    color: 'white',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container justifyContent='center' spacing={4} sx={{ mt: 1 }}>

                        <Grid item xs={12} lg={4}>
                            Logo
                        </Grid>

                        <Grid item xs={6} lg={4}>
                            {navItems.map(({ label, path }, index) => (
                                <Box
                                    key={index}
                                >
                                    <Link
                                        component={RouterLink}
                                        to={path}
                                        color="inherit"
                                        underline="none"
                                        sx={{ display: 'block', p: 1 }}
                                    >
                                        {label}
                                    </Link>
                                </Box>
                            ))}
                        </Grid>

                        <Grid item xs={6} lg={4}>
                            {socials.map(({ label, path }, index) => (
                                <Box
                                    key={index}
                                >
                                    <Link
                                        component={RouterLink}
                                        to={path}
                                        color="inherit"
                                        underline="none"
                                        sx={{ display: 'block', p: 1 }}
                                    >
                                        {label}
                                    </Link>
                                </Box>
                            ))}
                        </Grid>


                        <Grid item xs={12}>
                            <Typography variant="body1" align="center">
                                © {new Date().getFullYear()} BroadHeader Solutions. All rights reserved.
                            </Typography>
                            <Typography variant="body2" align="center">
                                <Link href="/terms" color="inherit" underline="none">
                                    Terms of Service
                                </Link>{' '}
                                |{' '}
                                <Link href="/privacy" color="inherit" underline="none">
                                    Privacy Policy
                                </Link>{' '}
                                |{' '}
                                <Link href="/contact" color="inherit" underline="none">
                                    Contact Us
                                </Link>
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>

            </Box>
        </footer >

    );
};

export default Footer;
