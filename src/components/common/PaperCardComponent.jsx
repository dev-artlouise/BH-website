import { Paper, CardContent, Typography, Avatar } from '@mui/material'
import { Box } from 'lucide-react'

const PaperCardComponent = ({ title, description, alignItems, textAlign, avatarWidth, avatarHeight }) => {
    return (
        <>
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
                        alignItems: alignItems
                    }}
                >

                    <Avatar
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
                    </Avatar>

                    <Typography
                        variant='h6'
                        textAlign={textAlign}
                        fontWeight='500'
                        gutterBottom
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant='body1'
                        component='p'
                        textAlign={textAlign}
                    >
                        {description}
                    </Typography>

                </CardContent>
            </Paper>
        </>
    )
}

export default PaperCardComponent