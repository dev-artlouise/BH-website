import { Container, Box, Grid, Typography, Paper, CardContent } from "@mui/material"

import CarouselComponent from "../../components/common/CarouselComponent"
import PaperCardComponent from "../../components/common/PaperCardComponent"
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent"

import { useFlowListSection } from "../../hooks/useMainPage"

const Process = () => {

    const { isLoading, error, data: flowList } = useFlowListSection();

    const flowListData = flowList?.data

    const LoadingFlowList = () => (
        <Box sx={{ padding: '16px' }}>
            <Grid container spacing={2}>
                {Array.from({ length: 1 }).map((_, index) => (
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

    return (
        <Box
            sx={{
                // background: '#f3f6ff',
                position: 'relative'
            }}
        >
            <Container
                fixed
            >
                <Box
                    sx={{
                        paddingTop: '64px',
                        paddingBottom: '64px'
                    }}
                >
                    <Box>
                        <Grid
                            container
                            spacing={2}
                        // justifyContent='center'
                        >
                            <Grid
                                xs={12}
                                sm={10}
                                md={6}
                                item
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant='body1'
                                            component='p'
                                            textAlign='left'
                                            textTransform='uppercase'
                                            fontWeight='500'
                                            gutterBottom
                                        >
                                            Our Process
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            textAlign='left'
                                            fontWeight='700'
                                            gutterBottom
                                        >
                                            An uncomplicated yet effective process
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            component='p'
                                            gutterBottom
                                            fontWeight='500'
                                            textAlign='left'
                                        >
                                            As specialists in design and development, we assist you through the entire process, from your initial website concept to design, development, launch, and scaling!
                                        </Typography>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        {/* <Grid
                                xs={12}
                                sm={10}
                                md={6}
                                item
                            > */}
                        <Box>

                            {isLoading ?
                                <LoadingFlowList />
                                :
                                <CarouselComponent
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    sliderContent={
                                        flowListData?.map(({ id, title, content, logo_url }) => (
                                            <Box
                                                key={id}
                                                sx={{
                                                    padding: '16px'
                                                }}
                                            >
                                                <PaperCardComponent
                                                    alignItems='left'
                                                    textAlign='left'
                                                    title={title}
                                                    icon={logo_url}
                                                    description={content}
                                                    avatarHeight='48'
                                                    avatarWidth='48'
                                                />
                                            </Box>
                                        ))
                                    }
                                />
                            }
                        </Box>
                        {/* </Grid> */}

                    </Box>
                </Box>

            </Container >

        </Box >
    )
}

export default Process
