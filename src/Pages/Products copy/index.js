import React, { useState } from "react";
import { Button } from "../../Components/Products/Button";
import { Counter } from "../../Components/Products/Counter";
import { Input } from "../../Components/Products/Input";
import { Products } from "../../Components/Products/Products";

const ProductsPage = ({ count, handleDec, handleInc }) => {
  return (
    <>
      <div className="d-flex">
        <Products />
        <div className="d-flex">
          <Input count={count} />
          <Counter handleInc={handleInc} handleDec={handleDec} />
        </div>
      </div>
      <Button count={count} />
    </>
  );
};

export default ProductsPage;
