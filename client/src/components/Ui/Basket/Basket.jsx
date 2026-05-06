import React, { memo, useState } from "react";
import { Button, Drawer } from "antd";
import useGadgetsStore from "../../../store/useGadgetsStore";
import BasketCard from "./BasketCard/BasketCard";
import PlaceAnOrder from "./PlaceAnOrder/PlaceAnOrder";

const Basket = memo(() => {
  const { basket } = useGadgetsStore();
  const { clearBasket } = useGadgetsStore();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ background: "#001529", color: "white", float: "right top" }}
      >
        Open Basket
      </Button>
      <Drawer
        title="Basket"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        style={{ background: "rgb(238, 230, 219)" }}
      >
        {basket.map((el) => (
          <BasketCard
            name={el.name}
            price={el.price}
            count={el.count}
            id={el.id}
            key={el.id}
          />
        ))}
        <br />
        <br />
        <h2>Total: {useGadgetsStore((state) => state.getBasketTotal().toFixed(2))} USD</h2>
        <br />
        <br />
        <br />
        <Button
          type="primary"
          onClick={() => clearBasket()}
          style={{
            background: "red",
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 3,
          }}
        >
          отчистить корзину
        </Button>
        <PlaceAnOrder />
      </Drawer>
    </>
  );
});
export default Basket;
