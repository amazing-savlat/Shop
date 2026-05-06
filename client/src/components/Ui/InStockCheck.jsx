import React from "react";
import { Checkbox } from "antd";

const InStockCheck = ({ checked }) => (
  <Checkbox checked={checked}>{"<= In stock"}</Checkbox>
);
export default InStockCheck;
