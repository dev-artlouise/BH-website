import {
  Typography,
  Box,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import ButtonComponent from "../../components/common/ButtonComponent";
import { motion } from "framer-motion";
import { useHeroSection } from "../../hooks/useMainPage";

const Hero = () => {
  const { isLoading, error, isFetched, data } = useHeroSection();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Destructure data with default values
  const { image = "", title = "", content = "" } = data?.data || {};

  const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };

  // New image animation
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  // Show loading state
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Handle error state
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Typography color="error">Failed to load content</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(rgb(243, 246, 255) 0%, rgb(255, 255, 255) 100%)",
        position: "relative",
      }}
    >
      <Container>
        {isFetched && (
          <Box
            sx={{
              maxWidth: "1236px",
              padding: "64px 16px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Box mb={2}>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{
                        fontWeight: 700,
                        textAlign: { xs: "center", md: "left" },
                        fontSize: {
                          xs: "38px",
                          sm: "42px",
                          md: "50px",
                          lg: "60px",
                        },
                      }}
                    >
                      {title}
                    </Typography>
                  </Box>

                  <Box mb={3}>
                    <Typography
                      variant="body1"
                      component="p"
                      color="#565973"
                      lineHeight={1.6}
                      sx={{
                        fontWeight: 500,
                        textAlign: { xs: "center", md: "left" },
                        fontSize: { xs: "18px", lg: "20px" },
                      }}
                    >
                      {content}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "left" },
                    }}
                  >
                    <ButtonComponent
                      variant="contained"
                      size="large"
                      label="Get in touch"
                      fullWidth={smallScreen}
                    />
                  </Box>
                </motion.div>
              </Grid>

              {/* Image Section */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ paddingLeft: "32px", paddingTop: "32px" }}
              >
                <motion.div
                  variants={image}
                  initial="initial"
                  animate="animate"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={image}
                      alt="Hero"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Hero;
