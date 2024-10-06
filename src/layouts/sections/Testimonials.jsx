import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Paper,
} from "@mui/material";
import CarouselComponent from "../../components/common/CarouselComponent";
import { useTestimonials, useTestimonial } from "../../hooks/useMainPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

// Loading Component for Testimonials List
const LoadingTestimonials = () => (
  <Paper sx={{ borderRadius: "20px", paddingBottom: "24px" }}>
    <CardContent
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SkeletonLoaderComponent variant="rounded" height={150} />
      <SkeletonLoaderComponent
        variant="text"
        width="80%"
        height={30}
        marginTop={1}
      />
      <SkeletonLoaderComponent
        variant="text"
        width="60%"
        height={20}
        marginTop={1}
      />
    </CardContent>
  </Paper>
);

// Loading Component for Testimonial Content
const LoadingTestimonialContent = () => (
  <>
    <SkeletonLoaderComponent variant="rounded" height={150} />
    <SkeletonLoaderComponent
      variant="text"
      width="80%"
      height={30}
      marginTop={1}
    />
    <SkeletonLoaderComponent
      variant="text"
      width="60%"
      height={20}
      marginTop={1}
    />
  </>
);

// Testimonial Content Component
const TestimonialContent = ({ title, content }) => (
  <Box>
    <Typography
      component="p"
      variant="body1"
      fontSize="1rem"
      fontWeight="500"
      textTransform="uppercase"
      gutterBottom
    >
      Our Works
    </Typography>
    <Typography variant="h3" fontWeight="700" gutterBottom>
      {title}
    </Typography>
    <Typography
      component="p"
      variant="h6"
      fontSize="1rem"
      fontWeight="500"
      textTransform="capitalize"
      gutterBottom
    >
      {content}
    </Typography>
  </Box>
);

// Single Testimonial Component
const SingleTestimonial = ({ avatar, comment, fullname, position }) => (
  <Box
    component="div"
    sx={{
      padding: "16px",
    }}
  >
    <Card
      sx={{
        height: "100%",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <CardContent sx={{ padding: "1rem" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: "1rem",
          }}
        >
          {comment}
        </Typography>
        <ListItem sx={{ padding: 0 }} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={fullname} src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={fullname}
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {position}
              </Typography>
            }
          />
        </ListItem>
      </CardContent>
    </Card>
  </Box>
);

// Main Testimonials Component
const Testimonials = () => {
  const { isLoading: isTestimonialsLoading, data: testimonialsData } =
    useTestimonials();
  const { isLoading: isTestimonialLoading, data: testimonialData } =
    useTestimonial();

  const testimonials = testimonialsData?.data || [];
  const { title = "", content = "" } = testimonialData?.data || {};

  return (
    <Box sx={{ backgroundColor: "#f3f6ff", padding: "64px 0" }}>
      <Container fixed>
        <Grid container justifyContent="center" spacing={4}>
          {/* Testimonial Text Content */}
          <Grid item xs={12} md={6}>
            {isTestimonialLoading ? (
              <LoadingTestimonialContent />
            ) : (
              <TestimonialContent title={title} content={content} />
            )}
          </Grid>

          {/* Carousel with Testimonials */}
          <Grid item xs={12} md={6}>
            {isTestimonialsLoading ? (
              <LoadingTestimonials />
            ) : (
              <Box>
                <CarouselComponent
                  slidesToShow={1}
                  slidesToScroll={1}
                  sliderContent={testimonials.map((testimonial) => (
                    <SingleTestimonial key={testimonial.id} {...testimonial} />
                  ))}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
