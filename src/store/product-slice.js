import { createSlice } from "@reduxjs/toolkit";
import { centsToDollars } from "../helper";

const initialState = {
  products: [],
  productsClone: [],
  filteredProducts: [],
  productInfo: {},
  filterOptions: {
    categories: [],
    priceRange: {
      min: 0,
      max: Infinity,
    },
  },
  isLoading: false,
};

const filterProducts = (products, filterOptions) => {
  let filteredProducts = [];

  filteredProducts = products
    .filter((item) => {
      return filterOptions.categories.length === 0
        ? item
        : filterOptions.categories.includes(item.category);
    })
    .filter(
      (item) =>
        item.price >= filterOptions.priceRange.min &&
        item.price <= filterOptions.priceRange.max
    );

  return filteredProducts;
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.productsClone = action.payload;
    },
    filterProductsByCat(state, action) {
      if (action.payload.isChecked) {
        state.filterOptions.categories.push(action.payload.filterCat);
      } else {
        state.filterOptions.categories = state.filterOptions.categories.filter(
          (cat) => cat !== action.payload.filterCat
        );
      }

      state.filteredProducts = filterProducts(
        state.productsClone,
        state.filterOptions
      );

      state.products = state.filteredProducts;
    },
    filterProductsByPrice(state, action) {
      state.filterOptions.priceRange.min = action.payload.minPrice;
      state.filterOptions.priceRange.max = action.payload.maxPrice;

      state.filteredProducts = filterProducts(
        state.productsClone,
        state.filterOptions
      );

      state.products = state.filteredProducts;
    },
    setProductInfo(state, action) {
      state.productInfo = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
