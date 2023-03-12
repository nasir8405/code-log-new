import React from "react";
import { useSelector } from "react-redux";

export const Input = () => {
  const count = useSelector((state) => {
    return state.productData.count;
  });
  return (
    <div style={{ border: "1px solid black", width: "50px", height: "50px" }}>
      {count}
    </div>
  );
};
