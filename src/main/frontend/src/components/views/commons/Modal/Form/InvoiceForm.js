// 정유진
import { Form, Input, Select, DatePicker } from "antd";

const InvoiceForm = () => {
  return (
    <div>
      <Form.Item
        label="전표번호"
        name="id">
        <Input disabled style={{ width: "400px" }} />
      </Form.Item>
      <Form.Item
        label="입출고번호"
        name="storeId"
        rules={[
          {
            required: true,
            message: "입출고번호를 입력해주세요",
          },
        ]}
      >
        <Input style={{ width: "400px" }} />
      </Form.Item>
      <Form.Item 
      label="거래구분" 
      name="sort" 
      rules={[
        {
          required: true,
          message: "거래구분을 입력해주세요",
        },
      ]}
      >
        <Select style={{ width: "400px" }}>
          <Select.Option value="BUY">구매</Select.Option>
          <Select.Option value="SELL">판매</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="결제방법"
        name="payment"
        rules={[
          {
            required: true,
            message: "결제방법을 입력해주세요",
          },
        ]}
      >
        <Input style={{ width: "400px" }} />
      </Form.Item>
      <Form.Item
        label="거래일자"
        name="date"
        rules={[
          {
            required: true,
            message: "거래일자를 입력해주세요",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="비고"
        name="note"
      >
        <Input style={{ width: "400px" }} />
      </Form.Item>
    </div>
  );
};

export default InvoiceForm;
