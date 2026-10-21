import { useSelector } from "react-redux";
import { setStandard } from "../../redux/slice/filterSlice";
import { type RootState, useAppDispatch } from "../../redux/store";

export default function StandartList() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.product);
  const selected = useSelector((state: RootState) => state.filter.Standart);
  const standards = [...new Set(products.map((product) => product.standart))];

  return (
    <ul>
      {standards.map((standard) => (
        <li key={standard}>
          <button type="button" aria-pressed={selected.includes(standard)}
            className={selected.includes(standard) ? "active" : ""}
            onClick={() => dispatch(setStandard(standard))}>{standard}</button>
        </li>
      ))}
    </ul>
  );
}
