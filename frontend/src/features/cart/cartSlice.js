import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { productId: { product, qty } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items[product.id] = {
        product,
        qty: 1,
      };
    },

    incrementQty: (state, action) => {
      const id = action.payload;
      state.items[id].qty += 1;
    },

    decrementQty: (state, action) => {
      const id = action.payload;
      if (state.items[id].qty === 1) {
        delete state.items[id];
      } else {
        state.items[id].qty -= 1;
      }
    },
  },
});

export const { addToCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
