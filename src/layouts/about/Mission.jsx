import { Box, Typography } from "@mui/material";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

const LoadingComponent = () => (
  <Box
    sx={{
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SkeletonLoaderComponent variant="text" width="100%" height={100} />
  </Box>
);

const Mission = ({ data, isLoading }) => (
  <Box sx={{ marginBottom: "32px" }}>
    <Typography
      variant="body1"
      fontWeight="700"
      textTransform="uppercase"
      textAlign="center"
      gutterBottom
    >
      Our Mission
    </Typography>

    {isLoading ? (
      <LoadingComponent />
    ) : (
      <Typography
        variant="body1"
        fontWeight="500"
        fontSize="1.2rem"
        textAlign="center"
        gutterBottom
      >
        To supply high-quality computer products and exceptional customer
        service, empowering individuals and businesses with the latest
        technology to achieve their goals. We are committed to innovation,
        reliability, and fostering long-term relationships with our customers
        through trust and excellence.
        {/* {data} */}
      </Typography>
    )}
  </Box>
);

export default Mission;
