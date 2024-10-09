import { Typography, Box } from "@mui/material";
import ButtonComponent from "../../components/common/ButtonComponent";
import { useAboutUs } from "../../hooks/useAboutPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

const LoadingAboutUs = () => (
  <Box
    sx={{
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SkeletonLoaderComponent
      variant="text"
      width="100%"
      height={150}
      marginTop={1}
    />
    <SkeletonLoaderComponent variant="text" width="100%" height={50} />
  </Box>
);

const Introduction = () => {
  const { isLoading, data } = useAboutUs();
  const { title, content } = data?.data || {};

  return (
    <Box sx={{ marginBottom: "32px" }}>
      <Typography
        variant="body1"
        fontWeight="500"
        textTransform="uppercase"
        textAlign="center"
        gutterBottom
      >
        We Are Broadheaders
      </Typography>

      {isLoading ? (
        <LoadingAboutUs />
      ) : (
        <>
          <Typography
            variant="h3"
            fontWeight="700"
            textAlign="center"
            gutterBottom
          >
            {/* {title} */}
            From Ideas to Loved Products
          </Typography>

          <Typography
            variant="h6"
            fontWeight="500"
            fontSize="1.2rem"
            textAlign="center"
            gutterBottom
          >
            {/* {content} */}
            We bring your ideas to life and Build products people love
          </Typography>

          {/* <Box display="flex" justifyContent="center">
            <ButtonComponent
              label="Contact us"
              variant="contained"
              size="large"
            />
          </Box> */}
        </>
      )}
    </Box>
  );
};

export default Introduction;
