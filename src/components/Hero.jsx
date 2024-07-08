// import './hero.scss'

import { Typography, Box, Button } from '@mui/material'

import ButtonComponent from './common/ButtonComponent'

import { animate, motion } from 'framer-motion'

const Hero = () => {

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
        <div className=''>

            <motion.div
                className="flex flex-col items-center mt-6 lg:mt"
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        align="center"
                        sx={{
                            fontSize: {
                                xs: '2.25rem', // text-4xl
                                sm: '3.75rem', // sm:text-6xl
                                lg: '4.5rem',  // lg:text-7xl
                            },
                            letterSpacing: '',
                            fontWeight: 'bold',
                        }}
                    >
                        Transforming ideas into <span>reality</span>
                    </Typography>
                </motion.div>

                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.125rem', // text-lg
                                color: 'text.secondary',
                                maxWidth: '48rem', // max-w-4xl
                                margin: '0 auto', // Centering
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab amet,
                            voluptatibus iste nobis corporis laudantium, labore odio repudiandae quas illo suscipit recusandae consequatur deserunt delectus eaque,
                            fugiat ea quibusdam nesciunt?
                        </Typography>
                    </motion.div>
                </Box>

                <motion.div
                    className='flex justify-center my-10'
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className='flex justify-center my-10'
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                    >

                        <ButtonComponent
                            variant={'contained'}
                            size={'large'}
                            label={'Get in touch'}
                        />

                    </motion.div>
                </motion.div>

            </motion.div>

            {/* <div className="wrapper">

            </div> */}

            {/* <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Broadheader
            </motion.div> */}

            <div className='imageContainer'>
                <img src="" alt="" />
            </div>


        </div >
    )
}

export default Hero