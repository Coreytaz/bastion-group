import React from "react";
import { useSelector } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";
import { RootState, useAppDispatch } from "../redux/store";
import Button from "./Button/Button";
import CountCart from "./CountCart";

const ItemBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useSelector((state: RootState) => state.product);
  const filter = useSelector((state: RootState) => state.filter);

  const filtered = product
    .filter((item) => (filter.Type !== "" ? item.type === filter.Type : item))
    .filter((item) => item.price >= filter.minPrice && item)
    .filter((item) => item.price <= filter.maxPrice && item)
    .filter((item) =>
      filter.Standart.length > 0
        ? filter.Standart.includes(item.standart)
        : item
    );

  return (
    <>
      {filtered.length ? (
        filtered.map((item) => (
          <div className="menuItem-inner" key={item.id}>
            <div className="menuItem-item">
              <span>
                {(item.name.toLocaleLowerCase().includes("о") ||
                  item.name.toLocaleLowerCase().includes("o")) && (
                  <div className="hit">Хит</div>
                )}
                {(item.name.toLocaleLowerCase().includes("а") ||
                  item.name.toLocaleLowerCase().includes("a")) && (
                  <div className="stock">Акция</div>
                )}
              </span>
              <img src={item.image} alt="item" />
              <div className="standard">{item.standart}</div>
              <h1 className="item-title">{item.name}</h1>
              <div className="item-flex">
                <p className="item-price">{item.price} руб.</p>
                <CountCart id={item.id} />
              </div>
              <div className="menuItem-btns">
                <Button
                  appearance="primary"
                  icon="cart"
                  onClick={() =>
                    dispatch(
                      addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        type: item.type,
                        standart: item.standart,
                        count: 0,
                      })
                    )
                  }
                >
                  В корзину
                </Button>
                <Button appearance="ghost">Подробнее</Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: "center", margin: "10px auto" }}>
          Список пуст 😒
        </h1>
      )}
    </>
  );
};

export default ItemBlock;
