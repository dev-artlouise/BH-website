import { Box, Grid, Typography } from "@mui/material"
import { useEffect } from "react"

const Stats = ({ data }) => {

    // useEffect(() => {
    //     console.log(data)
    // }, [])

    return (

        <Box
            sx={{
                // paddingTop: '64px'
            }}
        >
            <Box
                component='div'
            >
                <Grid container spacing={2} >
                    {data.map(({ label, value }, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box display="flex"
                                flexDirection='column'
                                justifyContent="center"
                                alignItems="center"
                                height="100%"
                                my={5}
                            >
                                <Typography
                                    variant="h3"
                                    fontWeight='500'
                                    mb={2}
                                >
                                    {value}
                                </Typography>
                                <Typography
                                    variant="body1"
                                >
                                    {label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}

                    {/* <Grid item xs={12} sm={4}>
                        <Box
                            my={5}
                        >
                            <hr />
                        </Box>
                    </Grid> */}
                </Grid>
            </Box>

        </Box>
    )
}

export default Stats
