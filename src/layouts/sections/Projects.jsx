import { Box, Container, Grid, Typography, Paper, } from "@mui/material";
import CardComponent from "../../components/common/CardComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

import { useNavigate } from "react-router-dom";

import { useProjectsSection } from "../../hooks/useMainPage";
import { useEffect } from "react";

const Fortpolio = () => {

    const { isLoading: isProjectsLoading, error: projectsError, data: projects } = useProjectsSection();

    const projectsListData = projects?.data

    const navigate = useNavigate();

    const handleOnNavigateClick = (id) => {
        navigate(`/projects/${id}`);
    };


    useEffect(() => (
        console.log(projectsListData)
    ), [])


    const LoadingServiceList = () => (
        <Box sx={{ padding: '16px' }}>
            <Grid container spacing={2}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper sx={{ borderRadius: '20px', paddingBottom: '24px' }}>
                            <CardContent sx={{ padding: '48px', paddingBottom: '48px', display: 'flex', flexDirection: 'column' }}>
                                <SkeletonLoaderComponent variant="rounded" height={150} />
                                <SkeletonLoaderComponent variant="text" width="80%" height={30} marginTop={1} />
                                <SkeletonLoaderComponent variant="text" width="60%" height={20} marginTop={1} />
                            </CardContent>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );


    const CardContent = ({ title, content }) => (
        <>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>

            <Typography variant="body2" gutterBottom>
                {content}
            </Typography>
        </>
    )

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

                <Grid
                    sx={{
                        my: '2rem'
                    }}
                    container
                    spacing={5}
                >

                    {isProjectsLoading ?
                        <>
                            <h1>
                                loading..
                            </h1>
                            <LoadingServiceList />
                        </>

                        :
                        <>
                            {projectsListData?.map(({ content, title, image_url, id }) => (
                                // <Grid item xs={12} sm={6} md={4} key={id}>
                                //     <CardComponent
                                //         image={image_url}
                                //         title={title}
                                //         cardContent={
                                //             <CardContent
                                //                 title={title}
                                //                 content={content}
                                //             />
                                //         }
                                //         cardActions={
                                //             <Box display="flex" justifyContent="flex-end" width="100%">
                                //                 <ButtonComponent
                                //                     label="Learn More"
                                //                     size="small"
                                //                     variant="text"
                                //                     onClick={() => handleOnNavigateClick(id)}
                                //                 />
                                //             </Box>
                                //         }
                                //     />
                                // </Grid>
                                <h1>to be displayed data</h1>
                            ))}
                        </>
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Fortpolio;
