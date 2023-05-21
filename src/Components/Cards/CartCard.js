import { Box, Typography } from "@mui/material";
import React from "react";
import BadgeC from "../Badge/BadgeC";

export default function CartCard({ data = {} }) {
  return (
    <Box className="cartListItem">
      <Box className="cartItemDetails">
        <img src={data?.logo} alt="item" />
        <Box className="cartItemContent">
          <Typography variant="h6">{data?.name}</Typography>
          <Typography variant="caption">{data?.description}</Typography>
        </Box>
      </Box>
      <Box className="cartItemActions">
        <BadgeC
          sx={{
            width: "50px",
            background: "#FFFFFF",
          }}
          label={`$${data?.price}`}
        />
      </Box>
    </Box>
  );
}
