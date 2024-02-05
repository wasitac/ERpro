// 정유진
import { Form, Input, Select, DatePicker } from "antd";

const InvoiceForm = () => {
  return (
    <div>
      <Form.Item label="전표번호" name="id">
        <Input disabled />
      </Form.Item>
      <Form.Item label="입출고번호" name="storeId">
        <Input />
      </Form.Item>
      <Form.Item
        label="거래구분"
        name="sort"
        rules={[
          {
            required: true,
            message: "거래구분을 선택해주세요",
          },
        ]}
      >
        <Select>
          <Select.Option value="매입">매입</Select.Option>
          <Select.Option value="매출">매출</Select.Option>
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
        <Input />
      </Form.Item>
      <Form.Item
        label="거래일자"
        name="invoiceDate"
        rules={[
          {
            required: true,
            message: "거래일자를 입력해주세요",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="비고" name="note">
        <Input />
      </Form.Item>
    </div>
  );
};

export default InvoiceForm;
