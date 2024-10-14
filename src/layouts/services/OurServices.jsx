import { Box, Container, Typography, Grid } from "@mui/material";
import ButtonComponent from "../../components/common/ButtonComponent";

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
        justifyContent={'center'}
        alignItems={'center'}
        container
        spacing={2}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Box marginBottom={4}>
            <Typography variant="h3" gutterBottom fontWeight="700">
              Our Software Solutions
            </Typography>

            <Typography variant="h6" component="p">
              Explore our comprehensive suite of cutting-edge software solutions
              designed to optimize your business processes, boost efficiency,
              and drive growth. We offer tailored solutions to meet the unique
              needs of your organization.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={ImageDiscuss}
              alt="services-image"
              width={520}
              height={520}
            />
          </Box>
        </Grid>

      </Grid>
    </Box >
  );
};

export default Services;
