import { Box, Typography } from '@mui/material'
import { useCompaniesSection } from '../../hooks/useMainPage';

const Companies = ({ data }) => {
    const { isLoading, error, data: datas } = useCompaniesSection();
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
                    {datas?.map(({ id, urlimage: img }) => (
                        <Box
                            key={id}
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