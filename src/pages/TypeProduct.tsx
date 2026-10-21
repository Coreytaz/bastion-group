import { useState, type FormEvent } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { useInput } from "../helper/useInput";
import { addType } from "../redux/slice/typeProductSlice";
import { type RootState, useAppDispatch } from "../redux/store";

export default function TypeProduct() {
  const dispatch = useAppDispatch();
  const types = useSelector((state: RootState) => state.typeProduct);
  const id = useInput("", { isEmpty: true, isNumber: true });
  const name = useInput("", { isEmpty: true });
  const [errorId, setErrorId] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!id.inputValid || !name.inputValid) return;
    if (types.some((item) => item.id === id.value)) {
      setErrorId(true);
      return;
    }
    dispatch(addType({ id: id.value, name: name.value.trim() }));
    id.onClear();
    name.onClear();
    setErrorId(false);
  }

  return (
    <main className="container">
      <h1>Типы продуктов</h1>
      <form className="admin-form" onSubmit={onSubmit}>
        <Input name="typeId" placeholder="ID" type="text" inputMode="numeric" value={id.value}
          onChange={id.onChange} onBlur={id.onBlur} onFocus={() => setErrorId(false)} required />
        {id.isDirty && !id.inputValid && <p className="field-error">Введите числовой ID.</p>}
        <Input name="typeName" placeholder="Название" value={name.value}
          onChange={name.onChange} onBlur={name.onBlur} required />
        {name.isDirty && !name.inputValid && <p className="field-error">Введите название.</p>}
        {errorId && <p className="field-error" role="alert">Такой ID уже существует.</p>}
        <Button type="submit" disabled={!id.inputValid || !name.inputValid || errorId}
          appearance="primary">Создать</Button>
      </form>
    </main>
  );
}
