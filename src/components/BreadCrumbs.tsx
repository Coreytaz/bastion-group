import React from "react";
import Arrow from "../assets/arrow.svg";

const BreadCrumbs: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        padding: "17px 0",
        display: "flex",
        gap: "0 15px",
        fontWeight: "300",
        fontSize: "12px",
        lineHeight: "14px",
      }}
    >
      <span>Главная</span>
      <img src={Arrow} width="6" alt="Arrow" />
      <span>Интернет-магазин</span>
      <img src={Arrow} width="6"  alt="Arrow" />
      <span>Опоры трубопроводов</span>
    </div>
  );
};

export default BreadCrumbs;
