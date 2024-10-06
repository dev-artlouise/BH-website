import { Grid, Container, Box } from "@mui/material";
import Introduction from "../layouts/about/Introduction";
import Stats from "../layouts/about/Stats";
import Mission from "../layouts/about/Mission";
import Vision from "../layouts/about/Vision";
import WorkWithUs from "../layouts/sections/WorkWithUs";
import OurStory from "../layouts/about/OurStory";
import Team from "../layouts/about/Team";

import Services from "../layouts/home/Services";

const About = () => {
  const features = [
    { label: "Years in business", value: "7" },
    { label: "Projects Delivered", value: "150+" },
    { label: "Satisfied Customer", value: "99%" },
  ];

  return (
    <>
      <Box
        sx={{
          background: "#f3f6ff",
          position: "relative",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        <Container fixed>
          <Introduction />
          <Stats />
        </Container>
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
          <Grid container spacing={8}>
            {/* Mission */}
            <Grid item xs={12} sm={6}>
              <Mission />
            </Grid>

            {/* Vision */}
            <Grid item xs={12} sm={6}>
              <Vision />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Services /> */}
      <WorkWithUs />
      <OurStory />
      <Team />
    </>
  );
};

export default About;
