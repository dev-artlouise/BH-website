import { Box, Typography, Grid } from "@mui/material";

import Reveal from "../../components/animations/Reveal";

import ImageDiscuss from "../../assets/services.jpg";

const Services = () => {
  return (
    <Box
      sx={{
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        container
        spacing={2}
      >
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
                Our Software Solutions
              </Typography>
            </Reveal>

            <Reveal>
              <Typography
                variant="h6"
                component="p"
                textAlign={{ xs: "center" }}
              >
                Explore our comprehensive suite of cutting-edge software
                solutions designed to optimize your business processes, boost
                efficiency, and drive growth. We offer tailored solutions to
                meet the unique needs of your organization.
              </Typography>
            </Reveal>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Reveal>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={ImageDiscuss}
                alt="services-image"
                width={520}
                height={520}
              />
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
