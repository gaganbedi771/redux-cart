import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 1,
    price:52,
    title: "Product 1",
    description: "This is product one",
  },
  {
    id: 2,
    price: 100,
    title: "Product 2",
    description: "This is product two",
  },
  { 
    id: 3,
    price: 150,
    title: "Product 3",
    description: "This is product three",
  }
];

const appSlice = createSlice({
  name: "app",
  initialState: {
    cartIsVisible: false, products: dummyProducts,
  },
  reducers: {
    toggleCartVisibility(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
