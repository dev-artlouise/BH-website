import { Typography, Box } from "@mui/material"
import ButtonComponent from "../../components/common/ButtonComponent"

const Introduction = () => {
    return (
        <Box
            sx={{
                marginBottom: '32px'
            }}
        >
            <Typography
                variant='body1'
                fontWeight='500'
                textTransform='uppercase'
                textAlign='center'
                gutterBottom
            >
                We Are Broadheaders
            </Typography>

            <Box
                sx={{
                    marginBottom: '16px'
                }}
            >
                <Typography
                    variant='h3'
                    fontWeight='700'
                    textAlign='center'
                    gutterBottom
                >
                    We bring your ideas to life and Build products people love
                </Typography>
            </Box>

            <Box
                sx={{
                    marginBottom: '32px'
                }}
            >
                <Typography
                    variant='h6'
                    fontWeight='500'
                    fontSize='1.2rem'
                    textAlign='center'
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto autem obcaecati error aliquam quo, et fugiat dolorem pariatur repellendus soluta culpa labore ex! Facere magnam et natus ex corporis! Provident?
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <ButtonComponent
                    label='Contact us'
                    variant='contained'
                    size='large'
                />
            </Box>
        </Box>
    )
}

export default Introduction
