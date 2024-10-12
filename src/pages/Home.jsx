import React from "react";
import Hero from "../layouts/sections/Hero";
import Projects from "../layouts/sections/Projects";
import Testimonials from "../layouts/sections/Testimonials";
import ContactForm from "../layouts/sections/ContactForm";
import Services from "../layouts/home/Services";
import Process from "../layouts/home/Process";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
