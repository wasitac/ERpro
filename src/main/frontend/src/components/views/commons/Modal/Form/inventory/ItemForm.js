import React from "react";
import { Form, Input, Radio } from "antd";

const ItemForm = () => {
  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        label="품목구분"
        name="sort"
        rules={[
          {
            required: true,
            message: "품목구분을 선택해주세요",
          },
        ]}
      >
        <Radio.Group value="제품">
          <Radio value="제품">제품</Radio>
          <Radio value="자재">자재</Radio>
        </Radio.Group>
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
        label="단위"
        name="unit"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="규격"
        name="spec"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="매입단가"
        name="buyPrice"
        rules={[
          {
            required: true,
            message: "매입단가를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="매출단가"
        name="sellPrice"
        rules={[
          {
            required: true,
            message: "매출단가를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default ItemForm;
