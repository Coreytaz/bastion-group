import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type typeProductState = {
  id: string;
  name: string;
};

const initialState: Array<typeProductState> = [
  {
    id: "1",
    name: "Tube",
  },
  {
    id: "2",
    name: "Wall",
  },
];

export const typeProductSlice = createSlice({
  name: "typeProduct",
  initialState,
  reducers: {
    addType: (state, action: PayloadAction<typeProductState>) => {
      state.push(action.payload);
    },
  },
});

export const { addType } = typeProductSlice.actions;

export default typeProductSlice.reducer;
