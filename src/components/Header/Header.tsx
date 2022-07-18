import React from "react";

import "./Header.scss";
import Phone from "../../assets/phone.svg";
import Map from "../../assets/map.svg";
import Down from "../../assets/down.svg";
import Mail from "../../assets/mail.svg";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/Search.svg";
import Enter from "../../assets/enter.svg";
import Star from "../../assets/star.svg";
import Shopping from "../../assets/shopping.svg";
import Count from "../../assets/count.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <nav>
            <ul className="header-top__nav">
              <li>
                <a href="#">Типы продуктов</a>
              </li>
              <li>
                <a href="#">Продукты</a>
              </li>
            </ul>
          </nav>
          <div className="header-contact">
            <ul>
              <li>
                <img src={Phone} alt="phone" />
                <a href="tel:+7(499)380-78-90">+7 (499) 380-78-90</a>
              </li>
              <li>
                <img src={Map} alt="map" />
                <a href="#">Москва</a>
                <img src={Down} alt="down" />
              </li>
              <li>
                <img src={Mail} alt="mail" />
                <a href="mail:info@bastion.pro">info@bastion.pro</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="header">
        <div className="header-down">
          <Link to="/" className="header-down__logo">
            <img src={Logo} alt="logo" />
            <span>Производитель металлических изделий №1</span>
          </Link>
          <Button appearance="primary" icon="catalog">
            Каталог
          </Button>
          <div className="header-down-input">
            <img src={Search} alt="search" />
            <input type="text" placeholder="Поиск по названию..." />
            <img src={Enter} alt="enter" />
          </div>
          <div className="header-down-favorites">
            <img src={Star} alt="star" />
            <span>Избранное</span>
          </div>
          <Link to="cart" className="header-down-cart">
            <span>
              <img src={Shopping} alt="cart" />
              {
                <>
                  <span className="count">2</span>
                  <img src={Count} alt="count" />
                </>
              }
            </span>
            <span>Корзина</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
