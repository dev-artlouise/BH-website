import { Box, Container, Typography } from "@mui/material"

const WorkWithUs = () => {
    return (
        <Box
            sx={{
                background: '#f3f6ff',
                position: 'relative',
            }}
        >

            <Box
                sx={{
                    paddingTop: '64px',
                    paddingBottom: '64px'
                }}
            >
                <Container>
                    <Box
                        sx={{
                            maxWidth: { sm: '720px', lg: '1236px' }
                        }}
                    >
                        <Box
                            sx={{
                                marginBottom: '32px'
                            }}
                        >
                            <Typography
                                variant='body1'
                                fontWeight='500'
                                textTransform='uppercase'
                                gutterBottom
                            >
                                Why choose us
                            </Typography>

                            <Typography
                                variant='h3'
                                fontWeight='700'
                                gutterBottom
                            >
                                High-impact design & development services
                            </Typography>

                            <Typography
                                variant='body1'
                                fontWeight='500'
                                fontSize='1.2rem'
                                gutterBottom
                            >
                                We take you by hand on each step of the process
                            </Typography>
                        </Box>

                    </Box>
                </Container>

            </Box>

        </Box>
    )
}

export default WorkWithUs
