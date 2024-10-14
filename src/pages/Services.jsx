import { useState, useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import OurServices from "../layouts/services/OurServices";
import WhatWeDo from "../layouts/services/WhatWeDo";
import WorkWithUs from "../layouts/sections/WorkWithUs";
import Process from "../layouts/home/Process";
import SeenOn from "../layouts/services/SeenOn";

import ServicesLayout from "../layouts/home/Services";

import { companies, process } from "../data";

import { useNavigate, useLocation } from "react-router-dom";

const Services = () => {


  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonStyles = {
    my: 2,
    display: "block",
    textTransform: "capitalize",
    fontSize: "18px",
    color: scrolling ? "black" : "white",
  };

  const contactButtonStyles = {
    ...buttonStyles,
    width: {
      xs: "100%", // Full width on extra-small screens
      sm: "100%", // Full width on small screens
      md: "15%", // 25% width on medium and larger screens},
    },
    borderRadius: "9999px",
    borderWidth: "2px",
    borderStyle: "solid",
    padding: ".75rem 2.5rem",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    borderColor: scrolling ? "black" : "lightgray",
    backgroundColor: "transparent",
    "&:hover": {
      color: scrolling ? "white" : "black",
      backgroundColor: scrolling ? "black" : "lightgray",
    },
  };

  return (
    <>
      {/* <Container> */}
      <Box>
        <OurServices />
        <WhatWeDo />
        {/* <WorkWithUs /> */}
        <ServicesLayout />
        {/* <SeenOn data={companies} /> */}
        {/* <Process data={process} /> */}

        <Box
          sx={{
            background: "#f3f6ff",
            position: "relative",
          }}
        >
          <Box
            sx={{
              paddingTop: "64px",
              paddingBottom: "64px",
            }}
          >
            <Box
              sx={{
                // marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column" }, // Responsive flex direction
              }}
            >
              <Typography variant="h6" component="h6">
                Have an idea to discuss ?
              </Typography>

              {/* <Button
                LinkComponent={RouterLink}
                to="/contact-us"
                size="large"
                sx={contactButtonStyles}
              >
                About us
                <Box component={"span"} ml={2}>
                  >
                </Box>
              </Button>

              <Box
                sx={{
                  marginLeft: {
                    xs: "0px",
                    sm: "16px",
                  },
                  marginTop: {
                    xs: "16px",
                    sm: "0px",
                  },
                }}
              ></Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default Services;
