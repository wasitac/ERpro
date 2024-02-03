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
          rules={[
            {
              required: true,
              message: "거래처 번호를 입력해주세요",
            },
          ]}
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
          <DatePicker disabled />
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
          rules={[
            {
              required: true,
              message: "주문처리를 선택해주세요",
            },
          ]}
        >
          <Select>
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
