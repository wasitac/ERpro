import { Form, Input, Radio, Select } from "antd";
const MemberForm = () => {
  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
          label="이름"
          name="name"
          rules={[
              {
                  required: true,
                  message: "이름을 입력해주세요",
              },
          ]}
      >
          <Input />
      </Form.Item>
      <Form.Item
        label="생년월일"
        name="birth"
        rules={[
          {
            required: true,
            message: "생년월일을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="연락처"
        name="phone"
        rules={[
          {
            required: true,
            message: "연락처를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="이메일"
        name="email"
        rules={[
          {
            required: true,
            message: "이메일을 입력해주세요",
          },
          {
            type: "email",
            message: "올바른 이메일 형식이 아닙니다.",
          },
        ]}
      >
        <Radio.Group value="매출처">
          <Radio value="매출처">매출처</Radio>
          <Radio value="매입처">매입처</Radio>
          <Radio value="혼합">혼합</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="부서"
        name="department"
        rules={[
          {
            required: true,
            message: "부서를 선택해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="직급"
        name="memberRank"
        rules={[
          {
            required: true,
            message: "직급을 선택해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="권한"
        name="role"
        rules={[
          {
            required: true,
            message: "권한을 선택해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="계약형태"
        name="workType"
        rules={[
          {
            required: true,
            message: "계약형태를 선택해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="입사일"
        name="insertData"
        rules={[
          {
            required: true,
            message: "입사일을 선택해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="퇴사일"
        name="retireData"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[
            {
                required: true,
                message: "발급할 임시 비밀번호를 입력해주세요",
            },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default MemberForm;
