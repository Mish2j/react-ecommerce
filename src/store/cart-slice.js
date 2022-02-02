import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalPrice: 0, items: [], isLoading: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleLoader(state) {
      state.isLoading = !state.isLoading;
    },
    replaceCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const { newItem, newItemQuant = 1 } = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItemQuant;
      } else {
        state.items.push({ ...newItem, quantity: newItemQuant });
      }

      state.totalPrice += newItem.price * newItemQuant;
    },
    decreaseQuantity(state, action) {
      const { itemId } = action.payload;
      const { newQuantity = 1 } = action.payload;

      const updatedItem = state.items.find((item) => item.id === itemId);
      updatedItem.quantity -= newQuantity;

      if (updatedItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }

      state.totalPrice -= updatedItem.price * newQuantity;
    },

    removeItem(state, action) {
      const removedItemId = action.payload;
      const removedItem = state.items.find((item) => item.id === removedItemId);

      state.items = state.items.filter((item) => item.id !== removedItemId);
      state.totalPrice -= removedItem.price * removedItem.quantity;
    },
    clearCart(state) {
      state.items = initialState.items;
      state.totalPrice = initialState.totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
