import React from 'react'

import { Paper, CardContent, Typography, Avatar } from '@mui/material'
import { Box } from 'lucide-react'

const PaperCardComponent = ({ title, description }) => {
    return (
        <>
            <Paper
                sx={{
                    borderRadius: '20px'
                }}
            >
                <CardContent
                    sx={{
                        padding: '48px',
                        paddingBottom: '48px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    <Avatar variant="rounded">
                        <Box />
                    </Avatar>

                    <Typography
                        variant='h6'
                        textAlign='center'
                        fontWeight='500'
                        gutterBottom
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant='body1'
                        component='p'
                        textAlign='center'
                    >
                        {description}
                    </Typography>

                </CardContent>
            </Paper>
        </>
    )
}

export default PaperCardComponent