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

const Vision = ({ data, isLoading }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "50vh",
    }}
  >
    <Box>
      <Reveal>
        <Typography
          variant="h6"
          fontWeight="700"
          textTransform="uppercase"
          textAlign={{ xs: "center", md: "start" }}
          gutterBottom
        >
          Our Vision
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
          To be the leading provider of cutting-edge computer products,
          recognized for our commitment to quality, customer satisfaction, and
          technological innovation. We aspire to create a world where technology
          seamlessly enhances everyday life and business operations, driving
          progress and growth for all our customers.
          {/* {data} */}
        </Typography>
      </Reveal>
    </Box>
  </Box>
);

export default Vision;
