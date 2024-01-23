/** 
 * 김주원
 */
import React from 'react';
import { Button, Form, Input } from 'antd';
import logo2 from '../../../../img/logo2.png';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FindPasswordPage = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div>
      <img src={logo2} alt="logo_t" style={{width:'50%'}}/>
    </div>
      <Form.Item
        name="userNo"
        rules={[
          {
            required: true,
            message: '사원번호를 입력해주세요.',
          },
        ]}
      >
        <Input placeholder='사원번호를 입력하세요.'/>
      </Form.Item>

  {/*     
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
  */}
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" shape="round" size="large" blockhtmlType="submit" style={{backgroundColor:"#66bd00"}}>
          전송
        </Button>
      </Form.Item>
    </Form>
);

export default FindPasswordPage;