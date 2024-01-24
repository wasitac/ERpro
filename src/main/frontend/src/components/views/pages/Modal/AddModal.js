import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "../Header/reset.css";


const Modalwindow = () => {
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
        footer={[
          <Button
            type="primary"
          >
            계속
          </Button>,
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            저장
          </Button>,
        ]}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default Modalwindow;