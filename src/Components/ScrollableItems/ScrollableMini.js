import { Box } from "@mui/material";
import React from "react";
import IMAGES from "../../Assets/Images";

export default function ScrollableMini({ data = [] }) {
  return (
    <Box
      className="scrollable"
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
            key={`restaurant-clickable-icon-${index}`}
            sx={{
              minWidth: "75px",
              height: "75px",
              borderRadius: "50%",
              backgroundImage: `url(${d.logo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              margin: "0 15px 0 0",
              border: "2px solid #dcdcdc",
            }}
          ></Box>
        ))}
    </Box>
  );
}
