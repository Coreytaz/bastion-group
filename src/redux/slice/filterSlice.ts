import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  Type: string;
  minPrice: number;
  maxPrice: number | null;
  Standart: string[];
}

const initialState: FilterState = {
  Type: "",
  minPrice: 0,
  maxPrice: null, // no upper limit until the user sets one
  Standart: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStandard(state, { payload }: PayloadAction<string>) {
      if (state.Standart.includes(payload)) {
        state.Standart = state.Standart.filter((value) => value !== payload);
      } else {
        state.Standart.push(payload);
      }
    },
    setType(state, { payload }: PayloadAction<string>) {
      state.Type = state.Type === payload ? "" : payload;
    },
    setPriceRange(state, { payload }: PayloadAction<{ min: number; max: number | null }>) {
      state.minPrice = Math.max(0, payload.min);
      state.maxPrice = payload.max === null ? null : Math.max(state.minPrice, payload.max);
    },
    resetFilters() {
      return { ...initialState, Standart: [] };
    },
  },
});

export const { setStandard, setType, setPriceRange, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
