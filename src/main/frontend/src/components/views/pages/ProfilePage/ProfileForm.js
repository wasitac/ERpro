/**
 * 이지홍
 */
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import fetchApi from "../../../../img/modules/api";
import dayjs from "dayjs";

// 정보수정 폼
const onFinish = async (values) => {
  console.log("sucsses:", values);
  try {
    const response = await fetchApi.put("/profile", values);
    console.log("PUT request successful", response.data);
    alert("내 정보 변경에 성공했습니다");
    window.location.href = "/";
  } catch (error) {
    alert("내 정보 변경에 실패했습니다");
    console.error("Error making PUT request", error);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ProfileForm = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi.get(
          `/member/${localStorage.getItem("memberId")}`
        );
        setData(response.data.data);
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
        birthDate: dayjs(data.birthDate),
        phone: data.phone,
        email: data.email,
        department: data.department,
        memberRank: data.memberRank,
        insertDate: dayjs(data.insertDate),
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

      <Form.Item label="생년월일" name="birthDate">
        <DatePicker disabled />
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

      <Form.Item label="직책" name="memberRank">
        <Input disabled />
      </Form.Item>

      <Form.Item label="입사일" name="insertDate">
        <DatePicker disabled />
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
