import { Container, Box, Typography, Grid } from "@mui/material"

import ButtonComponent from "../../components/common/ButtonComponent"

const WorkWithUs = () => {

    const services = [
        {
            id: 1,
            description: ' Premium Products: We offer a wide range of high - quality computer products from trusted brands, ensuring durability and reliability.'
        },

        {
            id: 2,
            description: ' Extended Warranties: Enjoy peace of mind with our extended warranties and comprehensive service plans.'
        },

        {
            id: 3,
            description: 'Best Prices: We offer competitive pricing on all our computer products without compromising on quality.'
        },

        {
            id: 4,
            description: 'After - Sales Support: Our dedicated after - sales support team is available to assist you with any issues or questions you may have.'
        },

        {
            id: 5,
            description: 'Latest Technology: Stay ahead with the latest and most innovative technology available on the market.'
        },

        {
            id: 6,
            description: 'Custom Solutions: We provide custom - built computers and configurations to suit your specific needs.'
        },

        {
            id: 7,
            description: 'Comprehensive Support: From setup to troubleshooting, we offer comprehensive support to ensure you get the most out of your products.'
        },
    ]

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
