/**
 * 김주원
 */
import React, { useState, useEffect } from "react";
import { Modal, Form, Divider } from "antd";
import fetchApi from "../../../../modules/api";
import AccountForm from "./Form/AccountForm";
import menus from "../../commons/menus";

function CustomModal(props) {
  // antd의 Form관련 hook 사용을 위함
  const [form] = Form.useForm();

  // 모달 모드(add:등록, edit:수정)
  const [mode, setMode] = useState("add");

  useEffect(() => {
    // 모달이 열릴 때마다 모드를 설정
    if (props.dataForEdit != null) {
      // 수정 모드일 때
      setMode("edit");
      form.setFieldsValue(props.dataForEdit); // 폼에 원래값 설정
    } else {
      // 등록 모드일 때
      setMode("add");
    }
  }, [props.modalStatus]);

  // form submit
  const onSubmit = async (values) => {
    try {
      let formData; // form 입력 데이터
      // 현재 입력 필드를 유효성 검사
      await form.validateFields().then((values) => {
        console.log("Received values:", values);
        formData = values;
      });

      if (mode === "add") {
        // 정보 저장
        const response = await fetchApi.post(`/${props.keyOfmenu}`, formData);
        if (response.data?.data?.id) {
          props.fetchData();
          onCancel();
        } else {
          alert("저장에 실패하였습니다. 다시 시도해 주세요.");
        }
      } else if (mode === "edit") {
        // 정보 수정
        const response = await fetchApi.put(`/${props.keyOfmenu}`, formData);
        console.log(response);
        if (response.data?.data?.id) {
          props.fetchData();
          onCancel();
        } else {
          alert("저장에 실패하였습니다. 다시 시도해 주세요.");
        }
      }
    } catch (errorInfo) {
      // 유효성 검사 실패 시 수행할 로직
    }
  };

  // 모달 닫힘
  const onCancel = () => {
    // Form 필드 초기화
    form.resetFields();
    props.handleCloseModal();
  };

  return (
    <Modal
      title={
        mode === "add"
          ? `${menus[props.keyOfmenu].label} 등록`
          : `${menus[props.keyOfmenu].label} 수정`
      }
      open={props.modalStatus}
      onCancel={onCancel}
      cancelText="취소"
      okText={mode === "add" ? "저장" : "수정"}
      okButtonProps={{
        style: {
          backgroundColor: "#66bd00",
        },
      }}
      onOk={onSubmit}
      style={{ minWidth: "1000px" }}
    >
      <Divider />
      <Form
        form={form}
        layout="horizontal"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
      >
        {/* Form */}
        <AccountForm />
        {/* <OrderForm /> */}

        {/* Tabel */}
      </Form>
    </Modal>
  );
}

export default CustomModal;
