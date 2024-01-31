// 정유진
import { Form, Input, Select, DatePicker } from "antd";

const OrdersForm = () => {
  return (
    <div style={{ display: "flex" }}>

      {/* 좌 */}
      <div style={{ width: "140%", marginRight: "-130px" }}>
        <Form.Item label="주문번호" name="id">
          <Input disabled style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item label="구분" name="type">
          <Select style={{ width: "200px" }}>
            <Select.Option value="buy">구매</Select.Option>
            <Select.Option value="sell">판매</Select.Option>
          </Select>
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
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="예정일"
          name="dueDate"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="완료일"
          name="completionDate"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="유효기간"
          name="expiration"
        >
          <DatePicker />
        </Form.Item>
      </div>


      {/* 중앙 */}
      <div style={{ width: "100%", marginLeft: "-100px" }}>
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
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="대표자"
          name="pNm"
          rules={[
            {
              required: true,
              message: "대표자명을 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item label="사업자 구분" name="sort">
          <Select style={{ width: "200px" }}>
            <Select.Option value="buy ">매입처</Select.Option>
            <Select.Option value="sell">매출처</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="사업자 등록번호"
          name="bNo"
          rules={[
            {
              required: true,
              message: "사업자 등록번호를 입력해주세요",
            },
          ]}
          style={{ width: "800px" }}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="담당자"
          name="userId"
          rules={[
            {
              required: true,
              message: "담당자를 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="연락처"
          name="phone"
          rules={[
            {
              required: true,
              message: "연락처를 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
      </div>

      {/* 우 */}
      <div style={{ width: "100%", marginLeft: "-400px" }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "이메일을 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="주소"
          name="bAdr"
          rules={[
            {
              required: true,
              message: "주소를 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="업태"
          name="bSector"
          rules={[
            {
              required: true,
              message: "업태를 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="종목"
          name="bType"
          rules={[
            {
              required: true,
              message: "종목을 입력해주세요",
            },
          ]}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
      </div>

    </div>
  );
};

export default OrdersForm;