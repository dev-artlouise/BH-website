import { Box, Container, Grid, Typography } from "@mui/material"
import CarouselComponent from "../../components/common/CarouselComponent"
import CardReview from "../../components/ui/CardReview"

const Reviews = () => {

    const process = [
        {
            id: 1,
            name: 'Jane Doe',
            description: 'Working with Materialist is fantastic! Simple, re-usable components all in one platform.',
            company: 'Company1',
            positon: 'CEO',
            avatar: ''
        },
        {
            id: 2,
            name: 'Mary Hoe',
            description: 'This is great bundle. I can contruct anything in just 10 minuts. Absolutelly love it! 10 out of 10.',
            avatar: '',
            company: 'Company2',
            positon: 'CEO',
        },
        {
            id: 3,
            name: 'John Doe',
            description: `Love the app for cash back, reward points and fraud protection – just like when you're swiping your card.`,
            avatar: '',
            company: 'Company3',
            positon: 'CEO',
        },
    ]

    return (
        <Box
            sx={{
                background: '#f3f6ff',
                position: 'relative'
            }}
        >
            <Container
                fixed
            >
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px'
                    }}
                >
                    <Box>
                        <Grid
                            container
                            spacing={2}
                        // justifyContent='center'
                        >
                            <Grid
                                xs={12}
                                sm={10}
                                md={6}
                                item
                            >
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
                                            variant='body1'
                                            component='p'
                                            textAlign='left'
                                            textTransform='uppercase'
                                            fontWeight='500'
                                            gutterBottom
                                        >
                                            Our Work
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            textAlign='left'
                                            fontWeight='700'
                                            gutterBottom
                                        >
                                            Don't take word for it
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            component='p'
                                            gutterBottom
                                            fontWeight='500'
                                            textAlign='left'
                                        >
                                            See what our amazing past clients have to say about the work done by us.
                                        </Typography>

                                    </Box>
                                </Box>
                            </Grid>

                            <Grid
                                xs={12}
                                sm={10}
                                md={6}
                                item
                            >
                                <CarouselComponent
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    sliderContent={
                                        process.map(({ id, position, name, company, description, avatar }) => (
                                            <Box
                                                key={id}
                                                sx={{
                                                    padding: '16px'
                                                }}
                                            >

                                                <CardReview
                                                    position={position}
                                                    name={name}
                                                    description={description}
                                                    avatar={avatar}
                                                    company={company}
                                                />

                                                {/* <PaperCardComponent
                                                    alignItems='left'
                                                    textAlign='left'
                                                    title={name}
                                                    description={description}
                                                    avatarHeight='48'
                                                    avatarWidth='48'
                                                /> */}
                                            </Box>
                                        ))
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container >

        </Box>
    )
}

export default Reviews
