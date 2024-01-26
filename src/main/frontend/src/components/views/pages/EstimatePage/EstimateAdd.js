/**
 * 정유진 
 */
import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select, TreeSelect, } from 'antd';

const EstimateAdd = () => {
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
        <div style={{ width: '40%' }}>
          <Form.Item label="견적ID" name="id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="거래처ID" name="accountId">
            <Input />
          </Form.Item>
          <Form.Item label="작성일자" name="insertDate">
            <DatePicker />
          </Form.Item>
          <Form.Item label="물품ID" name="itemId">
            <Input />
          </Form.Item>
          <Form.Item label="물품명" name="itemName">
            <Input />
          </Form.Item>
          <Form.Item label="납기일자" name="dueDate">
            <DatePicker />
          </Form.Item>
          <Form.Item label="주문처리" name="order" >
            <Input />
          </Form.Item>
          <Form.Item label="유효기간" name="expiration">
            <Input />
          </Form.Item>
          </div>
          <div style={{ width: '40%' }}>
        <Form.Item label="단위" name="unit">
            <Input />
          </Form.Item>
          <Form.Item label="규격" name="spec">
            <Input />
          </Form.Item>
          <Form.Item label="수량" name="count" >
            <Input />
          </Form.Item>
          <Form.Item label="단가" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="견적금액" name="total">
            <Input />
          </Form.Item>
        </div>
        <div style={{ width: '48%' }}>

          <Form.Item label="회사명" name="bNm">
            <Input disabled />
          </Form.Item>
          <Form.Item label="사업자 등록번호" name="bNo">
            <Input disabled />
          </Form.Item>
          <Form.Item label="담당자" name="userId">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="주소" name="bAdr">
            <Input disabled />
          </Form.Item>
          <Form.Item label="업태" name="bSector">
            <Input disabled />
          </Form.Item>
          <Form.Item label="대표자" name="pNm">
            <Input disabled />
          </Form.Item>
          <Form.Item label="사업자 구분" name="sort">
            <Input disabled />
          </Form.Item>
          <Form.Item label="전화" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="종목" name="bType">
            <Input disabled />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EstimateAdd;