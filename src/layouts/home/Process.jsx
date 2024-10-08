import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  CardContent,
} from "@mui/material";
import CarouselComponent from "../../components/common/CarouselComponent";
import PaperCardComponent from "../../components/common/PaperCardComponent";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import { useFlowListSection } from "../../hooks/useMainPage";

import { process } from "../../data";

// Loading Component for Flow List
const LoadingFlowList = () => (
  <Paper sx={{ borderRadius: "20px", paddingBottom: "24px" }}>
    <CardContent
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SkeletonLoaderComponent variant="rounded" height={150} />
      <SkeletonLoaderComponent
        variant="text"
        width="80%"
        height={30}
        marginTop={1}
      />
      <SkeletonLoaderComponent
        variant="text"
        width="60%"
        height={20}
        marginTop={1}
      />
    </CardContent>
  </Paper>
);

// Main Process Component
const Process = () => {
  // const { isLoading, data: flowList } = useFlowListSection();
  // const flowListData = flowList?.data || [];

  return (
    <Box sx={{
      // marginTop: '-28px',
      position: "relative",
      borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
      boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
      zIndex: '20',
      // opacity: 1
    }}>
      <Container fixed>
        <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "70vh" }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                    // textAlign="left"
                    textTransform="uppercase"
                    fontWeight="500"
                    gutterBottom
                  >
                    Our Process
                  </Typography>
                  <Typography
                    variant="h3"
                    // textAlign="left"
                    fontWeight="700"
                    gutterBottom
                  >
                    An uncomplicated yet effective process
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    fontWeight="500"
                    textAlign="left"
                  >
                    As specialists in design and development, we assist you
                    through the entire process, from your initial website
                    concept to design, development, launch, and scaling!
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                {/* {isLoading ? (
                  <LoadingFlowList />
                ) : (
                  <CarouselComponent
                    slidesToShow={1}
                    slidesToScroll={1}
                    sliderContent={process.map(
                      ({ id, title, content, logo_url }) => (
                        <Box key={id} sx={{ padding: "16px" }}>
                          <PaperCardComponent
                            alignItems="left"
                            textAlign="left"
                            title={title}
                            // icon={logo_url}
                            description={content}
                            avatarHeight="48"
                            avatarWidth="48"
                          />
                        </Box>
                      )
                    )}
                  />
                )} */}
                <CarouselComponent
                  slidesToShow={1}
                  slidesToScroll={1}
                  sliderContent={process.map(
                    ({ id, title, content, logo_url }) => (
                      <Box key={id} sx={{ padding: "16px" }}>
                        <PaperCardComponent
                          alignItems="left"
                          textAlign="left"
                          title={title}
                          // icon={logo_url}
                          description={content}
                          avatarHeight="48"
                          avatarWidth="48"
                        />
                      </Box>
                    )
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Process;
