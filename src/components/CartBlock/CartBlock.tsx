import React from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import Alert from "../../assets/alert.svg";

import "./CartBlock.scss";
import CartItemBlock from "../CartItemBlock";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import CartOrder from "../CartOrder";

const CartBlock: React.FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  console.log(items, totalPrice);

  return (
    <div className="container">
      <div className="cart-title">Корзина</div>
      <div className="cart-inner">
        <CartOrder items={items} totalPrice={totalPrice}/>
        <div className="cart-content">
          <div className="cart-content-title">
            <img src={Alert} alt="" />
            <span>
              Извините, но указанное ранее количество товара недоступно.
              Установлено ближайшее доступное значение.
            </span>
          </div>
          <div className="cart-content-items">
            <CartItemBlock items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
