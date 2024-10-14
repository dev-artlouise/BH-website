import PropTypes from "prop-types";
import { Button, Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ActionButtonComponent = ({ path, label, size, styles, fullWidth }) => {
  return (
    <Button
      LinkComponent={RouterLink}
      to={path}
      size={size}
      sx={styles}
      fullWidth={fullWidth}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {label}
        <Box ml={1}>
          <ChevronRight />
        </Box>
      </Stack>
    </Button>
  );
};

// Props validation using PropTypes
ActionButtonComponent.propTypes = {
  path: PropTypes.string.isRequired, // Expect a string for the path
  label: PropTypes.string.isRequired, // Expect a string for the button label
  size: PropTypes.oneOf(["small", "medium", "large"]), // Expect specific sizes
  styles: PropTypes.object, // Expect an object for custom styles
  fullWidth: PropTypes.bool, // Expect a boolean for full width
};

// Default prop values in case some props are not provided
ActionButtonComponent.defaultProps = {
  size: "medium", // Default size if not provided
  styles: {}, // Empty object for styles if not provided
  fullWidth: false, // Default to not full width
};

export default ActionButtonComponent;
