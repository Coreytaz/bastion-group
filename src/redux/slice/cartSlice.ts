import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
  standart: string;
  count: number;
}

interface CartState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartState = { totalPrice: 0, items: [] };

function recalculateTotal(state: CartState): void {
  state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<CartItem>) {
      const existing = state.items.find((item) => item.id === payload.id);
      if (existing) {
        existing.count += 1;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
      recalculateTotal(state);
    },
    minusItem(state, { payload }: PayloadAction<string>) {
      const item = state.items.find((current) => current.id === payload);
      if (!item) return;
      if (item.count <= 1) {
        state.items = state.items.filter((current) => current.id !== payload);
      } else {
        item.count -= 1;
      }
      recalculateTotal(state);
    },
    plusItem(state, { payload }: PayloadAction<string>) {
      const item = state.items.find((current) => current.id === payload);
      if (item) item.count += 1;
      recalculateTotal(state);
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== payload);
      recalculateTotal(state);
    },
    clearItems() {
      return { totalPrice: 0, items: [] };
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem, plusItem } = cartSlice.actions;
export default cartSlice.reducer;
