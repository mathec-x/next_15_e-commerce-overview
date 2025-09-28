import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import React from "react";

const FlexBox: React.FC<BoxProps> = (props) => {
  return <Box display="flex" alignItems="center" justifyContent="center" {...props} />;
}

export default FlexBox;