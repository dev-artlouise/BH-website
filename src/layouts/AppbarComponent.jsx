import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material"

import SideDrawer from "../components/common/SideDrawer";

import { Link as RouterLink } from "react-router-dom";

const AppbarComponent = () => {

    const pages = [
        { label: "Home", path: "/" },
        { label: "About", path: "about-us" },
        { label: "Services", path: "services" },
        { label: "Fortpolio", path: "fortpolio" },
        { label: "Products", path: "products" },
    ];

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: (theme) => theme.palette.grey[800],
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to={'/'}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 500,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BroadHeader
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <SideDrawer
                            anchor={'left'}
                            items={pages}
                            width={'100%'}
                        />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: { xs: 'none', md: 'space-between' },
                            alignItems: 'center'
                        }}>

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'row',
                            }}
                        >
                            {pages.map(({ label, path }, index) => (
                                <Button
                                    key={index}
                                    LinkComponent={RouterLink}
                                    to={path}
                                    sx={{
                                        my: 2, color: 'white',
                                        display: 'block',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        <div>
                            <Button
                                LinkComponent={RouterLink}
                                to={'/contact-us'}
                                variant="contained"
                                size={'large'}
                                sx={{
                                    my: 2, color: 'white',
                                    display: 'block',
                                    textTransform: 'capitalize'
                                }}
                            >
                                Contact Us
                            </Button>
                        </div>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AppbarComponent