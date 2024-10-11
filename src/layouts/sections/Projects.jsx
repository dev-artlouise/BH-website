import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import CardComponent from "../../components/common/CardComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

import { useNavigate, useLocation } from "react-router-dom";
import { useProjectsList, useProjectContent } from "../../hooks/useMainPage";
import { projects } from "../../data";

// Component to render the content inside each card
const CardContent = ({ title, content }) => (
  <>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" gutterBottom>
      {content}
    </Typography>
  </>
);

const CardActions = () => (
  <>
    <Chip label="Web Development" />
    <Chip label="UX Design" />
  </>
);

const Fortpolio = () => {
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
      md: "25%", // 25% width on medium and larger screens
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

  // const { isLoading: isProjectsLoading, data: projects } = useProjectsList();
  // const { isLoading: isProjectLoading, data: projectContent } =
  //     useProjectContent();

  // const { title, content } = projectContent?.data || {};
  // const projectsListData = projects?.data || [];

  const navigate = useNavigate();
  const location = useLocation();

  const isFortpolioPath = location.pathname === "/fortpolio";

  // Conditionally slice the projects if not on '/fortpolio'
  // const displayedProjects = isFortpolioPath ? projectsListData : projectsListData.slice(0, 4);
  const projectsData = isFortpolioPath ? projects : projects.slice(0, 2);

  const handleOnNavigateClick = (id) => {
    navigate(`/projects/${id}`);
  };

  // Separate Skeleton Loader for the service list
  const LoadingServiceList = () => (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        {Array.from({ length: 2 }).map((_, index) => (
          <Grid item xs={12} sm={10} md={6} key={index}>
            <SkeletonLoaderComponent variant="rounded" height={150} />
            <SkeletonLoaderComponent
              variant="text"
              width="80%"
              height={30}
              sx={{ mt: 1 }}
            />
            <SkeletonLoaderComponent
              variant="text"
              width="60%"
              height={20}
              sx={{ mt: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box
      sx={{
        background: "#f3f6ff",
        position: "relative",
        borderRadius: "1.5rem  1.5rem 0 0", // Apply border radius only on the left and right sides
        boxShadow: "0 -10px 15px -3px rgba(0,0,0,0.3)", // Apply shadow to the top only
      }}
    >
      <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <Container>
          <Box my={8} textAlign="center">
            <Typography
              variant="body1"
              fontWeight={500}
              textTransform="uppercase"
              gutterBottom
            >
              Our Work
            </Typography>

            <Typography variant="h3" fontWeight={700} gutterBottom>
              Our team strives to achieve excellence in every detail of our
              work.
              {/* {title} */}
              {/* {title ? title : <>Our team strives to achieve excellence in every detail of our work.</>} */}
            </Typography>

            <Typography variant="h6" component="p">
              From your new website concept to its design, development, launch,
              and expansion!
              {/* {content ? content : <>  From your new website concept to its design, development, launch, and expansion!</>} */}
            </Typography>
          </Box>

          {/* {isProjectsLoading ? (
                        <LoadingServiceList />
                    ) : (
                        <Grid
                            container
                            spacing={5}
                            alignItems="center"
                            justifyContent="center"
                            sx={{ minHeight: "50vh" }}
                        // sx={{ my: "2rem" }}
                        >
                            {projects.map(({ id, title, content, image_url }) => ( // Use the conditionally sliced or full projects list
                                <Grid item xs={12} sm={10} md={6} key={id}>
                                    <CardComponent
                                        image={image_url}
                                        title={title}
                                        cardContent={<CardContent title={title} content={content} />}
                                        onClick={() => handleOnNavigateClick(id)}
                                        cardActions={<CardActions />}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )} */}

          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "50vh" }}
            // sx={{ my: "2rem" }}
          >
            {projectsData.map(
              (
                { id, title, content, image_url } // Use the conditionally sliced or full projects list
              ) => (
                <Grid item xs={12} sm={10} md={6} key={id}>
                  <CardComponent
                    image={image_url}
                    title={title}
                    cardContent={
                      <CardContent
                        title={title}
                        // content={content}
                      />
                    }
                    onClick={() => handleOnNavigateClick(id)}
                    cardActions={<CardActions />}
                  />
                </Grid>
              )
            )}

            <Grid item xs={12} sm={10}>
              {!isFortpolioPath && ( // Render button only if not on 'fortpolio' path
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
                  <Button
                    component={RouterLink}
                    to="/fortpolio"
                    size="large"
                    sx={contactButtonStyles}
                  >
                    Case Studies
                    <Box component={"span"} ml={2}>
                      >
                    </Box>
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Fortpolio;
