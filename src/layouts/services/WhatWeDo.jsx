import { Box, Typography, Container, Grid } from "@mui/material";

import ButtonComponent from "../../components/common/ButtonComponent";

import WhatWeDoImg from "../../assets/what-we-do.jpg";

const WhatWeDo = () => {
  return (
    <Box
      sx={{
        paddingTop: "64px",
        paddingBottom: "64px",
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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <img
              src={WhatWeDoImg}
              alt="services-image"
              width={520}
              height={520}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Box marginBottom={4}>
            <Typography variant="h3" gutterBottom fontWeight="700">
              Transforming Businesses Through Technology
            </Typography>

            <Typography variant="h6" component="p">
              We specialize in developing and implementing innovative software
              solutions that help businesses thrive in the digital age. Learn
              how we leverage technology to empower our clients and deliver
              exceptional results.
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default WhatWeDo;
