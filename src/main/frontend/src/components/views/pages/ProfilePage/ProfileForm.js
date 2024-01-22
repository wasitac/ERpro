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
const ProfileForm = () => {
  const [data, setData] = useState("data");

  const handlePutRequest = async () => {
    try {
      const response = await axios.put("/profile", data);
      console.log("PUT request successful", response.data);
    } catch (error) {
      console.error("Error making PUT request", error);
    }
  };
  return (
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
        username: "홍길동",
        userid: 111111,
        birth: moment("2022-01-26"),
        phone: "010-9085-3892",
        email: "honggil@gmail.com",
        department: "영업",
        position: "부장",
        insertdate: moment("2022-01-26"),
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="이름"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="사번" name="userid">
        <Input disabled />
      </Form.Item>

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

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
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
        <Button type="primary" onClick={handlePutRequest}>
          변경하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
