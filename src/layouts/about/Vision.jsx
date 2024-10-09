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

const Vision = ({ data, isLoading }) => (
  <Box sx={{ marginBottom: "32px" }}>
    <Typography
      variant="body1"
      fontWeight="700"
      textTransform="uppercase"
      textAlign="center"
      gutterBottom
    >
      Our Vision
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
        {/* {data} */}
        To be the leading provider of cutting-edge computer products, recognized
        for our commitment to quality, customer satisfaction, and technological
        innovation. We aspire to create a world where technology seamlessly
        enhances everyday life and business operations, driving progress and
        growth for all our customers.
      </Typography>
    )}
  </Box>
);

export default Vision;
