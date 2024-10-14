import { Box, Typography, Grid } from "@mui/material";

import Reveal from "../../components/animations/Reveal";

import WhatWeDoImg from "../../assets/what-we-do.jpg";

const WhatWeDo = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "", md: '"64px"' },
        paddingBottom: { xs: "", md: '"64px"' },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Reveal>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={WhatWeDoImg}
                alt="services-image"
                width={520}
                height={520}
              />
            </Box>
          </Reveal>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Box marginBottom={4}>
            <Reveal>
              <Typography
                fontSize={{ xs: "38px", sm: "42px", md: "50px", lg: "60px" }}
                textAlign={{ xs: "center" }}
                variant="h3"
                fontWeight="700"
                gutterBottom
              >
                Transforming Businesses Through Technology
              </Typography>
            </Reveal>

            <Reveal>
              <Typography
                variant="h6"
                component="p"
                textAlign={{ xs: "center" }}
              >
                We specialize in developing and implementing innovative software
                solutions that help businesses thrive in the digital age. Learn
                how we leverage technology to empower our clients and deliver
                exceptional results.
              </Typography>
            </Reveal>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
