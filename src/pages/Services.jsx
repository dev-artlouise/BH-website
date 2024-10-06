import {
  Container,
  Box,
  Typography,
  Card,
  Avatar,
  Grid,
  CardContent,
} from "@mui/material";
import {
  Monitor,
  Component,
  Smartphone,
  SearchCheck,
  Lightbulb,
  SlidersVertical,
  SquareTerminal,
} from "lucide-react";

import ButtonComponent from "../components/common/ButtonComponent";

import ImageDiscuss from "../assets/services.png";

import OurServices from "../layouts/services/OurServices";
import WhatWeDo from "../layouts/services/WhatWeDo";
import WorkWithUs from "../layouts/sections/WorkWithUs";
import Process from "../layouts/home/Process";
import SeenOn from "../layouts/services/SeenOn";

import { companies, process } from "../data";

const Services = () => {
  return (
    <>
      {/* <Container> */}
      <Box>
        <OurServices />
        <WhatWeDo />
        <WorkWithUs />
        <SeenOn data={companies} />
        <Process data={process} />

        <Box
          sx={{
            background: "#f3f6ff",
            position: "relative",
          }}
        >
          <Box
            sx={{
              paddingTop: "64px",
              paddingBottom: "64px",
            }}
          >
            <Box
              sx={{
                // marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" }, // Responsive flex direction
              }}
            >
              <Typography variant="h6" component="h6">
                Have an idea to discuss ?
              </Typography>

              <Box
                sx={{
                  marginLeft: {
                    xs: "0px",
                    sm: "16px",
                  },
                  marginTop: {
                    xs: "16px",
                    sm: "0px",
                  },
                }}
              >
                <ButtonComponent
                  label="Contact us"
                  variant="contained"
                  size="large"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default Services;
