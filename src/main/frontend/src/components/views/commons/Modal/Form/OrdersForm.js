// 정유진
import { Form, Input, Select, DatePicker } from "antd";

const OrdersForm = () => {
  return (
    <div>
      <div>
        <Form.Item label="주문번호" name="id">
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="유형"
          name="sort"
          rules={[
            {
              required: true,
              message: "유형을 선택해주세요",
            },
          ]}
        >
          <Select>
            <Select.Option value="BUY">구매</Select.Option>
            <Select.Option value="SELL">판매</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="거래처명"
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
          label="사업자등록번호"
          name="bno"
          rules={[
            {
              required: true,
              message: "사업자등록번호를 입력해주세요",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="예정일"
          name="dueDate"
          rules={[
            {
              required: true,
              message: "유형을 선택해주세요",
            },
          ]}
        >
          <Input />
          {/*   <DatePicker /> */}
        </Form.Item>
        <Form.Item
          label="완료일"
          name="completionDate"
          rules={[
            {
              required: true,
              message: "유형을 선택해주세요",
            },
          ]}
        >
          <Input />
          {/*   <DatePicker /> */}
        </Form.Item>
      </div>
    </div>
  );
};

export default OrdersForm;