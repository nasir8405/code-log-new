import React from "react";
import { useSelector } from "react-redux";

export const Button = () => {
  const count = useSelector((state) => state.productData.count);
  return (
    <div>
      <button disabled={count < 5}>Checkout</button>
    </div>
  );
};
