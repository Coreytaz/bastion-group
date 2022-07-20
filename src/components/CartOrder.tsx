import React from "react";
import { CartItem } from "../redux/slice/cartSlice";
import Button from "./Button/Button";
import { Input } from "./Input/Input";

type CartOrderProps = {
  items: CartItem[];
  totalPrice: number;
};

const CartOrder: React.FC<CartOrderProps> = ({ items, totalPrice }) => {
    

  return (
    <div className="cart-order">
      <div className="cart-order-title">
        <h1>Заказ</h1>
      </div>
      <h2 className="order-title">Контактная информация</h2>
      <form>
        <Input
          type="text"
          icon="user"
          name="Fname"
          placeholder="ФИО"
          required
        />
        <Input
          type="tel"
          icon="phone"
          name="tel"
          placeholder="Контактный телефон"
          required
        />
        <Input
          type="mail"
          icon="mail"
          name="mail"
          placeholder="Email"
          required
        />
        <Input
          type="text"
          icon="org"
          name="organi"
          placeholder="Организация / ИНН"
          required
        />
        <div className="order-totalPrice">
          {items.length > 0 && (
            <>
              <h1>Итого</h1>
              <span>{totalPrice.toFixed(2)} руб.</span>
            </>
          )}
        </div>
        <div className="order-btns">
          <Button icon="Shopping" appearance="primary">
            Оформить заказ
          </Button>
          <Button icon="Commercial" appearance="ghost">
            Коммерческое предложение
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CartOrder;
