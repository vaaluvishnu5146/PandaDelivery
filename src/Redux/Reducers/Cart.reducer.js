import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (action.payload) {
        state.cart.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
