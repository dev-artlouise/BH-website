import { Box, Typography } from "@mui/material";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import Reveal from "../../components/animations/Reveal";

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
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "50vh",
    }}
  >
    {/* {isLoading ? (
      <LoadingComponent />
    ) : (
     
    )} */}
    <Box>
      <Reveal>
        <Typography
          variant="h6"
          fontWeight="700"
          textTransform="uppercase"
          textAlign={{ xs: "center", md: "start" }}
          gutterBottom
        >
          Our Mission
        </Typography>
      </Reveal>

      <Reveal>
        <Typography
          variant="h4"
          fontWeight="500"
          fontSize={{ xs: "20px", md: "38px" }}
          gutterBottom
          textAlign={{ xs: "center", md: "start" }}
        >
          To supply high-quality computer products and exceptional customer
          service, empowering individuals and businesses with the latest
          technology to achieve their goals. We are committed to innovation,
          reliability, and fostering long-term relationships with our customers
          through trust and excellence.
          {/* {data} */}
        </Typography>
      </Reveal>
    </Box>
  </Box>
);

export default Mission;
