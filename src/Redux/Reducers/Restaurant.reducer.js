import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
  },
  reducers: {
    // SAVE_ALL_RESTAURANTS ACTION
    saveAllRestaurants: (state, action) => {
      if (action.payload) {
        state.restaurants.push(...action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveAllRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
