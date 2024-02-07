/**
 * 김주원
 */
import React, { useState, useEffect } from "react";
import { Modal, Form, Divider } from "antd";
import menus from "../../commons/menus";
import AccountForm from "./Form/trade/AccountForm";
import ItemForm from "./Form/inventory/ItemForm";
import BomForm from "./Form/inventory/BomForm";
import MemberForm from "./Form/member/MemberForm";
import OrdersForm from "./Form/order/OrdersForm";
import EstimateForm from "./Form/order/EstimateForm";
import InvoiceForm from "./Form/order/InvoiceForm";
import StoreForm from "./Form/inventory/StoreForm";
import StoreItemForm from "./Form/inventory/StoreItemForm";
import ProductionForm from "./Form/production/ProductionForm";
import InspectionForm from "./Form/production/InspectionForm";
import OrdersItemForm from "./Form/order/OrdersItemForm";
import InvoiceItemForm from "./Form/order/InvoiceItemForm";
import EstimateItemForm from "./Form/order/EstimateItemForm";
import InventoryForm from "./Form/inventory/InventoryForm";
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

        if (response.data?.data) {
          props.fetchData();
          onCancel();
        } else {
          alert("저장에 실패하였습니다. 다시 시도해 주세요.");
        }
      }
    } catch (errorInfo) {
      // 유효성 검사 실패 시 수행할 로직
      console.log("유효성 검사 실패");
    }
  };

  // 모달 닫힘
  const onCancel = () => {
    // Form 필드 초기화
    form.resetFields();
    props.handleCloseModal();
  };
  var modalSize = "40%";
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
      modalSize = "60%";
      break;
    case "member":
      inputForm = <MemberForm mode={mode} />;
      break;
    case "orders":
      inputForm = <OrdersForm />;
      break;
    case "estimate":
      inputForm = <EstimateForm />;
      break;
    case "invoice":
      inputForm = <InvoiceForm />;
      break;
    case "store":
      inputForm = <StoreForm form={form} />;
      break;
    case "production":
      inputForm = <ProductionForm form={form} />;
      break;
    case "inspection":
      inputForm = <InspectionForm />;
      modalSize = "70%";
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
    case "inventory":
      inputForm = <InventoryForm />;
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
        {inputForm}
      </Form>
    </Modal>
  );
}

export default CustomModal;
