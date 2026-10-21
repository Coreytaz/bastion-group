import { useSelector } from "react-redux";
import { minusItem, plusItem } from "../redux/slice/cartSlice";
import { type RootState, useAppDispatch } from "../redux/store";

interface CountCartProps { id: string }

export default function CountCart({ id }: CountCartProps) {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.cart.items.find((item) => item.id === id)?.count ?? 0);
  if (!count) return null;

  return (
    <div className="content-count" aria-label="Количество товара">
      <button type="button" aria-label="Увеличить количество" onClick={() => dispatch(plusItem(id))}>+</button>
      <span aria-live="polite">{count}</span>
      <button type="button" aria-label="Уменьшить количество" onClick={() => dispatch(minusItem(id))}>−</button>
    </div>
  );
}
