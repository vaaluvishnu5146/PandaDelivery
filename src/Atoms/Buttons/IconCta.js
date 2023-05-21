import React from "react";
import { IconButton } from "@mui/material";

export default function IconCta({
  label = "",
  Icon = null,
  onClick = () => {},
}) {
  return (
    <IconButton aria-label={label} onClick={onClick}>
      <Icon />
    </IconButton>
  );
}
