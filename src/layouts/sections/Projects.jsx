import { Box, Container, Grid, Typography } from "@mui/material";
import CardComponent from "../../components/common/CardComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import { useNavigate } from "react-router-dom";

import { useProjectsSection } from "../../hooks/useMainPage";
import { useEffect } from "react";

const Fortpolio = () => {

    const { isLoading, error, data } = useProjectsSection();

    const navigate = useNavigate();

    const handleOnNavigateClick = (id) => {
        navigate(`/projects/${id}`);
    };

    useEffect(() => (
        console.log(data)
    ), [])

    return (
        <Box>
            <Container>
                <Box my={8} textAlign="center">
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        textTransform="uppercase"
                        gutterBottom
                    >
                        Our Work
                    </Typography>

                    <Typography
                        variant="h3"
                        fontWeight={700}
                        gutterBottom
                    >
                        Our team strives to achieve excellence in every detail of our work.
                    </Typography>

                    <Typography variant="h6" component="p">
                        From your new website concept to its design, development, launch, and expansion!
                    </Typography>
                </Box>

                <Grid container spacing={5}>
                    {/* {data?.map(({ title, description, image, id }) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                            <CardComponent
                                image={image}
                                title={title}
                                cardContent={
                                    <>
                                        <Typography variant="h5" gutterBottom>
                                            {title}
                                        </Typography>

                                        <Typography variant="body2" gutterBottom>
                                            {description}
                                        </Typography>
                                    </>
                                }
                                cardActions={
                                    <Box display="flex" justifyContent="flex-end" width="100%">
                                        <ButtonComponent
                                            label="Learn More"
                                            size="small"
                                            variant="text"
                                            onClick={() => handleOnNavigateClick(id)}
                                        />
                                    </Box>
                                }
                            />
                        </Grid>
                    ))} */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Fortpolio;
