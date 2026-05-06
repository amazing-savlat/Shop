import React from "react";
import { Button, Form, Input, Select, Space, message } from "antd";
import useGadgetsStore from "../../../../store/useGadgetsStore";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App = () => {
  const [form] = Form.useForm();
  const { toggleModal } = useGadgetsStore();
  const { addOrder } = useGadgetsStore();
  const { clearBasket } = useGadgetsStore();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your order has been placed successfully!',
    });
  };
  const onFinish = (values) => {
    success();
    addOrder({values});
    toggleModal();
    clearBasket()
    form.resetFields();

  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="Name" label="Name" rules={[{ required: true }]}>
        <Input maxLength={50} />
      </Form.Item>
      <Form.Item
        name="number"
        label="Phone Number"
        rules={[{ required: true, min: 9, max: 9 }]}
      >
        <Input type="number" maxLength={9} minLength={9} />
      </Form.Item>
      <Form.Item
        name="PaymentMethod"
        label="Payment Method"
        rules={[{ required: true }]}
      >
        <Select
          allowClear
          placeholder="Select a option and change input text above"
          options={[
            { label: "cash", value: "cash" },
            { label: "by card", value: "by card" },
            { label: "cryptocurrency", value: "cryptocurrency" },
          ]}
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          {contextHolder}
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
