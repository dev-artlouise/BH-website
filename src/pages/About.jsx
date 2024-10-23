import { Box, Container } from "@mui/material";
import Stats from "../layouts/about/Stats";
import Mission from "../layouts/about/Mission";
import Vision from "../layouts/about/Vision";
import OurStory from "../layouts/about/OurStory";
import Team from "../layouts/about/Team";

import Services from "../layouts/home/Services";

import { useVisionandMission } from "../hooks/useAboutPage";

import patternBg from "../assets/Telegram Desktop/pattern2.png";

const About = () => {
  const { isLoading, data } = useVisionandMission();

  const { mission, vision } = data?.data || {};

  const fullbackgroundStyle = {
    backgroundImage: `url(${patternBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "sticky",
    top: 0,
    minHeight: "40vh",
  };

  return (
    <>
      <Box sx={{ ...fullbackgroundStyle }}></Box>
      <Stats />
      <Mission isLoading={isLoading} data={mission} />
      <Vision isLoading={isLoading} data={vision} />
      <Services />
      <Team />

      {/* <WorkWithUs /> */}
      {/* <Box
        sx={{
          position: "relative",
          borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
          boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
        }}
      >
        <OurStory />
      </Box> */}
    </>
  );
};

export default About;
