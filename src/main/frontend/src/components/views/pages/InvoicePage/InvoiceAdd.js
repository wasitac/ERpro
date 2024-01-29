/**
 * 정유진 
 */
import React, { useState } from 'react';
import { DatePicker, Form, Input, Select, } from 'antd';

const InvoiceAdd = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 1000,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '30px',
        }}
      >
        <div style={{ width: '48%' }}>
          <Form.Item label="입출고번호" name="storeId">
            <Input disabled />
          </Form.Item>
          <Form.Item label="거래구분" name="sort">
            <Select>
              <Select.Option value="buy">구매</Select.Option>
              <Select.Option value="sell">판매</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="결제방법" name="payment">
            <Input />
          </Form.Item>
          <Form.Item label="거래처명" name="bNm">
            <Input />
          </Form.Item>
          <Form.Item label="품목번호" name="itemId">
            <Input />
          </Form.Item>
          <Form.Item label="품목명" name="itemName">
            <Input />
          </Form.Item>
          <Form.Item label="거래일자" name="date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="비고" name="note">
            <Input />
          </Form.Item>
        </div>
        <div style={{ width: '48%' }}>
          <Form.Item label="수량" name="count" >
            <Input />
          </Form.Item>
          <Form.Item label="단가" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="매출금액" name="sellPrice">
            <Input />
          </Form.Item>
          <Form.Item label="부가세" name="vat">
            <Input />
          </Form.Item>
          <Form.Item label="합계금액" name="total">
            <Input />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default InvoiceAdd;