<<<<<<< HEAD:src/main/frontend/src/components/views/pages/Modal/UpdateModal.js
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "../../Header/reset.css";
import OrderAdd from '../OrderPage/OrderAdd';
import OrderAddDataTable from '../OrderPage/OrderAddDataTable';

=======
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "../../Header/reset.css";
import OrderAdd from "../../pages/OrderPage/OrderAdd";
import OrderAddDataTable from "../../pages/OrderPage/OrderAddDataTable";
>>>>>>> bd91030459c723c4b898865165a09faa3868a030:src/main/frontend/src/components/views/commons/Modal/UpdateModal.js

const UpdateModal = () => {
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
      <span onClick={showModal}>
        <a href="#">버튼</a>
      </span>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button
            key="link"
            href="#"
            type="primary"
            loading={loading}
            onClick={handleOk}
            style={{ backgroundColor: "#66dd00" }}
          >
            수정
          </Button>,
        ]}
      >
        <OrderAdd />
        <OrderAddDataTable />
      </Modal>
    </>
  );
};
export default UpdateModal;
