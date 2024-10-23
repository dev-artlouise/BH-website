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
    <>
      {/* Project Content Section */}
      <Box py={20}>
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

            <Grid item xs={12}>
              <Box my={2} paddingTop={1}>
                <Typography variant={"h6"} fontWeight={700} gutterBottom>
                  What We Did
                </Typography>
              </Box>

              <List>
                {categories.map((category, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                          {category}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Box my={2} paddingTop={1}>
                <Typography variant={"h6"} fontWeight={700} gutterBottom>
                  Tech Stack
                </Typography>

                <List>
                  {technologies.map((tech, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                            {tech}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box sx={{ paddingY: "64px" }}>
        <Container>
          <Slider {...sliderSettings}>
            {project.images.map((image, index) => (
              <Box key={index}>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Slider>
        </Container>
      </Box> */}
    </>
  );
};

export default Project;
