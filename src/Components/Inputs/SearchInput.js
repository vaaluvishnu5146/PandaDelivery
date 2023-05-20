import { Box, TextField } from "@mui/material";
import React from "react";
import ICONS from "../../Assets/Images/Icons";
import "./Inputs.css";

export default function SearchInput() {
  return (
    <Box
      id="inputWrapper"
      sx={{
        width: "100%",
        height: "60px",
        border: "1px solid #c2c2c2",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        boxSizing: "border-box",
      }}
    >
      <ICONS.Search fontSize="medium" color="disabled" />
      <input
        placeholder="Search Food"
        style={{
          width: "100%",
          height: "90%",
          outline: "none",
          border: "none",
        }}
      />
    </Box>
  );
}
