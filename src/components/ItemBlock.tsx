import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addItem } from "../redux/slice/cartSlice";
import { type RootState, useAppDispatch } from "../redux/store";
import Button from "./Button/Button";
import CountCart from "./CountCart";

export default function ItemBlock({ sort = "default" }: { sort?: string }) {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.product);
  const filter = useSelector((state: RootState) => state.filter);
  const [params] = useSearchParams();
  const query = (params.get("q") ?? "").trim().toLocaleLowerCase();

  const filtered = products.filter((item) =>
    (!filter.Type || item.type === filter.Type) &&
    item.price >= filter.minPrice &&
    (filter.maxPrice === null || item.price <= filter.maxPrice) &&
    (!filter.Standart.length || filter.Standart.includes(item.standart)) &&
    (!query || `${item.name} ${item.standart} ${item.type}`.toLocaleLowerCase().includes(query)),
  );

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "ru"));

  if (!filtered.length) {
    return <p className="empty-state" role="status">По выбранным условиям товары не найдены.</p>;
  }

  return filtered.map((item) => (
    <article className="menuItem-inner" key={item.id}>
      <div className="menuItem-item">
        <img src={item.image} alt={item.name} loading="lazy" width={200} height={180} />
        <div className="standard">{item.standart}</div>
        <h2 className="item-title">{item.name}</h2>
        <div className="item-flex">
          <p className="item-price">{item.price.toLocaleString("ru-RU", { minimumFractionDigits: 2 })} руб.</p>
          <CountCart id={item.id} />
        </div>
        <div className="menuItem-btns">
          <Button appearance="primary" icon="cart" onClick={() => dispatch(addItem({ ...item, count: 1 }))}>
            В корзину
          </Button>
        </div>
      </div>
    </article>
  ));
}
