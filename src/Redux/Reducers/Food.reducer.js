import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "foods",
  initialState: {
    foods: [],
  },
  reducers: {
    saveAllFoods: (state, action) => {
      if (action.payload) {
        state.foods = [];
        state.foods.push(...action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveAllFoods } = foodSlice.actions;
export default foodSlice.reducer;
