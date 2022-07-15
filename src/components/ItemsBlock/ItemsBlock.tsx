import React from "react";
import "./ItemsBlock.scss";
import Arrow from "../../assets/ItemsBlock/Arrow.svg";
import Sort from "../../assets/ItemsBlock/sort.svg";
import Sortt from "../../assets/ItemsBlock/sortt.svg";
import Application from "../../assets/ItemsBlock/application.svg";
import MiniArrow from "../../assets/arrow.svg";
import Setting from "../../assets/ItemsBlock/setting.svg";
import Help from "../../assets/ItemsBlock/help.svg";
import Button from "../Button/Button";

const ItemsBlock: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="itemHeader">
          <div>
            <img src={Arrow} alt="arrow" />
            <h1>Опоры трубопроводов</h1>
          </div>
          <div>
            <span>
              Сначала популярные <img src={Sort} alt="sort" />
            </span>
            <img src={Sortt} alt="sort" />
          </div>
        </div>
        <main className="menuItem">
          <div className="menuItem-filters">
            <div className="filters">
              <label htmlFor="faq_1" className="filters-title">
                <span>
                  <img src={Application} alt="Application" /> Категории
                </span>
                <img
                  className="arrowmini"
                  src={MiniArrow}
                  width="10"
                  height="10"
                  alt="MiniArrow"
                />
              </label>
              <input
                className="filters-input"
                type="checkbox"
                name="faq"
                id="faq_1"
              />
              <div className="filters-text">
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
              </div>
            </div>
            <div className="filters">
              <div className="filters-title clear">
                <span>
                  <img src={Setting} alt="Setting" /> Фильтры
                </span>
              </div>
            </div>
            <div className="filters">
              <label htmlFor="faq_3" className="filters-title mini">
                <span>Цена, руб.</span>
              </label>
              <input
                className="filters-input"
                type="checkbox"
                name="faq"
                id="faq_3"
              />
              <div className="filters-text">
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
              </div>
            </div>
            <div className="filters">
              <label htmlFor="faq_5" className="filters-title mini">
                <span>
                  Тип продукта
                  <img src={Help} alt="help" />
                </span>
                <img
                  className="arrowmini"
                  src={MiniArrow}
                  width="10"
                  height="10"
                  alt="MiniArrow"
                />
              </label>
              <input
                className="filters-input"
                type="checkbox"
                name="faq"
                id="faq_5"
              />
              <div className="filters-text">
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
              </div>
            </div>
            <div className="filters">
              <label htmlFor="faq_4" className="filters-title mini">
                <span>
                  Бренд
                  <img src={Help} alt="help" />
                </span>
                <img
                  className="arrowmini"
                  src={MiniArrow}
                  width="10"
                  height="10"
                  alt="MiniArrow"
                />
              </label>
              <input
                className="filters-input"
                type="checkbox"
                name="faq"
                id="faq_4"
              />
              <div className="filters-text">
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
                <div className="text-block">
                  <span>Серия 5.904-1 выпуск 1:</span>
                  <p>Детали крепления воздуховодов</p>
                </div>
              </div>
            </div>
            <div className="filters">
              <input className="checkbox" id="chek1" type="checkbox" />
              <label
                htmlFor="chek1"
                className="filters-title mini input-checkbox"
              >
                Выбор покупателей
              </label>
            </div>
            <div className="filters">
              <input className="checkbox" id="chek2" type="checkbox" />
              <label
                htmlFor="chek2"
                className="filters-title mini input-checkbox"
              >
                Лучшая цена
              </label>
            </div>
            <div className="filters">
              <Button className="buttonGhost" appearance="ghost">
                Сбросить фильтры
              </Button>
            </div>
          </div>
          <div className="menuItem-card"></div>
        </main>
      </div>
    </>
  );
};

export default ItemsBlock;
