import React, { useEffect, useState } from "react";
import fetchApi from "../../../../../../img/modules/api";
import { Form, Input, Radio, Select } from "antd";

const AccountForm = () => {
  // 담당자 목록
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    fetchMemberList();
  }, []);

  // 담당자 목록 조회
  const fetchMemberList = async () => {
    try {
      const response = await fetchApi.get("/member");
      setMemberList(response.data.data);
    } catch (error) {
      console.error("담당자 목록 조회 에러:", error);
    }
  };

  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item label="담당자" name="memberName">
        <Select>
          {memberList.map((member) => (
            <Select.Option key={member.id} value={member.name}>
              {member.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="거래처명"
        name="bnm"
        rules={[
          {
            required: true,
            message: "거래처명을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="사업자번호"
        name="bno"
        rules={[
          {
            required: true,
            message: "사업자번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="유형"
        name="sort"
        rules={[
          {
            required: true,
            message: "유형을 선택해주세요",
          },
        ]}
      >
        <Radio.Group value="매출처">
          <Radio value="매출처">매출처</Radio>
          <Radio value="매입처">매입처</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="대표자명"
        name="pnm"
        rules={[
          {
            required: true,
            message: "대표자명을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="사업장주소"
        name="badr"
        rules={[
          {
            required: true,
            message: "사업장주소를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="업태"
        name="bsector"
        rules={[
          {
            required: true,
            message: "업태를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="종목"
        name="btype"
        rules={[
          {
            required: true,
            message: "업종을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="전화번호"
        name="phone"
        rules={[
          {
            required: true,
            message: "전화번호를 입력해주세요",
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
    </div>
  );
};

export default AccountForm;
