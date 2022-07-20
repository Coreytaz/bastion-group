import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./slice/cartSlice";
import filterSlice from "./slice/filterSlice";
import productSlice from "./slice/productSlice";
import typeProductSlice from "./slice/typeProductSlice";

const store = configureStore({
  reducer: {
    typeProduct: typeProductSlice,
    product: productSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
