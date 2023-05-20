import React from "react";
import { Box } from "@mui/material";
import Appbar from "../Components/AppBar/Appbar";
import SearchInput from "../Components/Inputs/SearchInput";
import ScrollableMini from "../Components/ScrollableItems/ScrollableMini";
import Restaurants from "../mocks/RestaurantsMock";
import ScrollableMax from "../Components/ScrollableItems/ScrollableMax";
import Foods from "../mocks/FoodMock";

export default function Home() {
  return (
    <Box>
      <Appbar />
      <Box
        sx={{
          padding: "0px 20px",
        }}
      >
        <SearchInput />
        <Box
          sx={{
            height: "30px",
          }}
        ></Box>
        <ScrollableMini data={Restaurants} />
        <Box
          sx={{
            height: "30px",
          }}
        ></Box>
        <ScrollableMax data={Foods} />
      </Box>
    </Box>
  );
}
