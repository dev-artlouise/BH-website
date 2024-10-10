import {
  Box,
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";

const Project = () => {
  const { id: projectId } = useParams();
  const project = projects?.find((proj) => String(proj.id) === projectId);

  if (!project) {
    return (
      <Box sx={{ paddingY: "64px" }}>
        <Container>
          <Typography variant="h4" gutterBottom fontWeight={700}>
            Project Not Found
          </Typography>
        </Container>
      </Box>
    );
  }

  const { title, content, image_url, technologies, categories } = project;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box>
      {/* Project Content Section */}
      <Box sx={{ paddingY: "64px" }}>
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ paddingLeft: "16px" }}
          >
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom fontWeight={700}>
                {title}
              </Typography>
              <Typography
                component="p"
                variant="h6"
                gutterBottom
                fontWeight={500}
              >
                {content}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                  my: 5,
                }}
              >
                <img
                  src={image_url}
                  alt={title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Categories and Tech Stack */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            mt={5}
            paddingLeft={1}
          >
            <Grid item xs={12} md={6}>
              <Box my={2} paddingTop={1}>
                <Typography gutterBottom>What We Did</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <List>
                {categories.map((category, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, fontSize: "1.2rem" }}
                        >
                          {category}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={2} paddingTop={1}>
                <Typography gutterBottom>Tech Stack</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <List>
                {technologies.map((tech, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, fontSize: "1.2rem" }}
                        >
                          {tech}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Image Slider Section */}
      <Box sx={{ paddingY: "64px" }}>
        <Container>
          <Slider {...sliderSettings}>
            {/* Uncomment and update this section when images array is available */}
            {/* {project.images.map((image, index) => (
              <Box key={index}>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))} */}
          </Slider>
        </Container>
      </Box>
    </Box>
  );
};

export default Project;
