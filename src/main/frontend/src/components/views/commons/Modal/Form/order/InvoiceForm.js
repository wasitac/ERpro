// 정유진
import { Form, Input, Select, Radio, DatePicker } from "antd";

const InvoiceForm = () => {
  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
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
        <Input />
      </Form.Item>
      <Form.Item label="거래구분" name="sort">
        <Radio.Group value="거래 구분">
          <Radio value="매입">매입</Radio>
          <Radio value="매출">매출</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="결제방법" name="payment">
        <Select>
          <Select.Option value="카드">카드</Select.Option>
          <Select.Option value="현금">현금</Select.Option>
        </Select>
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
