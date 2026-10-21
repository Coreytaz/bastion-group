import { Link, useLocation } from "react-router-dom";
import Arrow from "../assets/arrow.svg";

const pageTitles: Record<string, string> = {
  "/": "Опоры трубопроводов", "/cart": "Корзина",
  "/product": "Продукты", "/typeProduct": "Типы продуктов",
};

export default function BreadCrumbs() {
  const { pathname } = useLocation();
  return (
    <nav className="container breadcrumbs" aria-label="Навигационная цепочка">
      <Link to="/">Главная</Link>
      <img src={Arrow} width={6} alt="" aria-hidden="true" />
      <span aria-current="page">{pageTitles[pathname] ?? "Страница не найдена"}</span>
    </nav>
  );
}
