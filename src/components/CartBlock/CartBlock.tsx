import React from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import Alert from "../../assets/alert.svg";
import CartJPG from "../../assets/cart/cart-item.jpg";

import "./CartBlock.scss";

const CartBlock: React.FC = () => {
  return (
    <div className="container">
      <div className="cart-title">Корзина</div>
      <div className="cart-inner">
        <div className="cart-order">
          <div className="cart-order-title">
            <h1>Заказ</h1>
          </div>
          <h2 className="order-title">Контактная информация</h2>
          <form>
            <Input
              type="text"
              icon="user"
              name="Fname"
              placeholder="ФИО"
              required
            />
            <Input
              type="tel"
              icon="phone"
              name="tel"
              placeholder="Контактный телефон"
              required
            />
            <Input
              type="mail"
              icon="mail"
              name="mail"
              placeholder="Email"
              required
            />
            <Input
              type="text"
              icon="org"
              name="organi"
              placeholder="Организация / ИНН"
              required
            />
            <div className="order-totalPrice">
              <h1>Итого</h1>
              <span>8 499 руб.</span>
            </div>
            <div className="order-btns">
              <Button icon="Shopping" appearance="primary">
                Оформить заказ
              </Button>
              <Button icon="Commercial" appearance="ghost">
                Коммерческое предложение
              </Button>
            </div>
          </form>
        </div>
        <div className="cart-content">
          <div className="cart-content-title">
            <img src={Alert} alt="" />
            <span>
              Извините, но указанное ранее количество товара недоступно.
              Установлено ближайшее доступное значение.
            </span>
          </div>
          <div className="cart-content-items">
            <div className="cart-content-item">
              <div className="content-inner">
                <img src={CartJPG} alt="CartJPG" />
                <div className="content-item-desc">
                  <span className="content-standart">ГОСТ 14911-82</span>
                  <span className="content-title">Опора подвижная ОПБ2</span>
                  <span className="content-price">849.9 руб. </span>
                </div>
              </div>
              <div className="content-count">
                <span>+</span>
                <span>3</span>
                <span>-</span>
              </div>
              <div className="content-total-count">2 549.7 руб. </div>
              <div className="content-trash">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="cart-content-item">
              <div className="content-inner">
                <img src={CartJPG} alt="CartJPG" />
                <div className="content-item-desc">
                  <span className="content-standart">ГОСТ 14911-82</span>
                  <span className="content-title">Опора подвижная ОПБ2</span>
                  <span className="content-price">849.9 руб. </span>
                </div>
              </div>
              <div className="content-count">
                <span>+</span>
                <span>3</span>
                <span>-</span>
              </div>
              <div className="content-total-count">2 549.7 руб. </div>
              <div className="content-trash">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="cart-content-item">
              <div className="content-inner">
                <img src={CartJPG} alt="CartJPG" />
                <div className="content-item-desc">
                  <span className="content-standart">ГОСТ 14911-82</span>
                  <span className="content-title">Опора подвижная ОПБ2</span>
                  <span className="content-price">849.9 руб. </span>
                </div>
              </div>
              <div className="content-count">
                <span>+</span>
                <span>3</span>
                <span>-</span>
              </div>
              <div className="content-total-count">2 549.7 руб. </div>
              <div className="content-trash">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="cart-content-item">
              <div className="content-inner">
                <img src={CartJPG} alt="CartJPG" />
                <div className="content-item-desc">
                  <span className="content-standart">ГОСТ 14911-82</span>
                  <span className="content-title">Опора подвижная ОПБ2</span>
                  <span className="content-price">849.9 руб. </span>
                </div>
              </div>
              <div className="content-count">
                <span>+</span>
                <span>3</span>
                <span>-</span>
              </div>
              <div className="content-total-count">2 549.7 руб. </div>
              <div className="content-trash">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#C93E33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
