import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Img from "../../assets/ItemsBlock/items/item.jpg";

export type productState = {
  id: string;
  name: string;
  type: string;
  price: number;
  standart: string;
  image: string;
};

const initialState: productState[] = [
  {
    id: "1",
    name: "Tube 1",
    type: "Tube",
    price: 100,
    standart: "ГОСТ",
    image: Img,
  },
  {
    id: "2",
    name: "Wall 1",
    type: "Wall",
    price: 300,
    standart: "СНИП",
    image: Img,
  },
  {
    id: "3",
    name: "Tube 2",
    type: "Tube",
    price: 400,
    standart: "ГОСТ",
    image: Img,
  },
  {
    id: "4",
    name: "Wall 2",
    type: "Wall",
    price: 500,
    standart: "ГОСТ",
    image: Img,
  },
  {
    id: "5",
    name: "Wall 3",
    type: "Wall",
    price: 700,
    standart: "ТОСТ",
    image: Img,
  },
];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<productState>) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
