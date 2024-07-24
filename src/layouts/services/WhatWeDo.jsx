import { Box, Typography, Container } from "@mui/material"

import ButtonComponent from "../../components/common/ButtonComponent"

const WhatWeDo = () => {
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
                            textAlign='center'
                            fontSize='1rem'
                            fontWeight='500'
                            textTransform='uppercase'
                        >
                            What we do
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

                </Box>
            </Container>
        </Box>
    )
}

export default WhatWeDo
