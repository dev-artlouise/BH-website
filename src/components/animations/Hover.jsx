import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Hover = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05, // Slightly expands the card
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Shadow for emphasis
        transition: { duration: 0.3 }, // Duration of hover animation
      }}
    >
      {children}
    </motion.div>
  );
};

// PropTypes definition
Hover.propTypes = {
  children: PropTypes.node.isRequired, // children prop must be a React node and required
};

export default Hover;
