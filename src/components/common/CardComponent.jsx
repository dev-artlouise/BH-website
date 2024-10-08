import { Card, CardMedia, CardContent, CardActions, CardActionArea } from "@mui/material"

const CardComponent = ({ image, title, cardContent, cardActions, onClick }) => {
    return (
        <>
            <Card
                sx={{
                    height: '100%',
                    borderRadius: '12px',
                }}
            >
                <CardActionArea
                    onClick={onClick}
                >
                    <CardMedia
                        component={'img'}
                        image={image}
                        title={title}
                        sx={{
                            display: 'block',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            height: '400px',
                        }}
                    />
                    <CardContent
                        sx={{
                            padding: '1rem'
                        }}
                    >
                        {cardContent}
                    </CardContent>
                    {/* <CardActions
                        sx={{
                            marginBottom: '12px'
                        }}
                    >
                        {cardActions}
                    </CardActions> */}
                </CardActionArea>

            </Card>
        </>
    )
}

export default CardComponent