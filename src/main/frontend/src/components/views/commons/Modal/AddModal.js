import React, { useState } from "react";
import { Button, Modal } from "antd";
import "../../Header/reset.css";
import OrderAdd from "../../pages/OrderPage/OrderAdd";
import OrderAddDataTable from "../../pages/OrderPage/OrderAddDataTable";

const AddModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 0);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        추가
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <Button
            type="primary"
            style={{ backgroundColor: "#E8E9EA", color: "black" }}
          >
            계속
          </Button>,
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: "#66dd00" }}
          >
            저장
          </Button>,
        ]}
      >
        <OrderAdd />
        <OrderAddDataTable />
      </Modal>
    </>
  );
};
export default AddModal;
