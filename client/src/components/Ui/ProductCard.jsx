import React from "react";
import { Card } from "antd";
import InStockCheck from "./InStockCheck";
import ToBasketButton from "./ToBasketButton";

const ProductCard = ({ name, price, inStock, id }) => {
  return (
    <Card title={name} variant="borderless" style={{ width: "100%" }}>
      <mark>{price} USD</mark>
      <br />
      <InStockCheck checked={inStock} />
      <br />
      <br />
      <ToBasketButton inStock={inStock} id={id} />
    </Card>
  );
};
export default ProductCard;
