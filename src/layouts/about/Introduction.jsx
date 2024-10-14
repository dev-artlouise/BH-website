import { Typography, Box } from "@mui/material";

import ButtonComponent from "../../components/common/ButtonComponent";
import { useAboutUs } from "../../hooks/useAboutPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import Reveal from "../../components/animations/Reveal";

const LoadingAboutUs = () => (
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
      width="100%"
      height={150}
      marginTop={1}
    />
    <SkeletonLoaderComponent variant="text" width="100%" height={50} />
  </Box>
);

const Introduction = () => {
  // const { isLoading, data } = useAboutUs();
  // const { title, content } = data?.data || {};

  return (
    <Box
      sx={
        {
          // marginBottom: "32px",
        }
      }
    >
      {/* {isLoading ? (
        <LoadingAboutUs />
      ) : (
        <>
        
        </>
      )} */}
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
    </Box>
  );
};

export default Introduction;
