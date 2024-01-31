/**
 * 이지홍
 */
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import fetchApi from "../../../../modules/api";
import dayjs from "dayjs";

// 정보수정 폼. 사원 대장에서 비밀번호만 빼고 모달로 사용하면 될것같음
const onFinish = async (values) => {
  console.log("sucsses:", values);
  try {
    const response = await fetchApi.put("/profile", values);
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
  const memberId = localStorage.getItem("memberId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi.get(`/profile/${memberId}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // profile이 변경될 때마다 Form의 initialValues 업데이트
  useEffect(() => {
    console.log(new Date(localStorage.getItem("insertDate")));
    if (Object.keys(data).length > 0) {
      form.setFieldsValue({
        name: localStorage.getItem("name"),
        id: memberId,
        // birth: localStorage.getItem("birth"),
        birth: dayjs(localStorage.getItem("birth")),
        phone: localStorage.getItem("phone"),
        email: localStorage.getItem("email"),
        department: localStorage.getItem("department"),
        rank: localStorage.getItem("rank"),
        // insertDate: localStorage.getItem("insertDate"),
        insertDate: moment(localStorage.getItem("insertDate")),
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

      <Form.Item label="직책" name="rank">
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
