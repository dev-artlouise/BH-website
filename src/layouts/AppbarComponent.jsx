import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Box, Button } from "@mui/material";
import SideDrawer from "../components/common/SideDrawer";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/bh-logo.png";
import logoReverse from "../assets/bh-logo-reverse.png";

const AppbarComponent = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    { label: "Home", path: "/" },
    { label: "Works", path: "fortpolio" },
    { label: "About", path: "about-us" },
    { label: "Services", path: "services" },
  ];

  // AppBar styling based on scroll
  const appbarStyles = {
    backgroundColor: scrolling ? "rgba(0, 0, 0, 0.85)" : "transparent",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: scrolling ? "0px 4px 20px rgba(0, 0, 0, 0.2)" : "none",
    height: { xs: 100, md: 135 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed", // Make sure it's fixed
    top: 0, // Stick it to the top of the viewport
    left: 0, // Ensure it covers the full width
    right: 0, // Full width
    zIndex: 1000, // High z-index to stay on top
  };

  const toolbarStyles = {
    width: "100%",
    maxWidth: "1200px",
    mx: "auto",
  };

  const buttonStyles = {
    my: 2,
    display: "block",
    textTransform: "capitalize",
    fontSize: "18px",
    color: scrolling ? "white" : "black",
  };

  const contactButtonStyles = {
    ...buttonStyles,
    borderRadius: "9999px",
    borderWidth: "2px",
    borderStyle: "solid",
    padding: ".75rem 2.5rem",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    borderColor: scrolling ? "lightgray" : "black",
    backgroundColor: "transparent",
    "&:hover": {
      color: scrolling ? "black" : "white",
      backgroundColor: scrolling ? "lightgray" : "black",
      borderColor: scrolling && "",
    },
  };

  return (
    <>
      {/* Spacer to avoid layout shift */}
      {/* <Box sx={{ height: { xs: 100, md: 135 } }}></Box> */}

      <AppBar sx={appbarStyles}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={toolbarStyles}>
            {/* Logo switch based on scroll */}
            <Box
              component={RouterLink}
              to="/"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Box
                component="img"
                src={scrolling ? logoReverse : logo}
                alt="BH-logo"
                sx={{ height: 60, marginRight: "1rem", borderRadius: "3px" }}
              />
            </Box>

            {/* Mobile Menu (Side Drawer) */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <SideDrawer anchor="left" items={pages} width="100%" />
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              {/* Navigation Links */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 3, mr: 3 }}
              >
                {pages.map(({ label, path }, index) => (
                  <Button
                    disableRipple
                    variant="text"
                    key={index}
                    LinkComponent={RouterLink}
                    to={path}
                    sx={buttonStyles}
                  >
                    {label}
                  </Button>
                ))}
              </Box>

              {/* Contact Us Button */}
              <Button
                LinkComponent={RouterLink}
                to="/contact-us"
                size="large"
                sx={contactButtonStyles}
              >
                Contact Us
                <Box component={"span"} ml={2}>
                  >
                </Box>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppbarComponent;
