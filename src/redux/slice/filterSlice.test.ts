import { describe, expect, it } from "vitest";
import reducer, { resetFilters, setPriceRange, setStandard, setType } from "./filterSlice";

const empty = () => reducer(undefined, { type: "@@init" });

describe("catalog filters", () => {
  it("starts with no upper price bound, so catalog items remain visible", () => {
    const state = empty();
    expect(state.minPrice).toBe(0);
    expect(state.maxPrice).toBeNull();
  });

  it("toggles type and standards", () => {
    let state = reducer(empty(), setType("Опора"));
    state = reducer(state, setStandard("ГОСТ"));
    expect(state.Type).toBe("Опора");
    expect(state.Standart).toEqual(["ГОСТ"]);
    state = reducer(state, setStandard("ГОСТ"));
    expect(state.Standart).toEqual([]);
  });

  it("normalizes negative price and clears all filters", () => {
    const state = reducer(empty(), setPriceRange({ min: -10, max: 500 }));
    expect(state.minPrice).toBe(0);
    expect(state.maxPrice).toBe(500);
    expect(reducer(state, resetFilters())).toEqual(empty());
  });
});
