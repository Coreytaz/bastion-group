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
    name: "Опора тавровая хомутовая ТХ",
    type: "Опора",
    price: 849.9,
    standart: "ГОСТ 14911-82",
    image: Img,
  },
  {
    id: "2",
    name: "Опора корпусная приварная КП",
    type: "Опора",
    price: 349.9,
    standart: "ГОСТ 14911-80",
    image: Img,
  },
  {
    id: "3",
    name: "КХ",
    type: "Опора",
    price: 900,
    standart: "ГОСТ 14911-82",
    image: Img,
  },
  {
    id: "4",
    name: "хомутовая КХ",
    type: "Хомутовая",
    price: 500,
    standart: "ГОСТ 99999-82",
    image: Img,
  },
  {
    id: "5",
    name: "Приварная КП",
    type: "Приварная",
    price: 700,
    standart: "ГОСТ 99999-82",
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
