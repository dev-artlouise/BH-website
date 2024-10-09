import { Container, Box, Typography, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// import logo from "../assets/bh-logo.png";
import logo from "../assets/bh-logo-reverse.png";

const Footer = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Fortpolio", path: "/fortpolio" },
    { label: "Contact", path: "/contact-us" },
  ];

  const contactDetails = [
    { label: "Email", path: "/" },
    { label: "Contact Number", path: "/about-us" },
  ];

  const services = [
    { label: "Web Development", path: "/" },
    { label: "Mobile Development", path: "/about-us" },
    { label: "UX Design", path: "/services" },
  ];

  const socials = [
    { label: "Facebook", path: "#" },
    { label: "X", path: "#" },
    { label: "Intagram", path: "#" },
    { label: "Tiktok", path: "#" },
    { label: "Youtube", path: "#" },
  ];

  return (
    <footer>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: (theme) => theme.palette.grey[800],
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center" spacing={4} sx={{ my: 2 }}>
            <Grid item xs={6} lg={3}>
              <Box
                component="img"
                src={logo}
                alt="BH-logo"
                sx={{
                  height: 60,
                  marginRight: "1rem",
                  borderRadius: "3px",
                  mb: 1,
                }}
              />

              {/* <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus sit inventore amet, consectetur rerum aliquid deserunt voluptas dignissimos quod eius similique omnis, dolorem animi delectus natus ad, recusandae quos.
                            </Typography> */}
            </Grid>

            <Grid item xs={6} lg={3}>
              <Box sx={{ mb: 1 }}>
                Unit S3, Branstone Business Park, Sandown, Isle of Wight, PO36
                0EQ
              </Box>

              {contactDetails.map(({ label, path }, index) => (
                <Box key={index}>
                  <Link
                    component={RouterLink}
                    to={path}
                    color="inherit"
                    underline="none"
                    sx={{ display: "block", mb: 1 }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Grid>

            <Grid item xs={6} lg={3}>
              {services.map(({ label, path }, index) => (
                <Box key={index}>
                  <Link
                    component={RouterLink}
                    to={path}
                    color="inherit"
                    underline="none"
                    sx={{ display: "block" }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Grid>

            <Grid item xs={6} lg={3}>
              {socials.map(({ label, path }, index) => (
                <Box key={index}>
                  <Link
                    component={RouterLink}
                    to={path}
                    color="inherit"
                    underline="none"
                    sx={{ display: "block" }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  my: "2.5rem",
                }}
              >
                <Typography variant="body1" align="center">
                  © {new Date().getFullYear()} BroadHeader Solutions. All rights
                  reserved.
                </Typography>
                <Typography variant="body2" align="center">
                  <Link href="/terms" color="inherit" underline="none">
                    Terms of Service
                  </Link>{" "}
                  |{" "}
                  <Link href="/privacy" color="inherit" underline="none">
                    Privacy Policy
                  </Link>{" "}
                  |{" "}
                  <Link href="/contact" color="inherit" underline="none">
                    Contact Us
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
