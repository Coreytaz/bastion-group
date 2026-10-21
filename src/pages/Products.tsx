import { useState, type FormEvent } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { useInput } from "../helper/useInput";
import { addProduct } from "../redux/slice/productSlice";
import { type RootState, useAppDispatch } from "../redux/store";
import Img from "../assets/ItemsBlock/items/item.jpg";

export default function Products() {
  const { typeProduct, product } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const [errorId, setErrorId] = useState(false);
  const id = useInput("", { isEmpty: true, isNumber: true });
  const name = useInput("", { isEmpty: true });
  const type = useInput("", { isEmpty: true });
  const price = useInput("", { isEmpty: true });
  const standard = useInput("", { isEmpty: true });
  const parsedPrice = Number(price.value.replace(",", "."));
  const priceValid = price.inputValid && Number.isFinite(parsedPrice) && parsedPrice > 0;
  const valid = id.inputValid && name.inputValid && type.inputValid && priceValid && standard.inputValid;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid) return;
    if (product.some((item) => item.id === id.value)) {
      setErrorId(true);
      return;
    }
    dispatch(addProduct({ id: id.value, name: name.value.trim(), type: type.value,
      price: parsedPrice, standart: standard.value.trim(), image: Img }));
    [id, name, type, price, standard].forEach((field) => field.onClear());
    setErrorId(false);
  }

  return (
    <main className="container">
      <h1>Продукты</h1>
      <form className="admin-form" onSubmit={onSubmit}>
        <Input name="id" placeholder="ID" type="text" inputMode="numeric" value={id.value}
          onChange={id.onChange} onBlur={id.onBlur} onFocus={() => setErrorId(false)} required />
        {id.isDirty && !id.inputValid && <p className="field-error">Введите числовой ID.</p>}
        <Input name="name" placeholder="Название" type="text" value={name.value}
          onChange={name.onChange} onBlur={name.onBlur} required />
        <select aria-label="Тип продукта" required value={type.value} onBlur={type.onBlur} onChange={type.onChange}>
          <option value="" disabled>Выберите тип продукта</option>
          {typeProduct.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
        </select>
        <Input name="price" placeholder="Цена" type="text" inputMode="decimal" value={price.value}
          onChange={price.onChange} onBlur={price.onBlur} required />
        {price.isDirty && !priceValid && <p className="field-error">Введите цену больше нуля.</p>}
        <Input name="standard" placeholder="ГОСТ" type="text" value={standard.value}
          onChange={standard.onChange} onBlur={standard.onBlur} required />
        {errorId && <p className="field-error" role="alert">Такой ID уже существует.</p>}
        <Button type="submit" disabled={!valid || errorId} appearance="primary">Создать</Button>
      </form>
    </main>
  );
}
