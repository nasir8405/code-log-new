import React from "react";

export const Button = ({ count }) => {
  return (
    <div>
      <button disabled={count < 5}>Checkout</button>
    </div>
  );
};
