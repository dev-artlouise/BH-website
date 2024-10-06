import {
  Box,
  Container,
  Typography,
  Skeleton,
  Grid,
  Paper,
  CardContent,
} from "@mui/material";
import CarouselComponent from "../../components/common/CarouselComponent";
import PaperCardComponent from "../../components/common/PaperCardComponent";
import {
  useServiceListSection,
  useServiceSection,
} from "../../hooks/useMainPage";
// import { useLoadingAndErrorHandler } from "../../hooks/useHelperFunctions";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

const Services = () => {
  const {
    isLoading: isServicesLoading,
    error: isServicesError,
    data: services,
  } = useServiceListSection();
  const {
    isLoading: isServiceLoading,
    error: isServiceError,
    data: service,
  } = useServiceSection();

  const { title, content } = service?.data || {};
  const servicesListData = services?.data;

  const LoadingServiceList = () => (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ borderRadius: "20px", paddingBottom: "24px" }}>
              <CardContent
                sx={{
                  padding: "48px",
                  paddingBottom: "48px",
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const LoadingServiceContent = () => (
    <Box>
      <SkeletonLoaderComponent
        variant="text"
        width="80%"
        height={100}
        marginTop={1}
      />

      <SkeletonLoaderComponent
        variant="text"
        width="40%"
        height={50}
        marginTop={1}
      />
    </Box>
  );

  const ServiceContent = ({ title, content }) => (
    <Box>
      <Typography
        variant="body1"
        fontWeight="500"
        textTransform="uppercase"
        gutterBottom
      >
        Services
      </Typography>
      <Typography variant="h3" fontWeight="700" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        fontSize="1.2rem"
        gutterBottom
      >
        {content}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ background: "#f3f6ff", position: "relative" }}>
      <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <Container>
          <Box sx={{ maxWidth: { sm: "720px", lg: "1236px" } }}>
            {/* loading state for service content */}
            {isServiceLoading ? (
              <LoadingServiceContent />
            ) : (
              <ServiceContent title={title} content={content} />
            )}
          </Box>
        </Container>

        <Box>
          {/* loading state for servive list */}
          {isServicesLoading ? (
            // loading state component for service list
            <LoadingServiceList />
          ) : (
            <CarouselComponent
              slidesToShow={4}
              slidesToScroll={4}
              sliderContent={servicesListData?.map(({ id, title, content }) => (
                <Box key={id} sx={{ padding: "16px", flex: "1 0 auto" }}>
                  <PaperCardComponent
                    alignItems="center"
                    textAlign="center"
                    title={title}
                    description={content}
                  />
                </Box>
              ))}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
