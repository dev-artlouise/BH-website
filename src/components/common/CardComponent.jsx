import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

import Hover from "../animations/Hover";

const CardComponent = ({ image, title, cardContent, cardActions, onClick }) => {
  const cardsStyles = {
    height: "100%",
    borderRadius: "20px",
  };

  const cardMediaStyles = {
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: {
      xs: "250px", // Shorter height on extra-small screens
      sm: "300px", // Slightly larger height on small screens
      md: "400px", // Full height on medium and larger screens
    },
  };

  const cardContentStyles = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
    color: "white", // Text color
    padding: "16px", // Adjust padding
  };

  return (
    <>
      <Card sx={{ ...cardsStyles }}>
        <Hover>
          <CardActionArea onClick={onClick} disableRipple>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                sx={{ ...cardMediaStyles }}
                component={"img"}
                image={image}
                title={title}
              />
              <CardContent sx={{ ...cardContentStyles }}>
                {cardContent}
              </CardContent>
            </Box>
          </CardActionArea>
        </Hover>
      </Card>
    </>
  );
};

export default CardComponent;
