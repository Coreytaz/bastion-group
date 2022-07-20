import React from "react";
import "./Description.scss";
import Arrow from "../../assets/arrow.svg";

const Description: React.FC = () => {
  return (
    <div className="container mb">
      <h1 className="description-title">
        Опоры трубопроводов от Бастион Груп - производитель металлических
        изделий №1
      </h1>
      <p className="description-subtitle">
        Надежность работы трубопровода в значительной мере зависит от
        правильности и прочности его крепления. Основные средства крепления
        трубопроводов — это опора, подвеска, кронштейны, скобы и другие части
        опорных конструкций. Мы изготавливаем типовые опоры трубопроводов по
        нижеперечисленным существующим нормативным документам, а также изготовим
        любые нестандартные опоры трубопроводов по чертежам заказчика.
      </p>

      <p className="description-subtitle">
        Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку
        горизонтальных и вертикальных участков трубопровода. Основным материалом
        деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и
        пр.
      </p>

      <p className="description-subtitle">
        Марка стали выбирается исходя от параметров окружающей среды, опоры
        могут использоваться при температуре от -60°C. Конструкции опор,
        представленные на сайте, отличаются между собой методом крепления с
        трубопроводом и несущей способностью.
      </p>

      <p className="description-subtitle">
        Подвески являются сборными устройствами, соединяются при помощи сварки.
        Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81.
        Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ
        19537-83 или ее аналогом.
      </p>
      <span style={{ color: "#C93E33", cursor: "pointer" }}>
        Скрыть описание{" "}
        <img
          className="arrowmini"
          style={{ transform: "rotate(90deg)" }}
          src={Arrow}
          width={12}
          alt="Arrow"
        />
      </span>
    </div>
  );
};

export default Description;