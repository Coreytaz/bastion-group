import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../helper/useInput";
import { type CartItem, clearItems } from "../redux/slice/cartSlice";
import { orderItem, type OrderSliceState } from "../redux/slice/orderSlice";
import { useAppDispatch } from "../redux/store";
import Button from "./Button/Button";
import { Input } from "./Input/Input";

interface CartOrderProps { items: CartItem[]; totalPrice: number }

export default function CartOrder({ items, totalPrice }: CartOrderProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");
  const fullName = useInput("", { isEmpty: true, Fname: true });
  const phone = useInput("", { isEmpty: true, Phone: true });
  const email = useInput("", { isEmpty: true, Email: true });
  const organization = useInput("", { isEmpty: true });
  const valid = fullName.inputValid && phone.inputValid && email.inputValid && organization.inputValid;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length || !valid) {
      setMessage("Добавьте товары и корректно заполните контактные данные.");
      return;
    }
    const order: OrderSliceState = {
      information: {
        fullName: fullName.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        organization: organization.value.trim(),
      },
      items: items.map((item) => ({ ...item })),
      totalPrice,
    };
    dispatch(orderItem(order));
    dispatch(clearItems());
    // There is no backend in this project. Do not claim that a request was submitted to a server.
    window.alert("Заказ сохранён в приложении. Отправка на сервер не настроена.");
    navigate("/");
  }

  function downloadSpecification() {
    if (!items.length) return;
    const lines = ["Спецификация товаров — Бастион Груп", "", ...items.map((item) =>
      `${item.name} (${item.standart}) — ${item.count} шт. × ${item.price.toFixed(2)} руб.`),
      "", `Итого: ${totalPrice.toFixed(2)} руб.`];
    const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "bastion-specification.txt";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="cart-order">
      <div className="cart-order-title"><h2>Заказ</h2></div>
      <h3 className="order-title">Контактная информация</h3>
      <form onSubmit={onSubmit} noValidate>
        <Input type="text" icon="user" name="fullName" placeholder="ФИО" autoComplete="name"
          onChange={fullName.onChange} onBlur={fullName.onBlur} value={fullName.value}
          aria-invalid={fullName.isDirty && !fullName.inputValid} required />
        {fullName.isDirty && !fullName.inputValid && <p className="field-error">Укажите имя и фамилию.</p>}
        <Input type="tel" icon="phone" name="phone" placeholder="Контактный телефон" autoComplete="tel"
          onChange={phone.onChange} onBlur={phone.onBlur} value={phone.value}
          aria-invalid={phone.isDirty && !phone.inputValid} required />
        {phone.isDirty && !phone.inputValid && <p className="field-error">Введите телефон цифрами.</p>}
        <Input type="email" icon="mail" name="email" placeholder="Email" autoComplete="email"
          onChange={email.onChange} onBlur={email.onBlur} value={email.value}
          aria-invalid={email.isDirty && !email.inputValid} required />
        {email.isDirty && !email.inputValid && <p className="field-error">Введите корректный email.</p>}
        <Input type="text" icon="org" name="organization" placeholder="Организация / ИНН"
          onChange={organization.onChange} onBlur={organization.onBlur} value={organization.value}
          aria-invalid={organization.isDirty && !organization.inputValid} required />
        {organization.isDirty && !organization.inputValid && <p className="field-error">Заполните организацию или ИНН.</p>}
        <div className="order-totalPrice">
          <h3>Итого</h3><span>{totalPrice.toFixed(2)} руб.</span>
        </div>
        {message && <p className="field-error" role="alert">{message}</p>}
        <div className="order-btns">
          <Button type="submit" icon="Shopping" appearance="primary" disabled={!items.length || !valid}>
            Оформить заказ
          </Button>
          <Button type="button" icon="Commercial" appearance="ghost" disabled={!items.length}
            onClick={downloadSpecification}>Скачать спецификацию</Button>
        </div>
      </form>
    </div>
  );
}
