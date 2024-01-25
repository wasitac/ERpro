import React, { useEffect, useState } from 'react';
import { Modal, Form } from 'antd';

function AccountModal (props) {
  const [form] = Form.useForm();

  const [mode, setMode] = useState('add');

  useEffect(() => {
    if(props.mode != null) {
      setMode('edit');
    } else {
      setMode('add');
    }
  }, [props.modalStatus]);

  const onCancel = () => {
    form.resetFields();
    props.handleCloseModal();
  }

  return (
    <>
      <Modal
        title="Title"
        open={props.modalStatus}
        onCancel={onCancel}
        okText={mode === 'add' ? "저장" : "수정"}
      >
      </Modal>
    </>
  );
};
export default AccountModal;