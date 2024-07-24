import { Box, Container, Grid, Typography } from "@mui/material"

import CardComponent from "../../components/common/CardComponent"
import ButtonComponent from "../../components/common/ButtonComponent"

import { useNavigate } from "react-router-dom"

const Fortpolio = ({ data }) => {

    const navigate = useNavigate()

    const handleOnNavigateClick = (id) => {
        navigate(`/projects/${id}`)
    }

    return (
        <div>
            <Box>
                <Container>

                    <Box my={8}>
                        <Box my={8}>
                            <Box
                                textAlign='center'
                                marginBottom={4}
                                my={8}
                            >
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    component="p"
                                    textAlign='center'
                                    fontSize='1rem'
                                    fontWeight='500'
                                    textTransform='uppercase'
                                >
                                    Our Work
                                </Typography>

                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    fontWeight='700'
                                >
                                    Our team strives to achieve excellence in every detail of our work.
                                </Typography>

                                <Typography
                                    variant="h6"
                                    component='p'
                                >
                                    From your new website concept to its design, development, launch, and expansion!
                                </Typography>

                            </Box>

                            <Grid container spacing={5}>
                                {data.map(({ title, description, image, id }, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Box
                                            component='a'
                                        >
                                            <CardComponent

                                                image={image}
                                                title="Card Title"
                                                cardContent={
                                                    <>
                                                        <Typography
                                                            variant="h5"
                                                            component="div"
                                                            gutterBottom
                                                        >
                                                            {title}
                                                        </Typography>

                                                        <Typography
                                                            variant="body2"
                                                            gutterBottom
                                                        >
                                                            {description}
                                                        </Typography>
                                                    </>
                                                }
                                                cardActions={
                                                    <>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'flex-end',
                                                                width: '100%',
                                                            }}
                                                        >
                                                            <ButtonComponent
                                                                label="Learn More"
                                                                size="small"
                                                                variant="text"
                                                                onClick={() => handleOnNavigateClick(id)}
                                                            />
                                                        </Box>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>

            </Box>
        </div>
    )
}

export default Fortpolio