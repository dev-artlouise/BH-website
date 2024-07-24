import { Box, Container, Typography, Chip, Stack } from "@mui/material"

import { useParams } from "react-router-dom"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        id: '1',
        title: 'Project One',
        description: 'This is the first project description.',
        images: [
            'path/to/image1.jpg',
            'path/to/image2.jpg',
            'path/to/image3.jpg',
        ],
        technologies: ['React', 'Node.js', 'MongoDB'],
        whatWeDid: ['Web Development', 'UX Design']
    },
    {
        id: '2',
        title: 'Project Two',
        description: 'This is the second project description.',
        images: [
            'path/to/image4.jpg',
            'path/to/image5.jpg',
            'path/to/image6.jpg',
        ],
        technologies: ['Vue', 'Firebase', 'CSS3'],
        whatWeDid: ['Frontend Development', 'UI Design']
    },
    // Add more projects as needed
];

const Project = (id) => {

    const params = useParams()
    const projectId = params.id
    const project = projects.find(proj => proj.id === projectId);

    if (!project) {
        return (
            <Box
                sx={{
                    paddingTop: '64px',
                    paddingBottom: '64px'
                }}
            >
                <Container>
                    <Typography
                        variant='h4'
                        gutterBottom
                        fontWeight='700'
                    >
                        Project Not Found
                    </Typography>
                </Container>
            </Box>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <Box>
            <Box
                sx={{
                    paddingTop: '64px',
                    paddingBottom: '64px'
                }}
            >
                <Container>
                    {/* {params.id} */}

                    <Box>
                        <Typography
                            variant='h4'
                            gutterBottom
                            fontWeight='700'
                        >
                            Title {params.id}
                        </Typography>

                        <Typography
                            component='p'
                            variant='h6'
                            gutterBottom
                            fontWeight='500'
                        >
                            {params.id}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quam. Cum veritatis minima quam quidem omnis, itaque vel minus sequi culpa aliquam dignissimos id nulla, animi optio in nesciunt sapiente?
                        </Typography>
                    </Box>
                </Container>
            </Box >

            <Box
                sx={{
                    paddingTop: '64px',
                    paddingBottom: '64px'
                }}
            >
                <Container>
                    <Slider {...settings}>
                        {project.images.map((image, index) => (
                            <Box
                                key={index}>
                                <img src={image} alt={`Project image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                            </Box>
                        ))}
                    </Slider>
                </Container>

            </Box>

            <Box
                sx={{
                    paddingTop: '64px',
                    paddingBottom: '64px'
                }}
            >

                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                        my={4}
                    >
                        <Typography
                            variant='h5'
                            gutterBottom
                            fontWeight='700'
                            py={2}
                        >
                            What We Did
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            {project.whatWeDid.map((item, index) => (
                                <Chip key={index} label={item} />
                            ))}
                        </Stack>

                    </Box>
                </Container>


            </Box>

            <Box
                sx={{
                    paddingTop: '64px',
                    paddingBottom: '64px'
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                        my={4}
                    >
                        <Typography
                            variant='h5'
                            gutterBottom
                            fontWeight='700'
                            py={2}
                        >
                            Technologies Used
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {project.technologies.map((tech, index) => (
                                <Chip key={index} label={tech} />
                            ))}
                        </Stack>
                    </Box>
                </Container>

            </Box >

            {/* LIST OF PROJECTS DISPLAYED HERE */}

        </Box >
    )
}

export default Project
