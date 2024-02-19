/**
 * 이지홍
 */
import { Button, Form, Input } from "antd";
import fetchApi from "../../../../img/modules/api";

const onFinish = async (values) => {
  console.log("sucsses:", values);
  try {
    const response = await fetchApi.put("/password", values);
    console.log("PUT request successful", response);

    if (response.data.message !== null) {
      // 성공적인 응답의 경우
      console.log("Success message:", response.data.message);
      alert(response.data.message);
      window.location.href = "/";
    } else {
      // 에러 응답의 경우
      console.error("Error message:", response.data.errorMessage);
      alert(response.data.errorMessage);
    }
  } catch (error) {
    console.error("Error making PUT request", error);
    // 네트워크 에러 등 예외 처리
    alert("Error making PUT request");
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

      <Form.Item
        label="new Password"
        name="newPassword"
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
