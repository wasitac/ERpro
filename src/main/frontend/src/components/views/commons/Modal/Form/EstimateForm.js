// 정유진
import { Form, Input, Select, DatePicker } from "antd";
const EstimateForm = () => {
  return (
    <div>
      <div style={{ width: "48%" }}>
        <Form.Item
          label="견적번호"
          name="id"
          rules={[
            {
              required: true,
              message: "견적번호를 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "400px" }} />
        </Form.Item>
        <Form.Item
          label="거래처번호"
          name="accountId"
          rules={[
            {
              required: true,
              message: "거래처 번호를 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "400px" }} />
        </Form.Item>
        <Form.Item
          label="작성일자"
          name="insertDate"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="유효기간"
          name="expiration"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="납기일자"
          name="dueDate"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="견적금액"
          name="total"
          rules={[
            {
              required: true,
              message: "견적금액을 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "400px" }} />
        </Form.Item>
        <Form.Item
          label="주문처리"
          name="order"
          rules={[
            {
              required: true,
              message: "주문처리를 선택해주세요",
            },
          ]}
        >
          <Select style={{ width: "400px" }}>
            <Select.Option value="ongoing">진행중</Select.Option>
            <Select.Option value="completion">완료</Select.Option>
            <Select.Option value="cancel">취소됨</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default EstimateForm;
