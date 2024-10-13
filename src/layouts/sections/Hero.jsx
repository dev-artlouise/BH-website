import { Typography, Box, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
const Hero = () => {
  // Animation Variants
  const textAnimation = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };

  // Container styles for making it sticky
  const containerStyles = {
    // position: "sticky", // Sticky positioning
    // top: 0, // Stick to the top of the viewport
    // height: "100vh", // Full viewport height
    // zIndex: 10, // Make sure it's on top of other elements
  };

  const titleTextStyles = {
    fontWeight: 700,
    textAlign: "center",
    fontSize: { xs: "38px", sm: "42px", md: "50px", lg: "60px" },
  };

  const taglineTextStyles = {
    fontWeight: 500,
    textAlign: "center",
    fontSize: { xs: "18px", lg: "20px" },
    color: "#565973",
    lineHeight: 1.6,
  };

  return (
    <Box
    // sx={heroSectionStyles}
    >
      <Container>
        <Box sx={containerStyles}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            height="100vh"
            sx={{ marginTop: "-9%" }}
          >
            {/* Text Section */}
            <Grid item xs={12}>
              <motion.div
                variants={textAnimation}
                initial="initial"
                animate="animate"
              >
                {/* Hero Title */}
                <Box mb={2}>
                  <Typography variant="h2" component="h2" sx={titleTextStyles}>
                    From Ideas to Loved Products
                  </Typography>
                </Box>

                {/* Hero Tagline */}
                <Box mb={3}>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={taglineTextStyles}
                  >
                    We bring your ideas to life and build products people love
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
