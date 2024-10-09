import { Card, CardMedia, CardContent, CardActions, CardActionArea } from "@mui/material";

const CardComponent = ({ image, title, cardContent, cardActions, onClick }) => {
    return (
        <Card
            sx={{
                height: '100%',
                borderRadius: '12px',
                width: {
                    // xs: '100%', // 100% width on extra-small screens
                    // sm: '100%', // 100% width on small screens
                    // md: 'auto', // Auto width on medium and larger screens
                },
            }}
        >
            <CardActionArea onClick={onClick} disableRipple>
                <CardMedia
                    component={"img"}
                    image={image}
                    title={title}
                    sx={{
                        display: "block",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        height: {
                            xs: "250px", // Shorter height on extra-small screens
                            sm: "300px", // Slightly larger height on small screens
                            md: "400px", // Full height on medium and larger screens
                        },
                    }}
                />
                <CardContent
                    sx={{
                        padding: "1rem",
                    }}
                >
                    {cardContent}
                </CardContent>
                <CardActions
                    sx={{
                        marginBottom: "12px",
                        padding: "1rem",
                    }}
                >
                    {cardActions}
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;
