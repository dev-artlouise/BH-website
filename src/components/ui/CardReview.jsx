import { Paper, CardContent, Typography } from "@mui/material"

const CardReview = ({ position, name, description, avatar, company }) => {
    return (
        <Paper
            sx={{
                borderRadius: '20px',
                paddingBottom: '24px'
            }}
        >
            <CardContent
                sx={{
                    padding: '48px',
                    paddingBottom: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left'
                }}
            >

                {/* <Avatar
                    variant="rounded"
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        marginBottom: '24px',
                        alignItems: 'center',
                        height: '84px',
                        width: '84px',
                        borderRadius: '20px'
                    }}
                >
                    <Box
                        width={avatarWidth}
                        height={avatarHeight}
                    />
                </Avatar> */}



                <Typography
                    variant='h6'
                    textAlign='left'
                    gutterBottom
                    marginBottom='16px'
                >
                    {description}
                </Typography>

                <Typography
                    component='span'
                    variant='body1'
                    textAlign='left'
                    // fontWeight='500'
                    gutterBottom
                >
                    {name}
                </Typography>

                <Typography
                    component='small'
                    variant='body1'
                    textAlign='left'
                    // fontWeight='500'
                    gutterBottom
                >
                    {position}
                </Typography>



            </CardContent>
        </Paper>
    )
}

export default CardReview
