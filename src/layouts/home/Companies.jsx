import { Box, Typography, CircularProgress } from '@mui/material';
import { useCompaniesSection } from '../../hooks/useMainPage';

const Companies = () => {
    const { isLoading, error, data: companies } = useCompaniesSection();

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '200px', // Set a height for better UX
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography
                variant="body1"
                color="error"
                textAlign="center"
            >
                Something went wrong. Please try again later.
            </Typography>
        );
    }

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
            <Box textAlign="center" mb={4}>
                <Typography
                    variant="body1"
                    fontWeight="500"
                    textTransform="uppercase"
                >
                    Trusted By Companies
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {companies?.map(({ id, urlimage: img }) => (
                    <Box
                        key={id}
                        sx={{
                            maxWidth: '90px',
                            marginTop: '16px',
                            marginRight: '32px',
                        }}
                    >
                        <Box
                            component="img"
                            src={img}
                            sx={{
                                height: '100%',
                                width: '100%',
                            }}
                            alt={`Company logo ${id}`}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Companies;
