import Projects from "../layouts/sections/Projects";
import ContactForm from "../layouts/sections/ContactForm";
import Services from "../layouts/home/Services";
import Process from "../layouts/home/Process";

const Home = () => {
  return (
    <>
      <Services />
      <Process />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
