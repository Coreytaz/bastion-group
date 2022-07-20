import React from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../helper/useInput";
import { CartItem, clearItems } from "../redux/slice/cartSlice";
import { orderItem, OrderSliceState } from "../redux/slice/orderSlice";
import { useAppDispatch } from "../redux/store";
import Button from "./Button/Button";
import { Input } from "./Input/Input";

type CartOrderProps = {
  items: CartItem[];
  totalPrice: number;
};

const CartOrder: React.FC<CartOrderProps> = ({ items, totalPrice }) => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const Fullname = useInput("", { Fname: true });
  const Phone = useInput("", { isNumber: true });
  const mail = useInput("", { Email: true });
  const org = useInput("", {});

  const onClickOrder = () => {
    if (items.length === 0) {
      alert("У вас пустая корзина!");
    } else {
      const item: OrderSliceState = {
        information: {
          fullName: Fullname.value,
          phone: Phone.value,
          email: mail.value,
          organization: org.value,
        },
        totalPrice: totalPrice,
        items: items,
      };
      dispatch(orderItem(item));
      dispatch(clearItems());
      Fullname.onClear();
      Phone.onClear();
      mail.onClear();
      org.onClear();
      alert("Заказ отправлен!");
      console.log(item);
      return navigate("/");
    }
  };

  return (
    <div className="cart-order">
      <div className="cart-order-title">
        <h1>Заказ</h1>
      </div>
      <h2 className="order-title">Контактная информация</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        {Fullname.isDirty && Fullname.Fullname && (
          <div style={{ color: "red" }}>Введите корректные данные</div>
        )}
        <Input
          type="text"
          icon="user"
          name="Fname"
          placeholder="ФИО"
          onChange={(e) => Fullname.onChange(e)}
          onBlur={(e) => Fullname.onBlur()}
          value={Fullname.value}
          required
        />
        {Phone.isDirty && Phone.isNumber && (
          <div style={{ color: "red" }}>Введите корректные номер</div>
        )}
        <Input
          type="tel"
          icon="phone"
          name="tel"
          placeholder="Контактный телефон"
          onChange={(e) => Phone.onChange(e)}
          onBlur={(e) => Phone.onBlur()}
          value={Phone.value}
          required
        />
        {mail.isDirty && mail.Email && (
          <div style={{ color: "red" }}>Введите корректные E-mail</div>
        )}
        <Input
          type="mail"
          icon="mail"
          name="mail"
          placeholder="Email"
          onChange={(e) => mail.onChange(e)}
          onBlur={(e) => mail.onBlur()}
          value={mail.value}
          required
        />
        <Input
          type="text"
          icon="org"
          name="organi"
          placeholder="Организация / ИНН"
          onChange={(e) => org.onChange(e)}
          onBlur={(e) => org.onBlur()}
          value={org.value}
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
          <Button
            icon="Shopping"
            appearance="primary"
            onClick={() => onClickOrder()}
          >
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
