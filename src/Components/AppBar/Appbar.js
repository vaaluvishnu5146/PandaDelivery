import React from "react";
import { Box } from "@mui/material";
import IconCta from "../../Atoms/Buttons/IconCta";
import ICONS from "../../Assets/Images/Icons";
import IMAGES from "../../Assets/Images";

export default function Appbar({ startEnhancer = null, endEnhancer = null }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
        padding: "10px 20px",
        boxSizing: "border-box",
      }}
    >
      {startEnhancer}
      {endEnhancer}
    </Box>
  );
}
