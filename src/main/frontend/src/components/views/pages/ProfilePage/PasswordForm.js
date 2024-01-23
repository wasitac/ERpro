/**
 * 이지홍
 */
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";

// 정보수정 폼. 사원 대장에서 비밀번호만 빼고 모달로 사용하면 될것같음

const PasswordForm = (props) => {
  const [data, setData] = useState({
    // name: "1",
    // id: "2",
  });
  const onFinish = (values) => {
    setData(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const passwordPutRequest = async () => {
    try {
      const response = await axios.put("/password", {
        password: "1",
        newPassword: "2",
      });
      console.log("PUT request successful", response.data);
    } catch (error) {
      console.error("Error making PUT request", error);
    }
  };

  return (
    <Form
      name="updatePassword"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="new Password" name="newPassword">
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["newPassword"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick={passwordPutRequest}>
          비밀번호 변경하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordForm;
