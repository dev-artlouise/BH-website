// import './hero.scss'

import { Typography, Box, Grid, Container, useTheme, useMediaQuery } from '@mui/material'
import ButtonComponent from './common/ButtonComponent'
import { animate, motion } from 'framer-motion'
import HeroImg from '../assets/hero-img.png'

const Hero = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            }
        }
    }

    return (
        <Box
            sx={{
                background: 'linear-gradient(rgb(243, 246, 255) 0%, rgb(255, 255, 255) 100%);',
                position: 'relative'
            }}
        >
            <Container>
                <Box
                    sx={{
                        maxWidth: '1236px',
                        paddingTop: '64px',
                        paddingBottom: '64px',
                        width: '100%',
                        margin: '0px auto',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        position: 'relative',
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}
                        >
                            <motion.div
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                            >
                                <Box
                                    sx={{
                                        marginBottom: '16px'
                                    }}
                                >
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={textVariants}
                                    >
                                        <Typography
                                            variant="h2"
                                            component="h2"
                                            sx={{
                                                letterSpacing: '',
                                                fontWeight: '700',
                                                textAlign: { xs: 'center', md: 'Left', lg: 'left' },
                                                fontSize: { xs: '38px', sm: '42px', md: '50px', lg: "60px" },
                                            }}
                                        >
                                            Transforming ideas into <span>reality</span>
                                        </Typography>
                                    </motion.div>
                                </Box>

                                <Box
                                    sx={{
                                        marginBottom: '24px'
                                    }}
                                >
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={textVariants}
                                    >
                                        <Typography
                                            variant="body1"
                                            component='p'
                                            color='#565973'
                                            lineHeight='1.6'
                                            sx={{
                                                fontWeight: '500',
                                                textAlign: { xs: 'center', md: 'Left', lg: 'left' },
                                                fontSize: { xs: '18px', lg: "20px" },
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab amet,
                                            voluptatibus iste nobis corporis laudantium
                                        </Typography>
                                    </motion.div>
                                </Box>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                        }}
                                    >
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={textVariants}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <ButtonComponent
                                                variant={'contained'}
                                                size={'large'}
                                                label={'Get in touch'}
                                                fullWidth={smallScreen}
                                            />
                                        </motion.div>
                                    </Box>
                                </motion.div>

                            </motion.div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            sx={{
                                paddingLeft: '32px',
                                paddingTop: '32px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    height: '100%',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img src={HeroImg} alt="" />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container >

        </Box >
    )
}

export default Hero