import { useState } from "react";
import "./ItemsBlock.scss";
import Arrow from "../../assets/ItemsBlock/Arrow.svg";
import MiniArrow from "../../assets/arrow.svg";
import Setting from "../../assets/ItemsBlock/setting.svg";
import Button from "../Button/Button";
import StandartList from "../StandartList/StandartList";
import TypeBlock from "../TypeBlock";
import PriceFilter from "../PriceFilter";
import ItemBlock from "../ItemBlock";
import { useAppDispatch } from "../../redux/store";
import { resetFilters } from "../../redux/slice/filterSlice";

export default function ItemsBlock() {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState("default");

  return (
    <div className="container">
      <div className="itemHeader">
        <div><img src={Arrow} alt="" /><h1>Опоры трубопроводов</h1></div>
        <div>
          <label className="sort-label" htmlFor="sort-items">Сортировка</label>
          <select id="sort-items" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="default">По умолчанию</option>
            <option value="price-asc">Сначала дешевле</option>
            <option value="price-desc">Сначала дороже</option>
            <option value="name">По названию</option>
          </select>
        </div>
      </div>
      <main className="menuItem">
        <aside className="menuItem-filters" aria-label="Фильтры каталога">
          <div className="filters">
            <div className="filters-title clear"><span><img src={Setting} alt="" /> Фильтры</span></div>
          </div>
          <div className="filters">
            <label htmlFor="price-filter" className="filters-title mini">
              <span>Цена, руб.</span><img className="arrowmini" src={MiniArrow} width={10} height={10} alt="" />
            </label>
            <input className="filters-input" type="checkbox" id="price-filter" defaultChecked />
            <div className="filters-text priceFilter"><PriceFilter /></div>
          </div>
          <div className="filters">
            <label htmlFor="type-filter" className="filters-title mini">
              <span>Тип продукта</span><img className="arrowmini" src={MiniArrow} width={10} height={10} alt="" />
            </label>
            <input className="filters-input" type="checkbox" id="type-filter" defaultChecked />
            <div className="filters-text standard-menu typesfilter"><TypeBlock /></div>
          </div>
          <div className="filters">
            <Button className="buttonGhost" appearance="ghost" onClick={() => dispatch(resetFilters())}>
              Сбросить фильтры
            </Button>
          </div>
        </aside>
        <section className="menuItem-card" aria-label="Список товаров">
          <div className="standard-menu" aria-label="Фильтр по стандарту"><StandartList /></div>
          <div className="menuItem-items"><ItemBlock sort={sort} /></div>
        </section>
      </main>
    </div>
  );
}
