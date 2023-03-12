import React from "react";

export const Counter = ({ handleInc, handleDec }) => {
  return (
    <div className="my-3">
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};
