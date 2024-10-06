import { Box, Container, Grid, Typography } from "@mui/material";
import CardComponent from "../../components/common/CardComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

import { useNavigate } from "react-router-dom";
import { useProjectsList, useProjectContent } from "../../hooks/useMainPage";

const Fortpolio = () => {
    const { isLoading: isProjectsLoading, data: projects } = useProjectsList();
    const { isLoading: isProjectLoading, data: projectContent } = useProjectContent();

    const { title, content } = projectContent?.data || {};
    const projectsListData = projects?.data || [];

    const navigate = useNavigate();

    const handleOnNavigateClick = (id) => {
        navigate(`/projects/${id}`);
    };

    // Separate Skeleton Loader for the service list
    const LoadingServiceList = () => (
        <Box sx={{ padding: '16px' }}>
            <Grid container spacing={2}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <SkeletonLoaderComponent variant="rounded" height={150} />
                        <SkeletonLoaderComponent variant="text" width="80%" height={30} sx={{ mt: 1 }} />
                        <SkeletonLoaderComponent variant="text" width="60%" height={20} sx={{ mt: 1 }} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    // Component to render the content inside each card
    const CardContent = ({ title, content }) => (
        <>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {content}
            </Typography>
        </>
    );

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
                        {title}
                        {/* {title ? title : <>Our team strives to achieve excellence in every detail of our work.</>} */}
                    </Typography>

                    <Typography variant="h6" component="p">
                        {/* {content ? content : <>  From your new website concept to its design, development, launch, and expansion!</>} */}

                    </Typography>
                </Box>

                {isProjectsLoading ? (
                    <LoadingServiceList />
                ) : (
                    <Grid container spacing={5} sx={{ my: '2rem' }}>
                        {projectsListData.map(({ id, title, content, image_url }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <CardComponent
                                    image={image_url}
                                    title={title}
                                    cardContent={<CardContent title={title} content={content} />}
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
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default Fortpolio;
