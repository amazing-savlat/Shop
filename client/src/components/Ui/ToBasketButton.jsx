import React from "react";
import { Button, Flex, message } from "antd";
import useGadgetsStore from "../../store/useGadgetsStore";

const ToBasketButton = ({ inStock, id }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Added to basket!");
  };
  const { throwToBasket } = useGadgetsStore();

  return (
    <Flex vertical gap="small" style={{ width: "100%" }}>
      {contextHolder}
      <Button
        type="primary"
        block
        disabled={!inStock}
        onClick={() => {
          info();
          throwToBasket(id);
        }}
      >
        Throw To Basket
      </Button>
    </Flex>
  );
};
export default ToBasketButton;
