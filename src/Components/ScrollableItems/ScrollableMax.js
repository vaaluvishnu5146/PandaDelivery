import { Box, Typography } from "@mui/material";
import React from "react";
import IMAGES from "../../Assets/Images";

export default function ScrollableMax({ data = [] }) {
  return (
    <Box id="products-scroll-card">
      <Typography variant="h5" textAlign={"start"}>
        Best Choice
      </Typography>
      <Box sx={{ height: "30px" }}></Box>
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
              key={`food-card-${index}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                minWidth: "200px",
                height: "250px",
                borderRadius: "10px",
                margin: "0 15px 0 0",
                background: "#FFDDDA",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: "120px",
                  height: "120px",
                  backgroundImage: `url(${d.logo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></Box>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                color={"grey"}
                textAlign={"center"}
              >
                {d.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color={"grey"}
                textAlign={"center"}
              >
                {d.slogan}
              </Typography>
              <Box
                sx={{
                  height: "20px",
                }}
              ></Box>
              <Box
                sx={{
                  minWidth: "50px",
                  minHeight: "20px",
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body1">${d.price}</Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
