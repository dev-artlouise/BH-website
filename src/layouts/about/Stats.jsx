import { Box, Grid, Typography } from "@mui/material";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import { useStats } from "../../hooks/useAboutPage";

const LoadingStats = () => (
  <Box
    sx={{
      padding: "16px",
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
  <Grid item xs={12} sm={4}>
    {isLoading ? (
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
    )}
  </Grid>
);

const Stats = () => {
  const { isLoading, data } = useStats();
  const { year_in_business, satisfied_customer, project_delivered } =
    data?.data || {};

  return (
    <Box>
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
    </Box>
  );
};

export default Stats;
