import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

type InformationPeople = {
  fullName: string;
  phone: string;
  email: string;
  organization: string;
};

export interface OrderSliceState {
  information: InformationPeople;
  totalPrice: number;
  items: CartItem[];
}

const initialState: OrderSliceState = {
  information: {
    fullName: "",
    phone: "",
    email: "",
    organization: "",
  },
  items: [],
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderItem(state, action: PayloadAction<OrderSliceState>) {
      state.information = action.payload.information;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { orderItem } = orderSlice.actions;

export default orderSlice.reducer;
