import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import CartItemBlock from "../CartItemBlock";
import CartOrder from "../CartOrder";
import "./CartBlock.scss";

export default function CartBlock() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  return (
    <div className="container">
      <h1 className="cart-title">Корзина</h1>
      <div className="cart-inner">
        <CartOrder items={items} totalPrice={totalPrice} />
        <div className="cart-content">
          <div className="cart-content-items"><CartItemBlock items={items} /></div>
        </div>
      </div>
    </div>
  );
}
