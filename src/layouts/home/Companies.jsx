import { Box } from '@mui/material'
import React from 'react'

const Companies = () => {
    return (
        <Box
            sx={{
                maxWidth: '1236px',
                paddingTop: '64px',
                paddingBottom: '64px',
                width: '100%',
                margin: '0px auto',
                paddingLeft: '16px',
                paddingRight: '16px',
            }}
        >
            <Box>
                <Box
                    sx={{
                        textAlign: 'center',
                        marginBottom: '32px'
                    }}
                >
                    Trusted By Companies
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '90px',
                            marginTop: '16px',
                            marginRight: '32px',
                        }}
                    >
                        <img src="https://assets.maccarianagency.com/svg/logos/airbnb-original.svg" alt="" />
                    </Box>
                </Box>
            </Box>

        </Box >
    )
}

export default Companies