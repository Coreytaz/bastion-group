import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Shopping from "../assets/shopping.svg";
import Count from "../assets/count.svg";

const CartLink: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalCount = items.reduce(
    (total: number, item: any) => total + item.count,
    0
  );
  return (
    <span>
      <img src={Shopping} alt="cart" />
      {totalCount > 0 && (
        <>
          <span className="count">{totalCount}</span>
          <img className="red" src={Count} alt="count" />
        </>
      )}
    </span>
  );
};

export default CartLink;
