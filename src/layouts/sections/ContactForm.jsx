import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import TextFieldComponent from "../../components/common/TextFieldComponent";
import ActionButtonComponent from "../../components/common/ActionButtonComponent";

const Contact = () => {
  const revealAnimation = {
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
    color: "black",
  };

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

  const FormComponent = () => (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            marginBottom: "16px",
          }}
        >
          <TextFieldComponent
            label="Fullname"
            fullWidth={true}
            variant="outlined"
          />
        </Box>

        <Box
          sx={{
            marginBottom: "16px",
          }}
        >
          <TextFieldComponent
            label="Email"
            fullWidth={true}
            variant="outlined"
          />
        </Box>

        <Box
          sx={{
            marginBottom: "16px",
          }}
        >
          <TextFieldComponent
            label="Tell us about your project"
            fullWidth={true}
            variant="outlined"
            multiline={true}
            rows={4}
          />
        </Box>

        <ActionButtonComponent
          fullWidth={true}
          label={"Submit"}
          path={"/contact-us"}
          size={"large"}
          styles={contactButtonStyles}
        />

        <Box
          sx={{
            marginTop: "32px",
            marginBottom: "32px",
          }}
        >
          <hr></hr>
        </Box>

        <Box>
          <Typography component="p" variant="body2">
            By sending a message you agree to our Privacy Policy, Data Policy
            and Cookie Policy.
          </Typography>
        </Box>
      </Box>
    </form>
  );

  const TitleComponent = () => (
    <Typography
      variant="h3"
      fontWeight={700}
      gutterBottom
      fontSize={{
        xs: "38px",
        sm: "42px",
        md: "50px",
        lg: "60px",
      }}
    >
      Let's get in touch!
    </Typography>
  );

  const SubtitleComponent = () => (
    <Typography component="p" variant="h6">
      Let us know about your project and we will get back to you with our
      proposal and timeline.
    </Typography>
  );

  return (
    <Box
      sx={{
        marginTop: "-28px",
        background: "#fff",
        borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
        boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: "20",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Box
          sx={{
            paddingTop: "64px",
            paddingBottom: "64px",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid xs={12} sm={10} md={6} item>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    initial="hidden" // Start state
                    whileInView="visible" // Animate to visible state when in view
                    variants={revealAnimation} // Apply the defined variants
                    viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
                  >
                    <Box
                      sx={{
                        marginBottom: { xs: "16px", md: "32px" }, // Add valid margin for xs or remove xs
                      }}
                    >
                      <TitleComponent />
                      <SubtitleComponent />
                    </Box>
                  </motion.div>
                </Box>
              </Grid>

              <Grid xs={12} sm={10} md={6} item>
                <motion.div
                  initial="hidden" // Start state
                  whileInView="visible" // Animate to visible state when in view
                  variants={revealAnimation} // Apply the defined variants
                  viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
                >
                  <FormComponent />
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
