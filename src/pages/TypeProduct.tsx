import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { useInput } from "../helper/useInput";
import { addType } from "../redux/slice/typeProductSlice";
import { RootState, useAppDispatch } from "../redux/store";

const TypeProduct: React.FC = () => {
  const id = useInput("", { isEmpty: true, isNumber: true });
  const name = useInput("", { isEmpty: true });
  const [errorId, setErrorId] = React.useState(false);

  const { typeProduct } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const onClickCheack = () => {
    typeProduct.map((item) => item.id).includes(id.value)
      ? setErrorId(true)
      : addTypes();
  };

  const addTypes = () => {
    dispatch(
      addType({
        id: id.value,
        name: name.value,
      })
    );
    id.onClear();
    name.onClear();
  };

  return (
    <>
      <div className="container ">
        <h1>Типы продуктов</h1>
        <form
          className="TypeProduct"
          onSubmit={(event) => event.preventDefault()}
        >
          {id.isDirty && id.empty ? (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          ) : (
            id.isDirty &&
            id.isNumber && (
              <div style={{ color: "red" }}>Поле должно быть числом</div>
            )
          )}
          <Input
            placeholder="Id"
            type="text"
            name="id"
            onChange={(e) => id.onChange(e)}
            onBlur={(e) => id.onBlur()}
            value={id.value}
            onFocus={() => {
              setErrorId(false);
            }}
          />
          {name.isDirty && name.empty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input
            placeholder="Название"
            type="text"
            name="name"
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur()}
            value={name.value}
          />
          {errorId && (
            <div style={{ color: "red" }}>Такой Id уже существует</div>
          )}
          <Button
            disabled={!id.inputValid || !name.inputValid || errorId}
            appearance="primary"
            onClick={() => onClickCheack()}
          >
            Создать
          </Button>
        </form>
      </div>
    </>
  );
};

export default TypeProduct;
