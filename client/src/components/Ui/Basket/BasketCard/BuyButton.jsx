import React from "react";

import { Button, Space, Flex } from 'antd';
const App = () => {
  
  return (
    <Flex vertical gap="small" style={{ width: "100%" }}>
      <Button type="primary" block >
        Оформить заказ
      </Button>
    </Flex>
  );
};
export default App;
