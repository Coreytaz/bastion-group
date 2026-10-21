import { describe, expect, it } from "vitest";
import reducer, { addItem, minusItem, plusItem, removeItem, clearItems, type CartItem } from "./cartSlice";

const product: CartItem = {
  id: "product-1", name: "Опора", price: 349.9, image: "item.jpg",
  type: "Опора", standart: "ГОСТ", count: 1,
};

const empty = () => reducer(undefined, { type: "@@init" });

describe("cart reducer", () => {
  it("adds, increments and decrements product quantities", () => {
    let state = reducer(empty(), addItem(product));
    expect(state.totalPrice).toBe(349.9);
    state = reducer(state, addItem(product));
    expect(state.items[0]?.count).toBe(2);
    expect(state.totalPrice).toBeCloseTo(699.8);
    state = reducer(state, minusItem(product.id));
    expect(state.items[0]?.count).toBe(1);
    expect(state.totalPrice).toBeCloseTo(349.9);
    state = reducer(state, minusItem(product.id));
    expect(state.items).toHaveLength(0);
    expect(state.totalPrice).toBe(0);
  });

  it("does not allow negative quantities, including for missing products", () => {
    const state = reducer(empty(), minusItem(product.id));
    expect(state.items).toHaveLength(0);
    expect(state.totalPrice).toBe(0);
  });

  it("updates total on removal and clear", () => {
    let state = reducer(empty(), addItem(product));
    state = reducer(state, plusItem(product.id));
    state = reducer(state, removeItem(product.id));
    expect(state.totalPrice).toBe(0);
    expect(reducer(reducer(empty(), addItem(product)), clearItems())).toEqual(empty());
  });
});
