import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Reveal = ({ children }) => {
  const revealAnimation = {
    hidden: { opacity: 0, scale: 0.9 }, // Start state: invisible and scaled down
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }, // Duration for the animation
    },
  };

  return (
    <div>
      <motion.div
        initial="hidden" // Start state
        whileInView="visible" // Animate to visible state when in view
        variants={revealAnimation} // Apply the defined variants
        viewport={{ once: true }} // Allow animation to trigger again if scrolled out and back in
      >
        {children}
      </motion.div>
    </div>
  );
};

// PropTypes definition
Reveal.propTypes = {
  children: PropTypes.node.isRequired, // children prop must be a React node and required
};

export default Reveal;
