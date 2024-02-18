// 정유진
import React, { useEffect, useState } from "react";
import { Form, Input, Select, DatePicker } from "antd";
import fetchApi from "../../../../../../modules/api";

const filterOption = (input, option) =>
  (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

const OrdersForm = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const response = await fetchApi.get("/account");
      setList(response.data.data);
    } catch (error) {
      console.error("목록 조회 에러:", error);
    }
  };

  const handleBnmChange = (bnm) => {
    // 거래처명에 해당하는 사업자 등록번호 찾기
    const account = list.find((account) => account.bnm === bnm);
    props.form.setFieldsValue({
      bno: account.bno,
    });
  };

  return (
    <div>
      <div>
        <Form.Item name="id" noStyle>
          <Input type="hidden" />
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
          <Select>
            <Select.Option value="구매">구매</Select.Option>
            <Select.Option value="판매">판매</Select.Option>
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
          <Select
            showSearch
            placeholder="거래처명"
            optionFilterProp="children"
            onChange={handleBnmChange}
            filterOption={filterOption}
          >
            {list.map((account) => (
              <Select.Option key={account.bnm} label={account.bnm}>
                {account.bnm}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="사업자등록번호"
          name="bno"
          rules={[
            {
              required: true,
              message: "사업자등록번호를 입력해주세요",
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          label="예정일"
          name="dueDate"
          rules={[
            {
              required: true,
              message: "유형을 선택해주세요",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="완료일" name="completionDate">
          <DatePicker />
        </Form.Item>
      </div>
    </div>
  );
};

export default OrdersForm;
