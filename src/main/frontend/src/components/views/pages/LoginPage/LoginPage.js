/** 
 * 김주원
 * ../../../../img/logo2.png
 */
import React from 'react';
import {useNavigate} from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, Image } from 'antd';

import logo2 from '../../../../img/logo2.png';

function LoginPage() {
  const navigate = useNavigate();
  
  // form submit
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // TODO:: login api 호출
    
    // TODO:: login api 결과에 따른 페이지 이동 제어, 무조건 메인으로 이동하도록 임시 하드코딩
    navigate('/');
  };
  
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col span={6}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Image src={logo2} alt="Company Logo" preview={false} style={{ width: '60%'}}/>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            name="userid"
            rules={[
              {
                required: true,
                message: '사원번호를 입력해주세요!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="사원번호를 입력하세요" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세요!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </Form.Item>
          <Form.Item
            style={{ textAlign: 'center' }}
          >
            <Button
              type="primary"
              shape="round"
              size="large"
              htmlType="submit"
              className="login-form-button"
              style={{ backgroundColor: '#66bd00'}}
            >
              Log in
            </Button>
            <div
              style={{ marginTop: '10px' }}
            >
              <a style={{color: '#66bd00'}} onClick={(event) => {
                event.preventDefault();
                navigate('/findpassword');
              }}>비밀번호를 잊어버렸어요</a>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default LoginPage;