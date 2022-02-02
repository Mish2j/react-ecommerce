import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import modalSlice from "./modal-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
