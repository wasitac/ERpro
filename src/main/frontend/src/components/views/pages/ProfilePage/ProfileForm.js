/**
 * 이지홍
 */
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import fetchApi from "../../../../modules/api";

// 정보수정 폼. 사원 대장에서 비밀번호만 빼고 모달로 사용하면 될것같음
const onFinish = async (values) => {
  console.log("sucsses:", values);
  try {
    const response = await axios.put("/profile", values);
    console.log("PUT request successful", response.data);
  } catch (error) {
    console.error("Error making PUT request", error);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ProfileForm = () => {
  const [data, setData] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/profile/${userId}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // profile이 변경될 때마다 Form의 initialValues 업데이트
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      form.setFieldsValue({
        name: data.name,
        id: data.id,
        birth: moment(data.birth),
        phone: data.phone,
        email: data.email,
        department: data.department,
        position: data.userRank,
        insertDate: moment(data.insertDate),
      });
    }
  }, [data]);

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="putProfile"
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
        label="이름"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="사번" name="id">
        <Input disabled />
      </Form.Item>

      <Form.Item label="생년월일" name="birth">
        <DatePicker disabled format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item
        label="연락처"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
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

      <Form.Item label="입사일" name="insertDate">
        <DatePicker disabled format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          내 정보 수정하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
