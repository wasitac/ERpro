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
          <Input />
        </Form.Item>
        <Form.Item label="구분" name="type">
          <Select>
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
          <Input />
        </Form.Item>
        <Form.Item
          label="품목번호"
          name="itemId"
          rules={[
            {
              required: true,
              message: "품목 번호를 입력해주세요",
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
          label="작성일자"
          name="insertDate"
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
          label="주문처리"
          name="order"
        >
          <Select>
            <Select.Option value="ongoing">진행중</Select.Option>
            <Select.Option value="completion">완료</Select.Option>
            <Select.Option value="cancel">취소됨</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="유효기간"
          name="expiration"
        >
          <DatePicker />
        </Form.Item>
      </div>
      <div style={{ width: "48%" }}>
        <Form.Item
          label="단위"
          name="unit"
          rules={[
            {
              required: true,
              message: "단위를 입력해주세요",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="규격"
          name="spec"
          rules={[
            {
              required: true,
              message: "규격을 입력해주세요",
            },
          ]}
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
      </div>
      <div style={{ width: "48%" }}>
        <Form.Item
          label="회사명"
          name="bNm"
          rules={[
            {
              required: true,
              message: "회사명을 입력해주세요",
            },
          ]}
        >
          <Input />
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
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="대표자"
          name="pNm"
        >
          <Input disabled />
        </Form.Item>
        <Form.Item label="사업자 구분" name="sort">
          <Select>
            <Select.Option value="buy ">매입</Select.Option>
            <Select.Option value="sell">매출</Select.Option>
          </Select>
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
          <Input />
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
          <Input />
        </Form.Item>
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
          <Input />
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
          <Input />
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
          <Input />
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
          <Input />
        </Form.Item>
      </div>
    </div>
  );
};

export default EstimateForm;
