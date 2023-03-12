import React from "react";
import { useDispatch } from "react-redux";
import { decreament, increament } from "../../redux/productSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increament());
  };
  const handleDec = () => {
    dispatch(decreament());
  };
  return (
    <div className="my-3">
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};
