import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  CardContent,
  Button,
  Grow,
} from "@mui/material";
import CarouselComponent from "../../components/common/CarouselComponent";
import PaperCardComponent from "../../components/common/PaperCardComponent";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import ActionButtonComponent from "../../components/common/ActionButtonComponent";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../../data";


import { useNavigate, useLocation } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const isAboutUsPath = location.pathname === "/about-us";

  const textAnimation = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 }, // Start state: invisible and scaled down
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }, // Duration for the animation
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.9 }, // Start state: invisible and scaled down
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }, // Duration for the animation
    },
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonStyles = {
    my: 2,
    textTransform: "capitalize",
    fontSize: "18px",
    color: "black"
  }

  const contactButtonStyles = {
    ...buttonStyles,
    borderRadius: "50px",
    borderWidth: "2px",
    borderStyle: "solid",
    padding: ".75rem 2.5rem",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    borderColor: "black",
    backgroundColor: "transparent",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  };

  const ServiceContent = ({ title, description }) => (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <motion.div
        initial="hidden" // Start state
        whileInView="visible" // Animate to visible state when in view
        variants={cardAnimation} // Apply the defined variants
        viewport={{ once: true }} // Allow animation to trigger only once
      >
        <Typography
          fontSize={{ xs: "38px", sm: "42px", md: "50px", lg: "60px" }}
          textAlign={{ xs: 'center' }} variant="h3" fontWeight="700"
          gutterBottom
        >
          High-impact design & development services
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden" // Start state
        whileInView="visible" // Animate to visible state when in view
        variants={cardAnimation} // Apply the defined variants
        viewport={{ once: true }} // Allow animation to trigger only once
      >
        <Typography
          variant="body1"
          fontWeight="500"
          fontSize="1.2rem"
          gutterBottom
          textAlign={{ xs: 'center' }}
        >
          We take you by hand on each step of the process
        </Typography>
      </motion.div>
    </Box >
  );

  return (
    <Box
      sx={{
        marginTop: "-28px",
        background: "#f3f6ff",
        position: "relative",
        borderRadius: "1.5rem 1.5rem 0 0", // Apply border radius only on the left and right sides
        boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
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
            <Grid item xs={12} sm={10}>
              <ServiceContent />

              <CarouselComponent
                slidesToShow={3}
                slidesToScroll={3}
                sliderContent={services?.map(({ id, title, content }) => (
                  <Box
                    key={id}
                    sx={{ mt: 5, padding: "16px", flex: "1 0 auto" }}
                  >
                    <motion.div
                      initial="hidden" // Start state
                      whileInView="visible" // Animate to visible state when in view
                      variants={cardAnimation} // Apply the defined variants
                      viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
                    >
                      <PaperCardComponent
                        alignItems="start"
                        textAlign="start"
                        title={title}
                        description={content}
                      />
                    </motion.div>
                  </Box>
                ))}
              />

              {!isAboutUsPath && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    mt: 5,
                  }}
                >
                  <motion.div
                    initial="hidden" // Start state
                    whileInView="visible" // Animate to visible state when in view
                    variants={buttonAnimation} // Apply the defined variants
                    viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
                  >
                    <ActionButtonComponent
                      label={'About us'}
                      path={'/about-us'}
                      size="large"
                      styles={contactButtonStyles}
                    />
                  </motion.div>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
