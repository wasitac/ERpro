import { Form, Input } from "antd";
const InvoiceItemForm = () => {
  return (
    <div>
      <Form.Item
        label="전표품목번호"
        name="id"
        noStyle
      >
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        label="전표번호"
        name="invoiceId"
        initialValue={localStorage.getItem("rowId")}
        noStyle
      >
        <Input type="hidden" />
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
        label="수량"
        name="count"
        rules={[
          {
            required: true,
            message: "수량을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="단가"
        name="price"
        rules={[
          {
            required: true,
            message: "단가를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="부가세"
        name="vat"
        rules={[
          {
            required: true,
            message: "부가세를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="총합"
        name="total"
        rules={[
          {
            required: true,
            message: "총합금액을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default InvoiceItemForm;
