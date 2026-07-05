import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {app: appSlice,cart:cartSlice},
});


export default store; 