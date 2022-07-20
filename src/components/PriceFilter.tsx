import React from "react";
import { useSelector } from "react-redux";
import { setMaxPrice, setMinPrice } from "../redux/slice/filterSlice";
import { RootState, useAppDispatch } from "../redux/store";

const PriceFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const prices = useSelector((state: RootState) =>
    state.product.map((item) => item.price)
  );
  const minPrice = Math.min.apply(null, prices);
  const maxPrice = Math.max.apply(null, prices);

  const [from, setFrom] = React.useState(0);
  const [to, setTo] = React.useState(maxPrice);

  const filter = () => {
    dispatch(setMinPrice(+from));
    dispatch(setMaxPrice(+to));
  };

  React.useEffect(() => {
    setTimeout(() => filter(), 1000);
  }, [from, to]);

  const addMinRange = (price: number, gap: number = 50) => {
    if (to - price <= gap) {
      dispatch(setMinPrice(+from - gap));
      setFrom(to - gap);
    } else {
      dispatch(setMinPrice(price));
      setFrom(price);
    }
  };

  const addMaxRange = (price: number, gap: number = 50) => {
    if (price - from <= gap) {
      dispatch(setMaxPrice(+from + gap));
      setTo(from + gap);
    } else {
      dispatch(setMaxPrice(price));
      setTo(price);
    }
  };

  return (
    <>
      <div>
        <span>
          <label htmlFor="from">От</label>
          <input
            placeholder={minPrice.toString()}
            max={maxPrice - Number(to)}
            type="number"
            name="from"
            min={0}
            value={from}
            onChange={(e) => setFrom(+e.target.value)}
          />
        </span>
        <span>
          <label htmlFor="to">До</label>
          <input
            placeholder={maxPrice.toString()}
            max={maxPrice}
            type="number"
            name="to"
            value={to}
            onChange={(e) => setTo(+e.target.value)}
          />
        </span>
      </div>
      <div className="Slider">
        <div
          className="track"
          style={{
            background: "red",
          }}
        ></div>
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={from}
          onChange={(event) => addMinRange(+event.target.value)}
        />
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={to}
          onChange={(event) => addMaxRange(+event.target.value)}
        />
      </div>
    </>
  );
};

export default PriceFilter;
