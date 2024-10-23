import { Box, Typography, Container } from "@mui/material";
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
      marginTop: "-28px",
      background: "#fff",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: { xs: "column", md: "row" }, // Responsive flex direction
      borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
      boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
      paddingTop: "64px",
      paddingBottom: "64px",
      minHeight: "100vh",
    }}
  >
    <Container>
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
    </Container>
  </Box>
);

export default Vision;
