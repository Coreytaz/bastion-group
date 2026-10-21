import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartReducer from "./slice/cartSlice";
import filterReducer from "./slice/filterSlice";
import orderReducer from "./slice/orderSlice";
import productReducer from "./slice/productSlice";
import typeProductReducer from "./slice/typeProductSlice";

export const store = configureStore({
  reducer: {
    typeProduct: typeProductReducer,
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
