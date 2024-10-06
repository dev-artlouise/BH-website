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
  const { isLoading, data: flowList } = useFlowListSection();
  const flowListData = flowList?.data || [];

  return (
    <Box sx={{ position: "relative" }}>
      <Container fixed>
        <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                    textAlign="left"
                    textTransform="uppercase"
                    fontWeight="500"
                    gutterBottom
                  >
                    Our Process
                  </Typography>
                  <Typography
                    variant="h3"
                    textAlign="left"
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
                {isLoading ? (
                  <LoadingFlowList />
                ) : (
                  <CarouselComponent
                    slidesToShow={1}
                    slidesToScroll={1}
                    sliderContent={flowListData.map(
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
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Process;
