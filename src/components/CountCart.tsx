import React from "react";
import { useSelector } from "react-redux";
import { minusItem, plusItem } from "../redux/slice/cartSlice";
import { RootState, useAppDispatch } from "../redux/store";

type CountCartProps = {
  id: string;
};

const CountCart: React.FC<CountCartProps> = React.memo(({ id }) => {
  const dispatch = useAppDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;
  return (
    <>
      {addedCount > 0 && (
        <div className="content-count">
          <span onClick={() => dispatch(plusItem(id))}>+</span>
          <span>{addedCount}</span>
          <span onClick={() => dispatch(minusItem(id))}>-</span>
        </div>
      )}
    </>
  );
});

export default CountCart;
