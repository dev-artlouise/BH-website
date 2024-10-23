import { Outlet, useLocation } from "react-router-dom";
import AppbarComponent from "./layouts/AppbarComponent";
import Footer from "./layouts/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";
import bg from "./assets/bg-1.jpg";
import Hero from "./layouts/sections/Hero";

import patternBg from "./assets/Telegram Desktop/pattern2.png";

import { useViewportScroll, motion, useTransform } from "framer-motion";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const fullbackgroundStyle = {
    // backgroundImage: `url(${patternBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "sticky",
    top: 0,
    minHeight: "120vh",
  };

  // Set up Framer Motion scroll tracking
  // const { scrollY } = useViewportScroll();

  // Parallax effect: interpolating scroll value to move background image
  // const yOffset = useTransform(scrollY, [0, 500], [0, 200]); // Adjust the range [0, 500] and the parallax effect [0, 200] as needed

  return (
    <QueryClientProvider client={queryClient}>
      <AppbarComponent />
      <Box
        sx={
          isHomePage && {
            ...fullbackgroundStyle,
          }
        }
      >
        {isHomePage && (
          <motion.div>
            {/* You can include the Hero section here */}
            <Hero />
          </motion.div>
        )}
      </Box>

      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
