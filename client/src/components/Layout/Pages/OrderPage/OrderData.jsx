import React, { useState } from 'react';
import { Button, Descriptions, Radio } from 'antd';
import { Outlet } from 'react-router-dom';
import useGadgetsStore from '../../../../store/useGadgetsStore';
import { items } from './OrderItems';
// import { borderedItems } from './BorderItems';

const borderedItems = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
  {
    key: '7',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const OrdersPage = () => {
  const { orders } = useGadgetsStore();
  console.log(orders);
  const [size, setSize] = useState('large');
  const onChange = e => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };
  return (
    <div>
        <Outlet />
      <Radio.Group onChange={onChange} value={size}>
        <Radio value="large">large</Radio>
        <Radio value="medium">medium</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions
        bordered
        title="Custom Size"
        size={size}
        extra={<Button type="primary">Edit</Button>}
        items={borderedItems}
      />
      <br />
      <br />
      <Descriptions
        title="Custom Size"
        size={size}
        extra={<Button type="primary">Edit</Button>}
        items={items}
      />
    </div>
  );
};
export default OrdersPage;