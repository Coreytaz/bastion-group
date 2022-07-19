import React from "react";
import { setMaxPrice, setMinPrice } from "../redux/slice/filterSlice";
import { useAppDispatch } from "../redux/store";

const PriceFilter: React.FC = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const dispatch = useAppDispatch();

  const filter = () => {
    dispatch(setMinPrice(+from));
    dispatch(setMaxPrice(+to));
  };

  React.useEffect(() => {
    setTimeout(() => filter(), 500);
  }, [from, to]);

  return (
    <>
      <span>
        <label htmlFor="from">От</label>
        <input
          type="number"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </span>
      <span>
        <label htmlFor="to">До</label>
        <input
          type="number"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </span>
    </>
  );
};

export default PriceFilter;
