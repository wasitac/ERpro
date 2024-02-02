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
        <Form.Item
          label="유형"
          name="type"
          rules={[
            {
              required: true,
              message: "유형을 선택해주세요",
            },
          ]}
        >
          <Select style={{ width: "200px" }}>
            <Select.Option value="BUY">구매</Select.Option>
            <Select.Option value="SELL">판매</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="예정일"
          name="dueDate"
        >
          <Input style={{ width: "200px" }} />
          {/*   <DatePicker /> */}
        </Form.Item>
        <Form.Item
          label="완료일"
          name="completionDate"
        >
          <Input style={{ width: "200px" }} />
          {/*   <DatePicker /> */}
        </Form.Item>
      </div>


      {/* 중앙 */}
      <div style={{ width: "100%", marginLeft: "-100px" }}>
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
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="대표자"
          name="pNm"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="사업자 구분"
          name="sort"
          rules={[
            {
              required: true,
              message: "사업자 구분을 선택해주세요",
            },
          ]}
        >
          <Select style={{ width: "200px" }}>
            <Select.Option value="BUY ">매입처</Select.Option>
            <Select.Option value="SELL">매출처</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="사업자 등록번호"
          name="bno"
          style={{ width: "800px" }}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="담당자"
          name="userId"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="연락처"
          name="phone"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
      </div>

      {/* 우 */}
      <div style={{ width: "100%", marginLeft: "-400px" }}>
        <Form.Item
          label="Email"
          name="email"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="주소"
          name="bAdr"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="업태"
          name="bSector"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          label="종목"
          name="bType"
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
      </div>

    </div>
  );
};

export default OrdersForm;