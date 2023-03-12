import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Button = () => {
  const count = useSelector((state) => {
    return state.productData.count;
  });
  const navigate = useNavigate();

  return (
    <div className="my-3 text-center">
      <button>Cancel</button>
      <button className="mx-3" disabled={count < 5}>
        Buy
      </button>
    </div>
  );
};
