import { Button, Modal } from "antd";
import OrderForm from "./OrderForm";
import useGadgetsStore from "../../../../store/useGadgetsStore";

const App = () => {
  const { basket } = useGadgetsStore();
  const { modalOpen } = useGadgetsStore();
  const { toggleModal } = useGadgetsStore();
  const { getBasketTotal } = useGadgetsStore();

  const showModal = () => {
    toggleModal();
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          position: "fixed",
          bottom: 55,
          right: 20,
          zIndex: 3,
        }}
        disabled={basket.length === 0}
      >
        Оформить заказ
      </Button>
      <Modal
        title={`Place an Order (${getBasketTotal().toFixed(2)} USD, ${basket.length} ${basket.length === 1 ? "item" : "items"})`}
        open={modalOpen}
        onCancel={toggleModal}
        footer={null}
      >
        <OrderForm />
      </Modal>
    </>
  );
};
export default App;
