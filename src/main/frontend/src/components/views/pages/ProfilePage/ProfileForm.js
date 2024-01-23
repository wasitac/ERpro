/**
 * 이지홍
 */
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

// 정보수정 폼. 사원 대장에서 비밀번호만 빼고 모달로 사용하면 될것같음

const onFinish = (values) => {
  console.log("sucsses:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const ProfileForm = () => {
  const [data, setData] = useState({
    name: "1",
    id: "2",
    birth: "1997-08-17",
    phone: "4",
    email: "5",
    department: "6",
    position: "7",
    insertDate: "2000-03-23",
  });

  useEffect(() => {
    // 데이터를 비동기적으로 가져오기
    const fetchData = async () => {
      axios
        .get("/profile")
        .then((response) => {
          console.log(response.data.name);
          console.log(data.name);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    fetchData();
  }, []);

  const profilePutRequest = async () => {
    try {
      const response = await axios.put("/profile", data);

      console.log("PUT request successful", response.data);
    } catch (error) {
      console.error("Error making PUT request", error);
    }
  };

  return (
    <Form
      name="updateProfile"
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
        birth: moment(data.birth),
        phone: data.phone,
        email: data.email,
        department: data.department,
        position: data.position,
        insertDate: moment(data.insertDate),
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
  );
};

export default ProfileForm;
