import React from 'react'

import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

import CarouselComponent from '../../components/common/CarouselComponent'

const Testimonials = ({ data }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#f3f6ff'
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
                    <Grid container justifyContent='center' spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Box>
                                    <Typography
                                        component='p'
                                        variant="body1"
                                        fontSize='1rem'
                                        fontWeight='500'
                                        textTransform='uppercase'
                                        gutterBottom
                                    >
                                        Our Works
                                    </Typography>

                                    <Typography
                                        variant="h3"
                                        fontWeight='700'
                                        gutterBottom
                                    >
                                        Don't take word for it
                                    </Typography>

                                    <Typography
                                        component='p'
                                        variant="h6"
                                        fontSize='1rem'
                                        fontWeight='500'
                                        textTransform='capitalize'
                                        gutterBottom
                                    >
                                        See what our amazing past clients have to say about the work done by us.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <CarouselComponent
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    sliderContent={
                                        data?.map(({ id, name, company, avatar, description, positon }) => (
                                            <Box
                                                key={id}
                                                component='div'
                                                sx={{
                                                    padding: '16px'
                                                }}
                                            >
                                                <Card
                                                    sx={{
                                                        height: '100%',
                                                        borderRadius: '12px',
                                                        padding: '16px'
                                                    }}
                                                >
                                                    <CardContent
                                                        sx={{
                                                            padding: '1rem'
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            gutterBottom
                                                            sx={{
                                                                fontSize: '1rem'
                                                            }}
                                                        >
                                                            {description}
                                                        </Typography>

                                                        <Box>
                                                            <ListItem
                                                                sx={{
                                                                    padding: 0,
                                                                }}
                                                                alignItems="flex-start">
                                                                <ListItemAvatar>
                                                                    <Avatar
                                                                        // component='Image'
                                                                        alt={name}
                                                                        src={avatar} />
                                                                </ListItemAvatar>
                                                                <ListItemText
                                                                    primary={name}
                                                                    secondary={
                                                                        <>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="text.primary"
                                                                            >
                                                                                {company}
                                                                                {/* {position} */}
                                                                            </Typography>
                                                                        </>
                                                                    }
                                                                />
                                                            </ListItem>
                                                        </Box>

                                                    </CardContent>

                                                </Card>
                                            </Box>

                                        ))
                                    }
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    )
}

export default Testimonials