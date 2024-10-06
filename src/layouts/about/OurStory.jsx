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

        {isLoading ? (
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
        )}
      </Container>
    </Box>
  );
};

export default OurStory;
