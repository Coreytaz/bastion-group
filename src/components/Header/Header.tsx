import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Header.scss";
import Phone from "../../assets/phone.svg";
import Map from "../../assets/map.svg";
import Mail from "../../assets/mail.svg";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/Search.svg";
import Enter from "../../assets/enter.svg";
import Button from "../Button/Button";
import CartLink from "../CartLink";

export default function Header() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = query.trim();
    navigate(search ? `/?q=${encodeURIComponent(search)}` : "/");
  }

  return (
    <>
      <header className="header">
        <div className="header-top">
          <nav aria-label="Верхняя навигация">
            <ul className="header-top__nav">
              <li><Link to="/typeProduct">Типы продуктов</Link></li>
              <li><Link to="/product">Продукты</Link></li>
            </ul>
          </nav>
          <div className="header-contact">
            <ul>
              <li><img src={Phone} alt="" /><a href="tel:+74993807890">+7 (499) 380-78-90</a></li>
              <li><img src={Map} alt="" /><span>Москва</span></li>
              <li><img src={Mail} alt="" /><a href="mailto:info@bastion.pro">info@bastion.pro</a></li>
            </ul>
          </div>
        </div>
      </header>
      <header className="header">
        <div className="header-down">
          <Link to="/" className="header-down__logo">
            <img src={Logo} alt="Бастион Груп" />
            <span>Производитель металлических изделий №1</span>
          </Link>
          <Button appearance="primary" icon="catalog" onClick={() => navigate("/")}>Каталог</Button>
          <form className="header-down-input" role="search" onSubmit={onSearch}>
            <img src={Search} alt="" aria-hidden="true" />
            <input type="search" aria-label="Поиск по каталогу" placeholder="Поиск по названию..."
              value={query} onChange={(event) => setQuery(event.target.value)} />
            <button className="search-submit" type="submit" aria-label="Найти товар"><img src={Enter} alt="" /></button>
          </form>
          <Link to="/cart" className="header-down-cart" aria-label="Перейти в корзину">
            <CartLink /><span>Корзина</span>
          </Link>
        </div>
      </header>
    </>
  );
}
