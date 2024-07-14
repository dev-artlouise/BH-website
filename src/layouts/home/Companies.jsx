import { Box, Typography } from '@mui/material'

const companies = [
    { id: 1, name: 'airbnb', img: 'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg' },
    { id: 2, name: 'amazon', img: 'https://assets.maccarianagency.com/svg/logos/amazon-original.svg' },
    { id: 3, name: 'fitbit', img: 'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg' },
    { id: 4, name: 'netflix', img: 'https://assets.maccarianagency.com/svg/logos/netflix-original.svg' },
    { id: 5, name: 'google', img: 'https://assets.maccarianagency.com/svg/logos/google-original.svg' },
    { id: 6, name: 'paypal', img: 'https://assets.maccarianagency.com/svg/logos/paypal-original.svg' },
]

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
                    <Typography
                        variant='body1'
                        fontWeight='500'
                        textTransform='uppercase'
                    >
                        Trusted By Companies
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    {companies.map(({ id, img }) => (
                        <Box
                            sx={{
                                maxWidth: '90px',
                                marginTop: '16px',
                                marginRight: '32px',
                            }}
                        >
                            <Box
                                key={id}
                                component={'img'}
                                src={img}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    filter: 'none'
                                }}
                            >
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

        </Box >
    )
}

export default Companies