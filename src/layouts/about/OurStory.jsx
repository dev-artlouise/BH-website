import { Container, Box, Typography } from "@mui/material"

import ButtonComponent from "../../components/common/ButtonComponent"

const OurStory = () => {
    return (
        <Box
            sx={{
                paddingTop: '64px',
                paddingBottom: '64px',
            }}
        >
            <Container
                fixed
            >
                <Box
                    component={'div'}
                    display="flex"
                    my={8}
                    flexDirection="column"
                    textAlign='center'
                >
                    <Typography
                        variant="h4"
                        fontSize='1rem'
                        fontWeight='500'
                        textTransform='uppercase'
                    >
                        Our Story
                    </Typography>

                    <Typography
                        variant="h3"
                        fontWeight='700'
                        mt={4}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Typography>

                    <Typography
                        variant="h6"
                        fontWeight='500'
                        mt={4}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto autem obcaecati error aliquam quo, et fugiat dolorem pariatur repellendus soluta culpa labore ex! Facere magnam et natus ex corporis! Provident?
                    </Typography>


                    <Box mt={4}>
                        <ButtonComponent
                            label='Contact us'
                            variant='outlined'
                            size='large'
                        />
                    </Box>

                </Box>
            </Container>

        </Box>
    )
}

export default OurStory