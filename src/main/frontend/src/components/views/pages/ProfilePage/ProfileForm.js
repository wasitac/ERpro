/**
 * 이지홍
 */
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState } from "react";
import moment from "moment";
import axios from "axios";

// 정보수정 폼. 사원 대장에서 비밀번호만 빼고 모달로 사용하면 될것같음
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const ProfileForm = (props) => {
  const [data, setData] = useState({
    name: "1",
    id: "2",
    birth: "3",
    phone: "4",
    email: "5",
    department: "6",
    position: "7",
    insertDate: "8",
  });
  const profilePutRequest = async () => {
    try {
      const response = await axios.put("/profile", data);
      console.log("PUT request successful", response.data);
    } catch (error) {
      console.error("Error making PUT request", error);
    }
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
    <div>
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
          name: data.name,
          id: data.id,
          birth: data.birth,
          phone: data.phone,
          email: data.email,
          department: data.department,
          position: data.position,
          insertDate: data.insertDate,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="이름"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="사번" name="id">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="생년월일"
          name="birth"
          rules={[
            {
              required: true,
              message: "Please input your birth!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="연락처"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="부서" name="department">
          <Input disabled />
        </Form.Item>

        <Form.Item label="직책" name="position">
          <Input disabled />
        </Form.Item>

        <Form.Item label="입사일" name="insertdate">
          <DatePicker disabled />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={profilePutRequest}>
            내 정보 변경하기
          </Button>
        </Form.Item>
      </Form>

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
    </div>
  );
};

export default ProfileForm;
