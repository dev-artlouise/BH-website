import { Box, Container, Typography } from "@mui/material"
import ButtonComponent from "../../components/common/ButtonComponent"

import ImageDiscuss from '../../assets/services.png'

const Services = () => {
    return (
        <Box
            sx={{
                paddingTop: '64px',
                paddingBottom: '64px'
            }}
        >
            <Container>
                <Box>
                    <Box
                        textAlign='center'
                        marginBottom={4}
                    >
                        <Typography
                            variant="body1"
                            gutterBottom
                            component="P"
                            fontSize='1rem'
                            fontWeight='500'
                            textTransform='uppercase'
                        >
                            Our Services
                        </Typography>


                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight='700'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>

                        <Typography
                            variant="h6"
                            component='p'
                        >
                            Ipsa labore saepe ducimus eum laudantium, aperiam libero rem minima! Dolor sunt explicabo dicta distinctio molestiae nemo officia aliquam, quibusdam expedita consequuntur!
                        </Typography>

                        <Box
                            marginTop={3}
                            display='flex'
                            justifyContent='center'
                        >
                            <ButtonComponent
                                label='Contact us'
                                variant='contained'
                                size='large'
                            />
                        </Box>
                    </Box>

                    {/* Services Image Section */}
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <img
                            src={ImageDiscuss}
                            alt='services-image'
                            width={520}
                            height={520}
                        />
                        {/* 
                                <Card
                                    sx={{
                                        textAlign: 'center'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={ImageDiscuss}
                                        alt='services-image'
                                        sx={{
                                            width: '50%',
                                            height: '50%',
                                        }}
                                    />
                                </Card> */}
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default Services