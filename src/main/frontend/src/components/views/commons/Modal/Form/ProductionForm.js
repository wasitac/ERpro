import { DatePicker, Form, Input, Radio, Select } from "antd";
const ProductionForm = () => {

  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item label="지시 일자" name="productionDate">
        <DatePicker></DatePicker>
      </Form.Item>
      <Form.Item
        label="주문처"
        name="bnm"
        rules={[
          {
            required: true,
            message: "거래처명을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="주문번호"
        name="orderId"
        rules={[
          {
            required: true,
            message: "주문번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="물품번호"
        name="itemId"
        rules={[
          {
            required: true,
            message: "물품번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="물품명"
        name="itemName"
        rules={[
          {
            required: true,
            message: "물품명을 입력해주세요",
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
        label="담당자"
        name="memberName"
        rules={[
          {
            required: true,
            message: "담당자명을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default ProductionForm;
