import { Container, Box, Typography } from "@mui/material"

import ButtonComponent from "../../components/common/ButtonComponent"

const WorkWithUs = () => {
    return (
        <Container
            fixed
        >
            <Box
                sx={{
                    paddingTop: '64px'
                }}
            >
                <Box>
                    <Box
                        sx={{
                            paddingBottom: '32px'
                        }}
                    >
                        <Typography
                            variant='body1'
                            component='p'
                            textAlign='center'
                            textTransform='uppercase'
                            fontWeight='500'
                            gutterBottom
                        >
                            WHY WORK WITH US
                        </Typography>

                        <Typography
                            variant="h3"
                            textAlign='center'
                            fontWeight='700'
                            gutterBottom
                        >
                            We guide you through each step of the process.
                        </Typography>

                        <Typography
                            variant="h6"
                            component='p'
                            gutterBottom
                            fontWeight='500'
                            textAlign='center'
                        >
                            As specialists in design and development, we assist you through the entire process, from your initial website concept to design, development, launch, and scaling!
                        </Typography>

                        <Box
                            sx={{
                                marginTop: '24px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <ButtonComponent
                                label='Contact Us'
                                size='large'
                                variant='contained'
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default WorkWithUs
