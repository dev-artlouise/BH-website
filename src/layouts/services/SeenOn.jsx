import { Box, Container, Typography } from "@mui/material"

const SeenOn = ({ data }) => {
    return (
        <Box
            bgcolor='##ffffff0a'
            py={8}
        >
            <Container>
                <Box>
                    <Typography
                        variant="body1"
                        gutterBottom
                        component="P"
                        textAlign='center'
                        fontSize='1rem'
                        fontWeight='500'
                        textTransform='uppercase'
                    >
                        As seen on
                    </Typography>

                    <Box
                        display='flex'
                        flexWrap='wrap'
                        justifyContent='center'
                    >
                        {
                            data.map(({ img, label }, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        maxWidth: '90px',
                                        marginTop: '16px',
                                        marginRight: '32px'
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={label}
                                        style=
                                        {{
                                            width: '100%',
                                            height: '100%',
                                            filter: 'brightness(0) invert(0.7)'
                                        }} />
                                </Box>
                            ))
                        }

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SeenOn
