// 이지홍
import { Form, Input, Row, Col, Radio, DatePicker } from "antd";

const InspectionForm = () => {
  return (
    // 신청자 / 검수자 id가 아니라 name인 것 주의
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="id" noStyle>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item
            label="입/출고번호"
            name="storeId"
            rules={[
              {
                required: true,
                message: "사업자번호를 입력해주세요",
              },
            ]}
          > 
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="신청자"
            name="proposerName"
            rules={[
              {
                required: true,
                message: "신청자 이름을 선택해주세요",
              },
            ]}
          >
            <Input style={{ width: "300px" }} />
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
            <Input style={{ width: "300px" }} />
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
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item label="단위" name="unit">
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="규격"
            name="spec"
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="생산량"
            name="count"
            rules={[
              {
                required: true,
                message: "생산량을 입력해주세요",
              },
            ]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="검수자"
            name="inspectorName"
            rules={[
              {
                required: true,
                message: "검수자 이름 입력해주세요",
              },
            ]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>

          <Form.Item
            label="적격"
            name="eligible"
            rules={[
              {
                required: true,
                message: "적격 수량을 입력해주세요",
              },
            ]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="부적격"
            name="ineligible"
            rules={[
              {
                required: true,
                message: "부적격 수량을 입력해주세요",
              },
            ]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="합격여부"
            name="pass"
            rules={[
              {
                required: true,
                message: "합격여부를 입력해주세요",
              },
            ]}
          >
            <Radio.Group value="합격여부">
              <Radio value="PASS">합격</Radio>
              <Radio value="FAIL">불합격</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="검수일자"
            name="inspectionDate"
            rules={[
              {
                required: true,
                message: "검수일자를 입력해주세요",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default InspectionForm;
