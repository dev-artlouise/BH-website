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
          position: "relative",
          minHeight: "50vh",
        }}
      >
        <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
          <Container
            sx={{
              paddingY: { xs: '', md: '2rem' },
            }}
          >
            <Introduction />
            <Stats />
          </Container>
        </Box>

      </Box>

      <Box
        sx={{
          paddingTop: "64px",
          paddingBottom: "64px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Container fixed>
          <Grid
            container
            spacing={8}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "50vh" }}
          >
            {/* Mission */}
            <Grid item xs={12} sm={6}>
              <Mission isLoading={isLoading} data={mission} />
            </Grid>

            {/* Vision */}
            <Grid item xs={12} sm={6}>
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
      </Box >

    </>
  );
};

export default About;
