/** 
 * 김주원
 * ../../../../img/logo2.png
 */
import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, Image } from 'antd';

import logo2 from '../../../../img/logo2.png';

function LoginPage() {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  
  // form submit
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);

    const postData = new FormData();
    postData.append('username', values.userid);
    postData.append('password', values.password);
    try {
      const response = await axios.post('/login', postData);
      const token = response.headers.authorization;
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', token);

      const userInfo = JSON.parse(parseJwt(token));
      // userInfo 객체의 key, value를 순회하며 로컬 스토리지에 저장
      Object.entries(userInfo).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });

      // 메인페이지 이동
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("인증에 실패하였습니다.");

        // 로컬 스토리지 초기화
        localStorage.clear();

        // form 데이터 초기화
        form.resetFields();
      } else {
        // 다른 예외 상황에 대한 처리
        console.error('An error occurred during login:', error.message);
      }
    }
    
  };

  /**
   * ! $parseJwt :: json 을 파싱해주는 함수
   * @param {any} _token
   * @returns {string}
   */
  const parseJwt = (_token) => {
    const base64Url = _token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    return decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
              return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`
            })
            .join(''),
    )
  }

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={6}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Image src={logo2} alt="Company Logo" preview={false} style={{ width: "60%"}}/>
        </div>
        <Form
          form={form}
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
            style={{ textAlign: "center" }}
          >
            <Button
              type="primary"
              shape="round"
              size="large"
              htmlType="submit"
              className="login-form-button"
              style={{ backgroundColor: "#66bd00"}}
            >
              Log in
            </Button>
            <div
              style={{ marginTop: "10px" }}
            >
              <a style={{ color: "#66bd00" }} onClick={(event) => {
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