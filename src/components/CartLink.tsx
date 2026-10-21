import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import Shopping from "../assets/shopping.svg";
import Count from "../assets/count.svg";

export default function CartLink() {
  const count = useSelector((state: RootState) => state.cart.items.reduce((total, item) => total + item.count, 0));
  return (
    <span>
      <img src={Shopping} alt="" />
      {count > 0 && <><span className="count">{count}</span><img className="red" src={Count} alt="" /></>}
    </span>
  );
}
