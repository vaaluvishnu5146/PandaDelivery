import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import foodSlice from "./Reducers/Food.reducer";
import restaurantReducer from "./Reducers/Restaurant.reducer";
import cartReducer from "./Reducers/Cart.reducer";

export default configureStore({
  //ROOT_REDUCER
  reducer: {
    cartReducer: cartReducer,
    foodReducer: foodSlice,
    restaurantReducer: restaurantReducer,
  },
});
