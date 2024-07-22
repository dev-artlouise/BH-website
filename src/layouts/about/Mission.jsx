import { Box, Typography } from "@mui/material"

const Mission = () => {
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
                Our Mission
            </Typography>
            {/* 
            <Typography
            variant='h4'
            fontWeight='700'
            gutterBottom
            textAlign='center'
            >
            Our Mission
            </Typography> */}

            <Typography
                variant='body1'
                fontWeight='500'
                fontSize='1.2rem'
                textAlign='center'
                gutterBottom
            >
                To supply high-quality computer products and exceptional customer service, empowering individuals and businesses with the latest technology to achieve their goals. We are committed to innovation, reliability, and fostering long-term relationships with our customers through trust and excellence.
            </Typography>
        </Box>
    )
}

export default Mission
