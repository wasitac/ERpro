// 정유진
import { Form, Input, Select, DatePicker } from "antd";

const EstimateForm = () => {
  return (
    <div>
      <div>
        <Form.Item name="id" noStyle>
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          label="거래처번호"
          name="accountId"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="작성일자"
          name="insertDate"
          rules={[
            {
              required: true,
              message: "작성일자를 입력해주세요",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="유효기간"
          name="expirationDate"
          initialValue="작성일로부터 30일"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="납기일자"
          name="dueDate"
          rules={[
            {
              required: true,
              message: "납기일자를 입력해주세요",
            },
          ]}
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
          <Input />
        </Form.Item>
        <Form.Item
          label="주문처리"
          name="isOrder"
        >
          <Select>
            <Select.Option value="진행중">진행중</Select.Option>
            <Select.Option value="완료">완료</Select.Option>
            <Select.Option value="취소됨">취소됨</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default EstimateForm;
