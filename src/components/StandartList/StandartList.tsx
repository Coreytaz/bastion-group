import React from "react";
import { useSelector } from "react-redux";
import { setStandard } from "../../redux/slice/filterSlice";
import { RootState, useAppDispatch } from "../../redux/store";

const StandartList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { product, filter } = useSelector((state: RootState) => state);
  const standart = Array.from(new Set(product.map((item) => item.standart)));
  const standart2 = filter.Standart;

  return (
    <ul>
      {standart.map((item, i) => (
        <li
          key={i}
          onClick={() => dispatch(setStandard(item))}
          className={standart2.includes(item) ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default StandartList;
