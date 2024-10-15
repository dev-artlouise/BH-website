import { Box, Grid, Paper, Typography, Avatar, Container } from "@mui/material";
import { useTeam } from "../../hooks/useAboutPage";
import SkeletonLoaderComponent from "../../components/common/SkeletonLoaderComponent";

import { team } from "../../data";

const LoadingComponent = () => (
  <Box sx={{ marginTop: "2rem" }}>
    <Grid container spacing={2}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper sx={{ padding: "1.5rem", borderRadius: "12px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <SkeletonLoaderComponent
                variant="circular"
                width={80}
                height={80}
              />
            </Box>
            <SkeletonLoaderComponent variant="text" width="80%" height={30} />
            <SkeletonLoaderComponent
              variant="text"
              width="20%"
              height={20}
              sx={{ mt: 1 }}
            />
            <SkeletonLoaderComponent
              variant="text"
              width="100%"
              height={100}
              sx={{ mt: 1 }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Team = () => {
  // const { isLoading, data } = useTeam();
  // const team = data?.data;

  return (
    <Box display="flex" flexDirection="column" textAlign="center" my={8}>
      <Typography
        variant="h4"
        fontSize="1rem"
        fontWeight="500"
        textTransform="uppercase"
      >
        Meet the Team
      </Typography>

      <Container>
        {/* {isLoading ? (
          <LoadingComponent />
        ) : (
          <Box my={5}>
            <Grid container spacing={4}>
              {team?.map(({ avatar, fullname, position, message }, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={3}
                    sx={{ height: "365px", borderRadius: "12px" }}
                  >
                    <Box p={3}>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Avatar
                          src={avatar}
                          alt={fullname}
                          sx={{ width: 80, height: 80 }}
                        />
                      </Box>
                      <Box mt={3} textAlign="start">
                        <Box my={1}>
                          <Typography variant="body1">{fullname}</Typography>
                          <Typography variant="body2">{position}</Typography>
                        </Box>
                        <Typography variant="body2">"{message}"</Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )} */}

        <Box my={5}>
          <Grid container spacing={4}>
            {team?.map(({ avatar, fullname, position, message }, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={3} sx={{ borderRadius: "12px" }}>
                  <Box p={3}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Avatar
                        src={avatar}
                        alt={fullname}
                        sx={{ width: 80, height: 80 }}
                      />
                    </Box>
                    <Box mt={3} textAlign="start">
                      <Box my={1}>
                        <Typography variant="body1" fontWeight={600}>
                          {fullname}
                        </Typography>
                        <Typography variant="body2">{position}</Typography>
                      </Box>
                      {/* <Typography variant="body2">"{message}"</Typography> */}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
