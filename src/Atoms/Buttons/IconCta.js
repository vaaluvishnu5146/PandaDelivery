import React from "react";
import { IconButton } from "@mui/material";

export default function IconCta({ label = "", Icon = null }) {
  return (
    <IconButton aria-label={label}>
      <Icon />
    </IconButton>
  );
}
