import { type CartItem, removeItem } from "../redux/slice/cartSlice";
import { useAppDispatch } from "../redux/store";
import CountCart from "./CountCart";

interface CartItemProps { items: CartItem[] }

export default function CartItemBlock({ items }: CartItemProps) {
  const dispatch = useAppDispatch();
  if (!items.length) return <p className="empty-state" role="status">В корзине пока нет товаров.</p>;

  return items.map((item) => (
    <article className="cart-content-item" key={item.id}>
      <div className="content-inner">
        <img src={item.image} width={120} height={110} alt={item.name} />
        <div className="content-item-desc">
          <span className="content-standart">{item.standart}</span>
          <span className="content-title">{item.name}</span>
          <span className="content-price">{item.price.toFixed(2)} руб.</span>
        </div>
      </div>
      <CountCart id={item.id} />
      <div className="content-total-count">{(item.price * item.count).toFixed(2)} руб.</div>
      <button type="button" className="content-trash" aria-label={`Удалить ${item.name}`}
        onClick={() => dispatch(removeItem(item.id))}>
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M2.25 4.5H15.75M6 4.5V3C6 2.17 6.67 1.5 7.5 1.5h3c.83 0 1.5.67 1.5 1.5v1.5m2.25 0V15c0 .83-.67 1.5-1.5 1.5h-7c-.83 0-1.5-.67-1.5-1.5V4.5h10.5" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </article>
  ));
}
