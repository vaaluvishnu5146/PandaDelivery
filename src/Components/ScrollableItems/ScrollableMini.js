import { Box } from "@mui/material";
import React from "react";
import IMAGES from "../../Assets/Images";

export default function ScrollableMini({ data = [] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "no-wrap",
        backgroundRepeat: "no-repeat",
        overflowX: "scroll",
      }}
    >
      {data &&
        data.map((d, index) => (
          <Box
            sx={{
              minWidth: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundImage: `url(${d.logo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              margin: "0 15px 0 0",
            }}
          ></Box>
        ))}
    </Box>
  );
}
