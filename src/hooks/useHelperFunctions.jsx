import { Box, CircularProgress, Typography, Skeleton } from "@mui/material";

// for react query error and isLoading 
export const useErrorHandler = (isLoading, isError, data, errorMessage = "Failed to load content", isArray = false) => {
    if (isError) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px',
                }}
            >
                <Typography color="error">{errorMessage}</Typography>
            </Box>
        );
    }
};
