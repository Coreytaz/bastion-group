import { createSlice } from "@reduxjs/toolkit";

export type filterstState = {
  Type: string;
  minPrice: number;
  maxPrice: number;
  Standart: string[];
};

const initialState: filterstState = {
  Type: "",
  minPrice: 0,
  maxPrice: 0,
  Standart: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStandard: (state, action) => {
      if (state.Standart.includes(action.payload)) {
        state.Standart.splice(
          state.Standart.findIndex((el) => el === action.payload),
          1
        );
      } else {
        state.Standart.push(action.payload);
      }
    },
    setType: (state, action) => {
      if (state.Type === action.payload) {
        state.Type = "";
      } else {
        state.Type = action.payload;
      }
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
  },
});

export const { setStandard, setType, setMaxPrice, setMinPrice } =
  filterSlice.actions;

export default filterSlice.reducer;
