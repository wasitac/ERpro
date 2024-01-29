<<<<<<< HEAD:src/main/frontend/src/components/views/pages/Modal/AddModal.js
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "../../Header/reset.css";
import OrderAdd from '../OrderPage/OrderAdd';
import OrderAddDataTable from '../OrderPage/OrderAddDataTable';
import SalesAddDataTable from '../OrderPage/SalesAddDataTable';
import SalesAdd from '../OrderPage/SalesAdd';
import EstimateAdd from '../EstimatePage/EstimateAdd';
import EstimateAddDataTable from '../EstimatePage/EstimateAddDataTable';

=======
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "../../Header/reset.css";
import OrderAdd from "../../pages/OrderPage/OrderAdd";
import OrderAddDataTable from "../../pages/OrderPage/OrderAddDataTable";
>>>>>>> bd91030459c723c4b898865165a09faa3868a030:src/main/frontend/src/components/views/commons/Modal/AddModal.js

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
<<<<<<< HEAD:src/main/frontend/src/components/views/pages/Modal/AddModal.js
          <Button key="submit" type="primary" onClick={handleOk} style={{ backgroundColor: '#66dd00' }}>
=======
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: "#66dd00" }}
          >
>>>>>>> bd91030459c723c4b898865165a09faa3868a030:src/main/frontend/src/components/views/commons/Modal/AddModal.js
            저장
          </Button>,
        ]}
      >
<<<<<<< HEAD:src/main/frontend/src/components/views/pages/Modal/AddModal.js
        <EstimateAdd />
        <EstimateAddDataTable />
=======
        <OrderAdd />
        <OrderAddDataTable />
>>>>>>> bd91030459c723c4b898865165a09faa3868a030:src/main/frontend/src/components/views/commons/Modal/AddModal.js
      </Modal>
    </>
  );
};
export default AddModal;
