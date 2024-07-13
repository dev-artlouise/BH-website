import { Card, CardMedia, CardContent, CardActions } from "@mui/material"

const CardComponent = ({ image, title, cardContent, cardActions }) => {
    return (
        <>
            <Card
                sx={{
                    height: '100%',
                    borderRadius: '12px'
                }}
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
                        height: '250px',
                    }}
                />
                <CardContent
                    sx={{
                        padding: '1rem'
                    }}
                >
                    {cardContent}
                </CardContent>
                <CardActions
                    sx={{
                        marginBottom: '12px'
                    }}
                >
                    {cardActions}
                </CardActions>
            </Card>
        </>
    )
}

export default CardComponent