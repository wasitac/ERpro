/**
 * 이지홍
 */
import { Button, Form, Input } from "antd";
import axios from "axios";
import fetchApi from "../../../../modules/api";

const onFinish = async (values) => {
  console.log("sucsses:", values);
  try {
    const response = await fetchApi.put("/password", values);
    console.log("PUT request successful", response.data);
  } catch (error) {
    console.error("Error making PUT request", error);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PasswordForm = () => {
  return (
    <Form
      name="putPassword"
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
        <Button type="primary" htmlType="submit">
          비밀번호 변경하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordForm;
