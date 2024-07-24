import { Box, Container, Grid, Typography } from '@mui/material'
import FormCardComponent from '../../components/common/FormCardComponent'
import ButtonComponent from '../../components/common/ButtonComponent'
import TextFieldComponent from '../../components/common/TextFieldComponent'

const Contact = () => {
    return (
        <Box>
            <Container
                fixed
            >
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px',
                    }}
                >
                    <Box>
                        <Grid
                            container
                            spacing={6}
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
                                            variant='h2'
                                            textAlign='left'
                                            fontWeight='700'
                                            gutterBottom
                                        >
                                            Let's get in touch!
                                        </Typography>

                                        <Box
                                            sx={{
                                                marginBottom: '32px',
                                            }}
                                        >
                                            <Typography
                                                component='p'
                                                variant='h6'
                                                fontWeight='500'
                                            >
                                                Let us know about your project and we will get back to you with our proposal and timeline.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>

                            <Grid
                                xs={12}
                                sm={10}
                                md={6}
                                item
                            >
                                <FormCardComponent
                                    cardContent={
                                        <>
                                            <form>

                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            marginBottom: '16px'
                                                        }}
                                                    >
                                                        <TextFieldComponent
                                                            label='Fullname'
                                                            fullWidth={true}
                                                            variant='outlined'
                                                        />
                                                    </Box>

                                                    <Box
                                                        sx={{
                                                            marginBottom: '16px'
                                                        }}
                                                    >
                                                        <TextFieldComponent
                                                            label='Email'
                                                            fullWidth={true}
                                                            variant='outlined'
                                                        />
                                                    </Box>

                                                    <Box
                                                        sx={{
                                                            marginBottom: '16px'
                                                        }}
                                                    >
                                                        <TextFieldComponent
                                                            label='Tell us about your project'
                                                            fullWidth={true}
                                                            variant='outlined'
                                                            multiline={true}
                                                            rows={4}
                                                        />
                                                    </Box>

                                                    <Box>
                                                        <ButtonComponent
                                                            fullWidth={true}
                                                            label='Submit'
                                                            size='large'
                                                            variant='contained'
                                                            height='54px'
                                                        />
                                                    </Box>

                                                    <Box
                                                        sx={{
                                                            marginTop: '32px',
                                                            marginBottom: '32px'
                                                        }}
                                                    >
                                                        <hr></hr>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            component='p'
                                                            variant='body2'
                                                        >
                                                            By sending a message you agree to our Privacy Policy, Data Policy and Cookie Policy.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </form>
                                        </>
                                    }
                                />

                            </Grid>

                        </Grid>

                    </Box>
                </Box>
            </Container>
        </Box>

    )
}

export default Contact