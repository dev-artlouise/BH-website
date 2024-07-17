import { Box, Container, Grid, Typography } from '@mui/material'
import FormCardComponent from '../components/common/FormCardComponent'
import ButtonComponent from '../components/common/ButtonComponent'
import TextFieldComponent from '../components/common/TextFieldComponent'

import EmailField from '../components/ui/EmailField'
import TextField from '../components/common/TextField'
import TextAreaField from '../components/common/TextAreaField'
import SubmitBtn from '../components/ui/SubmitBtn'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import ContactImg from '../assets/get-in-touch.jpg'

const Contact = () => {

    const contacts = [
        { label: 'Email', value: 'broadheader2024@gmail.com', icon: < Mail /> },
        { label: 'Phone', value: '+63 (999) 9999 999', icon: < Phone /> },
        { label: 'Address', value: 'Office Address', icon: < MapPin /> }
    ]

    const socials = [
        { label: 'Facebook', icon: <Facebook /> },
        { label: 'Instagram', icon: <Instagram /> },
    ]

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
                {/* <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 m-4'>

                    <div className=''>
                        <h2 className='font-display text-4xl font-semibold leading-tight text-center md:text-start sm:text-5xl sm:leading-tight lg:text-[40px] lg:leading-tight xl:text-5xl xl:leading-tight'>
                            Let's get in touch!
                        </h2>

                        <h4 class="font-display text-2xl font-semibold mt-10 text-center md:text-start">
                            You can get in touch with us through the following.
                        </h4>

                        <div className='mt-16 grid gap-4'>
                            {contacts.map(({ label, value, icon }, index) => (
                                <div className='flex gap-[18px]' key={index}>
                                    <div className='sm:pt-0.5'>
                                        <div className='flex gap-2'>
                                            {icon}
                                            <p className='font-display text-lg'>{label}</p>
                                        </div>
                                        <a href='' className='mt-2 inline-block '>{value}</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-10'>
                            <h4 className='font-display text-2xl font-semibold mt-10 text-center md:text-start'>Follow us on</h4>
                            <div className='my-2 flex gap-4'>
                                {socials.map(({ icon, label }, index) => (
                                    <div key={index}>
                                        <a href="">
                                            {icon}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div>


                    </div>


                </div > */}
            </Container>
        </Box>

    )
}

export default Contact