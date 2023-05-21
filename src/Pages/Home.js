import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../Components/AppBar/Appbar";
import SearchInput from "../Components/Inputs/SearchInput";
import ScrollableMini from "../Components/ScrollableItems/ScrollableMini";
import Restaurants from "../mocks/RestaurantsMock";
import ScrollableMax from "../Components/ScrollableItems/ScrollableMax";
import Foods from "../mocks/FoodMock";
import { saveAllRestaurants } from "../Redux/Reducers/Restaurant.reducer";
import { saveAllFoods } from "../Redux/Reducers/Food.reducer";
import { useDispatch, useSelector } from "react-redux";
import IconCta from "../Atoms/Buttons/IconCta";
import ICONS from "../Assets/Images/Icons";
import IMAGES from "../Assets/Images";

export default function Home() {
  const dispatcher = useDispatch();
  const { foodReducer, restaurantReducer } = useSelector((state) => state);
  const { foods = [] } = foodReducer;
  const { restaurants = [] } = restaurantReducer;
  // HERE DISPATCHING ACTION
  // STORE DATA IN REDUX
  useEffect(() => {
    dispatcher(saveAllRestaurants(Restaurants));
    dispatcher(saveAllFoods(Foods));
    return () => {};
  }, []);

  return (
    <Box>
      <Appbar
        startEnhancer={<IconCta Icon={ICONS.Menu} />}
        midEnhancer={null}
        endEnhancer={
          <Box
            sx={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              backgroundImage: `url(${IMAGES.avatar})`,
              backgroundSize: "contain",
            }}
          ></Box>
        }
      />
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
        <ScrollableMini data={restaurants} />
        <Box
          sx={{
            height: "30px",
          }}
        ></Box>
        <ScrollableMax data={foods} />
      </Box>
    </Box>
  );
}
