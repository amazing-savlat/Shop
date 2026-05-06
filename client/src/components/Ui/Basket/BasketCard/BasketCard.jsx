import React from "react";
import { Card, Col, Row, Button } from "antd";
import useGadgetsStore from "../../../../store/useGadgetsStore";

const BasketCard = ({ name, price, count, id }) => {
  const { deleteFromBasket } = useGadgetsStore();
  const { increment } = useGadgetsStore();
  const { decrement } = useGadgetsStore();

  return (
    <>
      <Card
        title={name}
        variant="borderless"
      >
        <mark>{(price * count).toFixed(2)} USD</mark>
        <br /><br />
        <div style={{display: 'flex', gap: 15}}>
          <Button type="primary" onClick={() => increment(id)} style={{background: '#001529'}}>+</Button>
          {count}
          <Button type="primary" onClick={() => decrement(id)} style={{background: '#001529'}}>-</Button>
          
          <Button type="primary" onClick={() => deleteFromBasket(id)}>Delete</Button>
        </div>
      </Card>
      <br />
    </>
  );
};
export default BasketCard;
