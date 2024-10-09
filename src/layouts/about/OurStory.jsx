import { Container, Box, Typography } from "@mui/material";
import ButtonComponent from "../../components/common/ButtonComponent";
import { useOurStory } from "../../hooks/useAboutPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

const LoadingComponent = () => (
  <Box
    sx={{
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SkeletonLoaderComponent variant="text" width="100%" height={150} mt={1} />
    <SkeletonLoaderComponent variant="text" width="100%" height={50} />
    <SkeletonLoaderComponent variant="text" width="10%" height={80} />
  </Box>
);

const OurStory = () => {
  const { isLoading, data } = useOurStory();
  const { title, content } = data?.data || {};

  return (
    <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <Container fixed>
        <Typography
          textAlign="center"
          variant="h4"
          fontSize="1rem"
          fontWeight="500"
          textTransform="uppercase"
        >
          Our Story
        </Typography>

        <Typography mt={4} variant="h6" alignItems="center" textAlign="center">
          BroadHeader's journey began just a short time ago, fueled by a passion
          for technology and a vision to empower businesses. Founded by a group
          of driven engineers and entrepreneurs, we set out to create innovative
          software solutions that tackle real-world challenges head-on.
        </Typography>

        <Typography mt={4} variant="h6" alignItems="center" textAlign="center">
          In our first years, we've focused on building a strong foundation,
          driven by a commitment to excellence and client satisfaction. We
          believe in the transformative power of technology and its ability to
          help businesses reach new heights of success.
        </Typography>

        <Typography mt={4} variant="h6" alignItems="center" textAlign="center">
          Though we're a young company, we're already making a difference. We're
          proud of the relationships we've built and the positive impact we've
          had on our clients.
        </Typography>

        <Typography mt={4} variant="h6" alignItems="center" textAlign="center">
          Looking ahead, BroadHeader is committed to continuous innovation and
          growth. We're excited to expand our reach and empower even more
          businesses with cutting-edge software solutions that drive progress
          and unlock their full potential.
        </Typography>

        {/* {isLoading ? (
          <LoadingComponent />
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            // my={8}
          >
            <>
              <Typography variant="h3" fontWeight="700" mt={4}>
                {title}
              </Typography>
              <Typography variant="h6" fontWeight="500" mt={4}>
                {content}
              </Typography>
            </>

            <Box mt={4}>
              <ButtonComponent
                label="Contact us"
                variant="outlined"
                size="large"
              />
            </Box>
          </Box>
        )} */}
      </Container>
    </Box>
  );
};

export default OurStory;
