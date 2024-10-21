import { Box, Grid, Typography, Container } from "@mui/material";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import { useStats } from "../../hooks/useAboutPage";
import Reveal from "../../components/animations/Reveal";

const LoadingStats = () => (
  <Box
    sx={{
      paddingTop: "64px",
      paddingBottom: "64px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SkeletonLoaderComponent
      variant="text"
      width="80%"
      height={30}
      marginTop={1}
    />
    <SkeletonLoaderComponent
      variant="text"
      width="80%"
      height={20}
      marginTop={1}
    />
  </Box>
);

const StatItem = ({ isLoading, value, label }) => (
  <Grid item xs={12} sm={6} md={4}>
    {/* {isLoading ? (
      <LoadingStats />
    ) : (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        my={5}
      >
        <Typography variant="h3" fontWeight="500" mb={2}>
          {value}
        </Typography>
        <Typography variant="body1">{label}</Typography>
      </Box>
    )} */}
    <Reveal>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        my={5}
      >
        <Typography variant="h2" fontWeight="700" mb={2}>
          {value}
        </Typography>
        <Typography variant="body1">{label}</Typography>
      </Box>
    </Reveal>
  </Grid>
);

const Stats = () => {
  const containerStyles = {
    marginTop: "-28px",
    background: "#f3f6ff",
    position: "relative",
    borderRadius: "1.5rem 1.5rem 0 0", // Apply border radius only on the left and right sides
    boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
    minHeight: "120vh",
    display: "flex",
    flexDirection: " column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "64px",
    paddingBottom: "64px",
  };

  const { isLoading, data } = useStats();
  const { year_in_business, satisfied_customer, project_delivered } =
    data?.data || {};

  return (
    <Box sx={{ ...containerStyles }}>
      <Container>
        <Reveal>
          <Typography
            fontSize={{ xs: "38px", sm: "42px", md: "50px", lg: "60px" }}
            textAlign={{ xs: "center" }}
            variant="h3"
            fontWeight="700"
            gutterBottom
          >
            {/* {title} */}
            From Ideas to Loved Products
          </Typography>
        </Reveal>

        <Reveal>
          <Typography variant="h6" component="p" textAlign={{ xs: "center" }}>
            {/* {content} */}
            We bring your ideas to life and Build products people love
          </Typography>
        </Reveal>

        <Grid container spacing={2}>
          <StatItem
            isLoading={isLoading}
            value={"7"}
            // value={year_in_business}
            label="Years in Business"
          />

          <StatItem
            isLoading={isLoading}
            value={"150"}
            // value={project_delivered}
            label="Projects Delivered"
          />

          <StatItem
            isLoading={isLoading}
            value={"99"}
            // value={satisfied_customer}
            label="Satisfied Customers"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
