import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  CardContent,
  Button
} from "@mui/material";
import CarouselComponent from "../../components/common/CarouselComponent";
import PaperCardComponent from "../../components/common/PaperCardComponent";
import {
  useServiceListSection,
  useServiceSection,
} from "../../hooks/useMainPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";
import { Link as RouterLink } from "react-router-dom";

import { services } from "../../data";

const Services = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const {
  //   isLoading: isServicesLoading,
  //   data: services,
  // } = useServiceListSection();

  // const {
  //   isLoading: isServiceLoading,
  //   data: service,
  // } = useServiceSection();

  // const { title, content } = service?.data || {};
  // const servicesListData = services?.data;

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
      xs: '100%', // Full width on extra-small screens
      sm: '100%', // Full width on small screens
      md: '25%',  // 25% width on medium and larger screens},
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

  const LoadingServiceList = () => (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ borderRadius: "20px", paddingBottom: "24px" }}>
              <CardContent
                sx={{
                  padding: "48px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <SkeletonLoaderComponent variant="rounded" height={150} />
                <SkeletonLoaderComponent variant="text" width="80%" height={30} marginTop={1} />
                <SkeletonLoaderComponent variant="text" width="60%" height={20} marginTop={1} />
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const LoadingServiceContent = () => (
    <Box>
      <SkeletonLoaderComponent variant="text" width="80%" height={100} marginTop={1} />
      <SkeletonLoaderComponent variant="text" width="40%" height={50} marginTop={1} />
    </Box>
  );

  const ServiceContent = ({ title, description }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" fontWeight="500" textTransform="uppercase" gutterBottom>
        {/* Services */}
      </Typography>
      <Typography variant="h3" fontWeight="700" gutterBottom>
        {/* {title} */}
        High-impact design & development services
      </Typography>
      <Typography variant="body1" fontWeight="500" fontSize="1.2rem" gutterBottom>
        {/* {content} */}
        We take you by hand on each step of the process
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        marginTop: "-28px",
        background: "#f3f6ff",
        position: "relative",
        borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
        boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
      }}
    >
      <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <Container>
          <Box>
            {/* {isServiceLoading ? (
              <LoadingServiceContent />
            ) : ( */}
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item xs={12} sm={10}>
                {/* <ServiceContent title={title} content={content} /> */}

                <Box>
                  {/* {isServicesLoading ? (
                      <LoadingServiceList />
                    ) : (

                      <>
                        <CarouselComponent
                          slidesToShow={3}
                          slidesToScroll={3}
                          sliderContent={servicesListData?.map(({ id, title, content }) => (
                            <Box key={id} sx={{ mt: 5, padding: "16px", flex: "1 0 auto" }}>
                              <PaperCardComponent
                                alignItems="center"
                                textAlign="center"
                                title={title}
                                description={content}
                              />
                            </Box>
                          ))}
                        />
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            mt: 5
                          }}
                        >
                          <Button
                            LinkComponent={RouterLink}
                            to="/about-us"
                            size="large"
                            sx={contactButtonStyles}
                          >
                            About us
                            <Box
                              component={'span'}
                              ml={2}
                            > 
                              >
                            </Box>
                          </Button>
                        </Box>
                      </>
                    )} */}

                  <ServiceContent />

                  <CarouselComponent
                    slidesToShow={3}
                    slidesToScroll={3}
                    sliderContent={services?.map(({ id, title, content }) => (
                      <Box key={id} sx={{ mt: 5, padding: "16px", flex: "1 0 auto" }}>
                        <PaperCardComponent
                          alignItems="center"
                          textAlign="center"
                          title={title}
                          description={content}
                        />
                      </Box>
                    ))}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      textAlign: 'center',
                      mt: 5
                    }}
                  >
                    <Button
                      LinkComponent={RouterLink}
                      to="/about-us"
                      size="large"
                      sx={contactButtonStyles}
                    >
                      About us
                      <Box
                        component={'span'}
                        ml={2}
                      > 
                              >
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* )} */}
          </Box>
        </Container>
      </Box >
    </Box >
  );
};

export default Services;
