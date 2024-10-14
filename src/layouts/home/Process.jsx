import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  CardContent,
} from "@mui/material";
import CarouselComponent from "../../components/common/CarouselComponent";
import PaperCardComponent from "../../components/common/PaperCardComponent";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import { useFlowListSection } from "../../hooks/useMainPage";

import { motion } from "framer-motion";

import { process } from "../../data";

// Loading Component for Flow List
const LoadingFlowList = () => (
  <Paper sx={{ borderRadius: "20px", paddingBottom: "24px" }}>
    <CardContent
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SkeletonLoaderComponent variant="rounded" height={150} />
      <SkeletonLoaderComponent
        variant="text"
        width="80%"
        height={30}
        marginTop={1}
      />
      <SkeletonLoaderComponent
        variant="text"
        width="60%"
        height={20}
        marginTop={1}
      />
    </CardContent>
  </Paper>
);

// Main Process Component
const Process = () => {

  const revealAnimation = {
    hidden: { opacity: 0, scale: 0.9 }, // Start state: invisible and scaled down
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }, // Duration for the animation
    },
  };

  const SlideAnimation = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };

  const titleTextStyles = {
    fontWeight: 700,
    marginTop: '1rem',
    textAlign: { xs: 'center', md: 'start' },
    fontSize: { xs: "38px", sm: "42px", md: "50px", lg: "60px" },
  };

  const subtitleStyles = {
    fontWeight: 500,
    marginTop: '1rem',
    textAlign: { xs: 'center', md: 'start' },
    fontSize: { xs: "18px", lg: "20px" },
    color: "#565973",
    lineHeight: 1.6,
  }

  // const { isLoading, data: flowList } = useFlowListSection();
  // const flowListData = flowList?.data || [];

  return (
    <Box
      sx={{
        marginTop: "-28px",
        position: "relative",
        background: "#fff",
        borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
        boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
        // opacity: 1
      }}
    >
      <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: { xs: '', md: '110vh' } }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "start",
                }}
              >
                <Box>
                  <motion.div
                    initial="hidden" // Start state
                    whileInView="visible" // Animate to visible state when in view
                    variants={revealAnimation} // Apply the defined variants
                    viewport={{ once: true }} // Allow animation to trigger only once
                  >
                    <Typography
                      variant="h3"
                      // textAlign="left"
                      gutterBottom
                      sx={{ ...titleTextStyles }}
                    >
                      An uncomplicated yet effective process
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial="hidden" // Start state
                    whileInView="visible" // Animate to visible state when in view
                    variants={revealAnimation} // Apply the defined variants
                    viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      gutterBottom
                      fontWeight="500"
                      textAlign="left"
                      sx={{ ...subtitleStyles }}
                    >
                      As specialists in design and development, we assist you
                      through the entire process, from your initial website
                      concept to design, development, launch, and scaling!
                    </Typography>
                  </motion.div>

                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                {/* {isLoading ? (
                  <LoadingFlowList />
                ) : (
                  <CarouselComponent
                    slidesToShow={1}
                    slidesToScroll={1}
                    sliderContent={process.map(
                      ({ id, title, content, logo_url }) => (
                        <Box key={id} sx={{ padding: "16px" }}>
                          <PaperCardComponent
                            alignItems="left"
                            textAlign="left"
                            title={title}
                            // icon={logo_url}
                            description={content}
                            avatarHeight="48"
                            avatarWidth="48"
                          />
                        </Box>
                      )
                    )}
                  />
                )} */}
                <CarouselComponent
                  slidesToShow={1}
                  slidesToScroll={1}
                  sliderContent={process.map(
                    ({ id, title, content, logo_url }) => (
                      <Box key={id} sx={{ padding: "16px" }}>

                        <motion.div
                          initial="hidden" // Start state
                          whileInView="visible" // Animate to visible state when in view
                          variants={revealAnimation} // Apply the defined variants
                          viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
                        >
                          <PaperCardComponent
                            alignItems="left"
                            textAlign="left"
                            title={title}
                            // icon={logo_url}
                            description={content}
                            avatarHeight="48"
                            avatarWidth="48"
                          />
                        </motion.div>
                      </Box>
                    )
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default Process;
