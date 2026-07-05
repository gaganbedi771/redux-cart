import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggleCartVisibility(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
