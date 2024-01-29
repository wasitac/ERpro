// 정유진
import { Form, Input, Radio, Select } from "antd";
const InvoiceForm = () => {
  return (
    <div>
      <Form.Item
        label="전표번호"
        name="id">
        <Input disabled />
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
      <Form.Item label="구분" name="sort">
        <Select>
          <Select.Option value="buy">구매</Select.Option>
          <Select.Option value="sell">판매</Select.Option>
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
        label="거래처명"
        name="bNm"
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
        label="거래일자"
        name="date"
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="비고"
        name="note"
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
        label="매출금액"
        name="sellPrice"
        rules={[
          {
            required: true,
            message: "매출금액을 입력해주세요",
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
        label="합계"
        name="total"
        rules={[
          {
            required: true,
            message: "합계금액을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default InvoiceForm;
