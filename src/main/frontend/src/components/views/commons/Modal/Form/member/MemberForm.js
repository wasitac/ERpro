import { DatePicker, Form, Input, Radio, Select, Space } from "antd";
const MemberForm = (props) => {
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
        name="birthDate"
        rules={[
          {
            required: true,
            message: "생년월일을 입력해주세요",
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
        <Input />
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
        <Select>
          <Select.Option value="SALES">영업</Select.Option>
          <Select.Option value="PRODUCTION">생산</Select.Option>
          <Select.Option value="HR">인사</Select.Option>
          <Select.Option value="LOGISTICS">물류</Select.Option>
          <Select.Option value="ADMIN">관리</Select.Option>
        </Select>
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
        <Select>
          <Select.Option value="EXECUTIVE">부장</Select.Option>
          <Select.Option value="TEAM_LEADER">차장</Select.Option>
          <Select.Option value="DIRECTOR">과장</Select.Option>
          <Select.Option value="MANAGER">대리</Select.Option>
          <Select.Option value="EMPLOYEE">사원</Select.Option>
        </Select>
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
        <Select>
          <Select.Option value="ROLE_ADMIN">관리자</Select.Option>
          <Select.Option value="ROLE_MEMBER">직원</Select.Option>
        </Select>
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
        <Radio.Group value="정규직">
          <Radio value="정규직">정규직</Radio>
          <Radio value="비정규직">비정규직</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="입사일"
        name="insertDate"
        rules={[
          {
            required: true,
            message: "입사일을 선택해주세요",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="퇴사일" name="retireDate">
        <DatePicker />
      </Form.Item>
      {props.mode === "add" && (
        <Form.Item
          label="임시비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: "임시 비밀번호를 입력해주세요",
            },
          ]}
        >
          <Input />
        </Form.Item>
      )}
    </div>
  );
};

export default MemberForm;
