// 이지홍
import { Form, Input, Select, DatePicker } from "antd";
const OrderForm = () => {
  return (
    <div>
      <div style={{ width: "48%" }}>
        <Form.Item label="주문ID" name="id">
          <Input disabled />
        </Form.Item>
        <Form.Item label="구분" name="type">
          <Select>
            <Select.Option value="buy">구매</Select.Option>
            <Select.Option value="sell">판매</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="거래처ID" name="accountId">
          <Input />
        </Form.Item>
        <Form.Item label="물품ID" name="itemId">
          <Input />
        </Form.Item>
        <Form.Item label="품목명" name="itemName">
          <Input />
        </Form.Item>
        <Form.Item label="발주일자" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="입고일자" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="유효기간" name="expiration">
          <Input />
        </Form.Item>
      </div>
      <div style={{ width: "48%" }}>
        <Form.Item label="단위" name="bNm">
          <Input />
        </Form.Item>
        <Form.Item label="규격" name="pNm">
          <Input />
        </Form.Item>
        <Form.Item label="수량" name="bNo">
          <Input />
        </Form.Item>
        <Form.Item label="단가" name="price">
          <Input />
        </Form.Item>
        <Form.Item label="부가세" name="vat">
          <Input />
        </Form.Item>
        <Form.Item label="합계" name="bAdr">
          <Input />
        </Form.Item>
      </div>
      <div style={{ width: "48%" }}>
        <Form.Item label="거래처명" name="bNm">
          <Input />
        </Form.Item>
        <Form.Item label="사업자 등록번호" name="bNo">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
      </div>
    </div>
  );
};

export default OrderForm;
