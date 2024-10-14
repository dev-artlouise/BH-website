import { Grid, Container, Box } from "@mui/material";
import Introduction from "../layouts/about/Introduction";
import Stats from "../layouts/about/Stats";
import Mission from "../layouts/about/Mission";
import Vision from "../layouts/about/Vision";
import WorkWithUs from "../layouts/sections/WorkWithUs";
import OurStory from "../layouts/about/OurStory";
import Team from "../layouts/about/Team";

import Services from "../layouts/home/Services";

import { useVisionandMission } from "../hooks/useAboutPage";

const About = () => {
  const { isLoading, data } = useVisionandMission();

  const { mission, vision } = data?.data || {};

  return (
    <>
      <Box
        sx={{
          background: "#f3f6ff",
          position: "relative",
          minHeight: "100vh",
          paddingTop: "64px",
          paddingBottom: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            paddingY: { xs: "", md: "2rem" },
          }}
        >
          <Introduction />
          <Stats />
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" }, // Responsive flex direction
          borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
          boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Mission */}
            <Grid item xs={12} sm={10} md={8}>
              <Mission isLoading={isLoading} data={mission} />
            </Grid>

            {/* Vision */}
            <Grid item xs={12} sm={10} md={8}>
              <Vision isLoading={isLoading} data={vision} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Services />
      {/* <WorkWithUs /> */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
          boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
        }}
      >
        <OurStory />
        <Team />
      </Box>
    </>
  );
};

export default About;
