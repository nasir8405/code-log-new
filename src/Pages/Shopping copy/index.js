import React from "react";
import { Button } from "../../Components/Shopping/Button";
import { Shopping } from "../../Components/Shopping/Shopping";

const ShoppingPage = ({ count }) => {
  return (
    <>
      <Shopping />
      <Button count={count} />
    </>
  );
};

export default ShoppingPage;
