/**
 * 김주원
 */
import React, { useState, useEffect } from "react";
import { Modal, Form, Divider } from "antd";
import menus from "../../commons/menus";
import DataTable from "../../pages/MainPage/DataTable";
import AccountForm from "./Form/AccountForm";
import ItemForm from "./Form/ItemForm";
import BomForm from "./Form/BomForm";
import MemberForm from "./Form/MemberForm";
import OrdersForm from "./Form/OrdersForm";
import EstimateForm from "./Form/EstimateForm";
import InvoiceForm from "./Form/InvoiceForm";
import StoreForm from "./Form/StoreForm";
import StoreItemForm from "./Form/StoreItemForm";
import ProductionForm from "./Form/ProductionForm";
import InspectionForm from "./Form/InspectionForm";
import OrdersItemForm from "./Form/OrdersItemForm";
import InvoiceItemForm from "./Form/InvoiceItemForm";
import EstimateItemForm from "./Form/EstimateItemForm";
import fetchApi from "../../../../modules/api";

function CustomModal(props) {
  // antd의 Form관련 hook 사용을 위함
  const [form] = Form.useForm();

  // 모달 모드(add:등록, edit:수정)
  const [mode, setMode] = useState("add");
  const [dataId, setDataId] = useState(undefined);

  useEffect(() => {
    // 모달이 열릴 때마다 모드를 설정
    if (props.dataForEdit != null) {
      // 수정 모드일 때
      setMode("edit");
      form.setFieldsValue(props.dataForEdit); // 폼에 원래값 설정
      setDataId(props.dataForEdit.id);
    } else {
      // 등록 모드일 때
      setDataId(undefined);
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
        if (response.data?.data) {
          props.fetchData();
          onCancel();
        } else {
          alert("저장에 실패하였습니다. 다시 시도해 주세요.");
        }
      } else if (mode === "edit") {
        // 정보 수정
        const response = await fetchApi.put(`/${props.keyOfmenu}`, formData);
        console.log(response);
        if (response.data?.data) {
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
  var modalSize = "60%";
  var inputForm;
  switch (props.keyOfmenu) {
    case "account":
      inputForm = <AccountForm />;
      break;
    case "item":
      inputForm = <ItemForm />;
      break;
    case "bom":
      inputForm = <BomForm form={form} mode={mode} />;
      break;
    case "member":
      inputForm = <MemberForm mode={mode} />;
      break;
    case "orders":
      inputForm = <OrdersForm />;
      modalSize = 1200;
      break;
    case "estimate":
      inputForm = <EstimateForm />;
      break;
    case "invoice":
      inputForm = <InvoiceForm />;
      break;
    case "store":
      inputForm = <StoreForm />;
      break;
    case "production":
      inputForm = <ProductionForm />;
      break;
    case "inspection":
      inputForm = <InspectionForm />;
      modalSize = 1000;
      break;
    case "storeItem":
      inputForm = <StoreItemForm />;
      break;
    case "ordersItem":
      inputForm = <OrdersItemForm />;
      break;
    case "estimateItem":
      inputForm = <EstimateItemForm />;
      break;
    case "invoiceItem":
      inputForm = <InvoiceItemForm />;
      break;
    default:
      break;
  }

  return (
    <Modal
      title={
        mode === "add"
          ? `${menus[props.keyOfmenu].label} 등록`
          : `${menus[props.keyOfmenu].label} 수정`
      }
      open={props.modalStatus}
      okText={mode === "add" ? "저장" : "수정"}
      okButtonProps={{
        style: {
          backgroundColor: "#66bd00",
        },
      }}
      onOk={onSubmit}
      onCancel={onCancel}
      cancelText="취소"
      style={{ minWidth: modalSize }}
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
        {inputForm}
        {/* Tabel */}
      </Form>
    </Modal>
  );
}

export default CustomModal;
