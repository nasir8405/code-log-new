import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = ({ count }) => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/shopping");
  };
  return (
    <div className="my-3 text-center">
      <button>Cancel</button>
      <button className="mx-3" disabled={count < 5} onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
};
