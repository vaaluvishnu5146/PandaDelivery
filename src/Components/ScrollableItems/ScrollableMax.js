import { Box, Typography } from "@mui/material";
import React from "react";
import IMAGES from "../../Assets/Images";
import { useNavigate } from "react-router-dom";
import BadgeC from "../Badge/BadgeC";

export default function ScrollableMax({ data = {} }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h5" textAlign={"start"}>
        Best Choice
      </Typography>
      <Box sx={{ height: "30px" }}></Box>
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
              onClick={() => navigate(`/food/${d?.id}`)}
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
              <BadgeC
                label={`$${d.price}`}
                sx={{
                  background: "#FFFFFF",
                }}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
