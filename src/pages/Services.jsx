import { useState, useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";

import { Box, Typography, Container } from "@mui/material";

import OurServices from "../layouts/services/OurServices";
import WhatWeDo from "../layouts/services/WhatWeDo";
import WorkWithUs from "../layouts/sections/WorkWithUs";
import Process from "../layouts/home/Process";
import SeenOn from "../layouts/services/SeenOn";

import ServicesLayout from "../layouts/home/Services";

import { companies, process } from "../data";

import { useNavigate, useLocation } from "react-router-dom";

import ActionButtonComponent from "../components/common/ActionButtonComponent";

const Services = () => {


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
    marginLeft: '1rem',
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

  return (
    <>
      {/* <Container> */}
      <Box
        sx={{
          position: "relative",
          minHeight: "50vh",
        }}
      >
        <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
          <Container
            sx={{
              paddingY: { xs: '', md: '2rem' },
            }}
          >
            <OurServices />
            <WhatWeDo />
          </Container>
        </Box>

        <ServicesLayout />

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: 'row' }, // Responsive flex direction
            borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
            boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
            paddingTop: "64px",
            paddingBottom: "64px",
          }}
        >
          <Typography variant="h6" component="h6">
            Have an idea to discuss ?
          </Typography>

          <ActionButtonComponent
            label={'Contact Us'}
            path={'/contact-us'}
            size="large"
            styles={contactButtonStyles}
          />
        </Box>

      </Box>
      {/* </Container> */}
    </>
  );
};

export default Services;
