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

  const alignStyles = {
    alignItems: { xs: "center", lg: "start" },
    justifyContent: { xs: "center", lg: "start" },
    height: 60,
    borderRadius: "3px",
    mb: 1,
    mx: "auto",
    display: { xs: "", lg: "flex" },
  };

  const headerStyles = {
    fontSize: "1rem",
    fontWeight: 700,
    my: 1,
    textAlign: { xs: "center", lg: "start" },
  };

  return (
    <footer>
      <Box
        component="footer"
        sx={{
          position: "relative",
          py: 3,
          px: 2,
          backgroundColor: (theme) => theme.palette.grey[800],
          color: "white",
        }}
      >
        <Container maxWidth="lg" sx={{ my: 5 }}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} lg={3}>
              <Box
                sx={{ ...alignStyles }}
                component="img"
                src={logo}
                alt="BH-logo"
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box sx={{ textAlign: { xs: "center", lg: "start" }, my: 1 }}>
                <Typography sx={{ ...headerStyles }}>
                  Unit S3, Branstone Business Park, Sandown, Isle of Wight, PO36
                  0EQ
                </Typography>
              </Box>

              <Box sx={{ textAlign: { xs: "center", lg: "start" } }}>
                {contactDetails.map(({ label, path }, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={path}
                    color="inherit"
                    underline="none"
                    sx={{ display: "block", my: 1 }}
                  >
                    {label}
                  </Link>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Typography sx={{ ...headerStyles }}>Services</Typography>
              <Box sx={{ textAlign: { xs: "center", lg: "start" } }}>
                {services.map(({ label, path }, index) => (
                  <Link
                    key={index}
                    // component={RouterLink}
                    // to={path}
                    color="inherit"
                    underline="none"
                    sx={{ display: "block", my: 1 }}
                  >
                    {label}
                  </Link>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Typography sx={{ ...headerStyles }}>Socials</Typography>
              <Box sx={{ textAlign: { xs: "center", lg: "start" } }}>
                {socials.map(({ label, path }, index) => (
                  <Link
                    component={RouterLink}
                    to={path}
                    color="inherit"
                    underline="none"
                    sx={{ display: "block", my: 1 }}
                    key={index}
                  >
                    {label}
                  </Link>
                ))}
              </Box>
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
