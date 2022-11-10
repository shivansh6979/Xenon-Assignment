import { configureStore } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/ProductReducers";

export const store = configureStore({
  reducer: {
    ProductList: productListReducer,
    ProductDetails: productDetailsReducer,
  },
});
