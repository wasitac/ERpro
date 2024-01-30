import { Form, Input, Radio } from "antd";
import DataTable from "../../../pages/MainPage/DataTable";
// 이지홍
const StoreForm = () => {
  return (
    // 신청자 / 검수자 id가 아니라 name인 것 주의
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Input />
      <Form.Item
        label="입/출고번호"
        name="storeId"
        rules={[
          {
            required: true,
            message: "사업자번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="신청자"
        name="proposerName"
        rules={[
          {
            required: true,
            message: "신청자 이름을 선택해주세요",
          },
        ]}
      ></Form.Item>
      <Form.Item
        label="검수자"
        name="inspectorName"
        rules={[
          {
            required: true,
            message: "검수자 이름 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="품목번호"
        name="itemId"
        rules={[
          {
            required: true,
            message: "품목번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="품목명"
        name="itemName"
        rules={[
          {
            required: true,
            message: "품목명을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="단위"
        name="unit"
        rules={[
          {
            required: true,
            message: "단위를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="규격"
        name="spec"
        rules={[
          {
            required: true,
            message: "규격을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="생산량"
        name="count"
        rules={[
          {
            required: true,
            message: "생산량을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="적격"
        name="eligible"
        rules={[
          {
            required: true,
            message: "적격 수량을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="부적격"
        name="ineligible"
        rules={[
          {
            required: true,
            message: "부적격 수량을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="합격여부"
        name="pass"
        rules={[
          {
            required: true,
            message: "합격여부를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="검수일자"
        name="inspectionDate"
        rules={[
          {
            required: true,
            message: "검수일자를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <DataTable keyOfmenu="order" />,
    </div>
  );
};

export default StoreForm;
