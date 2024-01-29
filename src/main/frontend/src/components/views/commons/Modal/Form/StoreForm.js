import { Form, Input, Radio } from "antd";
import DataTable from "../../../pages/MainPage/DataTable";
const StoreForm = () => {
  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        label="거래처명"
        name="accountName"
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
        label="입/출고일자"
        name="storeDate"
        rules={[
          {
            required: true,
            message: "사업자번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="구분"
        name="sort"
        rules={[
          {
            required: true,
            message: "유형을 선택해주세요",
          },
        ]}
      >
        <Radio.Group value="구분">
          <Radio value="출고">출고</Radio>
          <Radio value="입고">입고</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="주문번호"
        name="orderId"
        rules={[
          {
            required: true,
            message: "주문번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <DataTable keyOfmenu="order" />,
    </div>
  );
};

export default StoreForm;
