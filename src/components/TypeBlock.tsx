import React from "react";
import { useSelector } from "react-redux";
import { setType } from "../redux/slice/filterSlice";
import { RootState, useAppDispatch } from "../redux/store";

const TypeBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { product, filter } = useSelector((state: RootState) => state);
  const types = Array.from(new Set(product.map((item) => item.type)));
  const typeActive = filter.Type;

  return (
    <ul>
      {types.map((item, i) => (
        <li
          key={i}
          onClick={() => dispatch(setType(item))}
          className={typeActive.includes(item) ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TypeBlock;
