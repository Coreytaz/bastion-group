import { useSelector } from "react-redux";
import { setPriceRange } from "../redux/slice/filterSlice";
import { type RootState, useAppDispatch } from "../redux/store";

export default function PriceFilter() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.product);
  const { minPrice, maxPrice } = useSelector((state: RootState) => state.filter);
  const limit = Math.ceil(Math.max(0, ...products.map((product) => product.price)));
  const from = Math.min(minPrice, limit);
  const to = Math.min(maxPrice ?? limit, limit);

  const updateRange = (min: number, max: number) => {
    dispatch(setPriceRange({ min: Math.max(0, Math.min(min, max)), max: Math.min(limit, Math.max(min, max)) }));
  };

  return (
    <div className="price-control">
      <div className="price-fields">
        <span>
          <label htmlFor="price-from">От</label>
          <input id="price-from" type="number" min={0} max={to} value={from}
            onChange={(event) => updateRange(Number(event.target.value), to)} />
        </span>
        <span>
          <label htmlFor="price-to">До</label>
          <input id="price-to" type="number" min={from} max={limit} value={to}
            onChange={(event) => updateRange(from, Number(event.target.value))} />
        </span>
      </div>
      <div className="Slider" aria-label="Диапазон цен">
        <div className="track" />
        <input aria-label="Минимальная цена" type="range" min={0} max={limit} value={from}
          onChange={(event) => updateRange(Number(event.target.value), to)} />
        <input aria-label="Максимальная цена" type="range" min={0} max={limit} value={to}
          onChange={(event) => updateRange(from, Number(event.target.value))} />
      </div>
    </div>
  );
}
