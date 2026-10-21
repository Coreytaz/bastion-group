import { useSelector } from "react-redux";
import { setType } from "../redux/slice/filterSlice";
import { type RootState, useAppDispatch } from "../redux/store";

export default function TypeBlock() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.product);
  const active = useSelector((state: RootState) => state.filter.Type);
  const types = [...new Set(products.map((product) => product.type))];

  return (
    <ul>
      {types.map((type) => (
        <li key={type}>
          <button type="button" aria-pressed={active === type}
            className={active === type ? "active" : ""}
            onClick={() => dispatch(setType(type))}>{type}</button>
        </li>
      ))}
    </ul>
  );
}
