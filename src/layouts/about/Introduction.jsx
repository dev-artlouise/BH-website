import { Typography, Box } from "@mui/material";

import ButtonComponent from "../../components/common/ButtonComponent";
import { useAboutUs } from "../../hooks/useAboutPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import Reveal from "../../components/animations/Reveal";

import patternBg from "../../assets/Telegram Desktop/pattern2.png";

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
      sx={{
        position: "relative",
        paddingTop: "64px",
        paddingBottom: "64px",
        // marginBottom: "32px",
      }}
    >
      {/* {isLoading ? (
        <LoadingAboutUs />
      ) : (
        <>
        
        </>
      )} */}
    </Box>
  );
};

export default Introduction;
