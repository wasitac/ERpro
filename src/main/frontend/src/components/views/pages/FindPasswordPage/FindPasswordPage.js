/** 
 * 김주원
 */
import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, Image, notification, Space, Spin } from 'antd';

import logo2 from '../../../../img/logo2.png';

function FindPasswordPage() {
  const navigate = useNavigate();

  // 로딩마스크 상태값
  const [loading, setLoading] = useState(false);
  
  // form submit
  const onFinish = async (values) => {
    setLoading(true);  // 로딩마스크 출력
    try {
      const response = await axios.post("/findpassword", values.memberId, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);  // 로딩마스크 제거

      if(response.data.message === "success") {
        // 임시비밀번호 메일 발송 성공
        openNotification( true);
      } else {
        // 임시비밀번호 메일 발송 실패
        openNotification( false);
      }
    } catch (error) {
      setLoading(false);  // 로딩마스크 제거
      if (error.response && error.response.status === 401) {
        alert("서버 ERROR 인증에 실패하였습니다.");
      } else {
        // 다른 예외 상황에 대한 처리
        console.error("An error findPassword:", error.message);
        alert("서버 ERROR 인증에 실패하였습니다.");
      }
    }
  };
  
  // antd 메시지창
  const [api, contextHolder] = notification.useNotification();
  
  // 메시지창 출력, result값으로 메시지 내용 제어
  const openNotification = (result) => {
    const key = `open${Date.now()}`;
    const btn = result ? (
      <Space>
        <Button type="primary" shape="round" size="middle" style={{ backgroundColor: '#ffc43e'}} onClick={(event) => {
          event.preventDefault();
          navigate('/login');
        }}>
          확인
        </Button>
      </Space>
    ) : (<Space>
      <Button type="primary" shape="round" size="middle" style={{ backgroundColor: '#ffc43e'}} onClick={() => api.destroy()}>
        확인
      </Button>
    </Space>);
    api.open({
      message: result? '임시 비밀번호 발송' : '사원번호 입력 오류',
      description: result? '사원 정보에 입력된 이메일로 임시 비밀번호가 전송되었습니다.' : '입력하신 사원번호가 존재하지 않습니다.',
      placement: "top",
      btn,
      key
    });
  };
  
  return (
    <div style={{ position: 'relative' }}>
      {contextHolder}
      <Spin spinning={loading} size="large" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
          <Col span={6}>
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <Image src={logo2} alt="Company Logo" preview={false} style={{ width: "60%" , margin: "auto"}} />
            </div>
            <h1 style={{ textAlign: "center", marginBottom: "25px", fontWeight:"bold" }}>
              비밀번호 찾기
            </h1>
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
                name="memberId"
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
                  전송
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};
export default FindPasswordPage;