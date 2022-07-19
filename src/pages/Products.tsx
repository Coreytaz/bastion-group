import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { useInput } from "../helper/useInput";
import { addProduct } from "../redux/slice/productSlice";
import { RootState, useAppDispatch } from "../redux/store";
import Img from "../assets/ItemsBlock/items/item.jpg";

const Products = () => {
  const { typeProduct, product } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const [errorId, setErrorId] = React.useState(false);

  const id = useInput("", { isEmpty: true, isNumber: true });
  const price = useInput("", { isEmpty: true, isNumber: true });
  const name = useInput("", { isEmpty: true });
  const standart = useInput("", { isEmpty: true });
  const types = useInput("", { isEmpty: true });

  const onClickCheack = () => {
    product.map((item) => item.id).includes(id.value)
      ? setErrorId(true)
      : addProd();
  };

  const addProd = () => {
    dispatch(
      addProduct({
        id: id.value,
        name: name.value,
        type: types.value,
        price: +price.value,
        standart: standart.value,
        image: Img,
      })
    );
    id.onClear();
    name.onClear();
    price.onClear();
    standart.onClear();
    types.onClear();
  };

  return (
    <>
      <div className="container ">
        <h1>Продукты</h1>
        <form className="Product" onSubmit={(event) => event.preventDefault()}>
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
            onBlur={(e) => id.onBlur()}
            onFocus={() => {
              setErrorId(false);
            }}
            value={id.value}
            onChange={(e) => id.onChange(e)}
          />
          {name.isDirty && name.empty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input
            placeholder="Название"
            type="text"
            name="name"
            value={name.value}
            onBlur={(e) => name.onBlur()}
            onChange={(e) => name.onChange(e)}
          />
          <select
            style={{ outline: "none", width: "100%", padding: "10px" }}
            value={types.value}
            onBlur={(e) => types.onBlur()}
            onChange={(e) => types.onChange(e)}
          >
            <option disabled selected>
              - - -
            </option>
            {typeProduct.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          {price.isDirty && price.empty ? (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          ) : (
            price.isDirty &&
            price.isNumber && (
              <div style={{ color: "red" }}>Поле должно быть числом</div>
            )
          )}
          <Input
            placeholder="Цена"
            type="text"
            name="price"
            onBlur={(e) => price.onBlur()}
            value={price.value}
            onChange={(e) => price.onChange(e)}
          />
          {standart.isDirty && standart.empty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input
            placeholder="ГОСТ"
            type="text"
            name="standart"
            onBlur={(e) => standart.onBlur()}
            value={standart.value}
            onChange={(e) => standart.onChange(e)}
          />
          {errorId && (
            <div style={{ color: "red" }}>Такой Id уже существует</div>
          )}
          <Button
            disabled={
              !id.inputValid ||
              !name.inputValid ||
              !price.inputValid ||
              !standart.inputValid ||
              errorId
            }
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

export default Products;
