import { Box, Typography } from '@mui/material'

const Vision = () => {
    return (
        <Box
            sx={{
                marginBottom: '32px',
            }}
        >
            <Typography
                variant='body1'
                fontWeight='700'
                textTransform='uppercase'
                textAlign='center'
                gutterBottom
            >
                Our Vision
            </Typography>

            {/* <Typography
                                variant='h4'
                                fontWeight='700'
                                gutterBottom
                                textAlign='center'
                            >
                                Our Vision
                            </Typography> */}

            <Typography
                variant='body1'
                fontWeight='500'
                fontSize='1.2rem'
                textAlign='center'
                gutterBottom
            >
                To be the leading provider of cutting-edge computer products, recognized for our commitment to quality, customer satisfaction, and technological innovation. We aspire to create a world where technology seamlessly enhances everyday life and business operations, driving progress and growth for all our customers.
            </Typography>
        </Box>
    )
}

export default Vision
