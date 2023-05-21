import { Box, Typography } from "@mui/material";
import React from "react";

export default function BadgeC({ label = "", sx = {} }) {
  return (
    <Box
      sx={{
        minWidth: "50px",
        minHeight: "20px",
        borderRadius: "20px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      <Typography variant="body1" fontWeight={"bold"}>
        {label}
      </Typography>
    </Box>
  );
}
