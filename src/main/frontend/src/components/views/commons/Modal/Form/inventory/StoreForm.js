import React, { useEffect, useState } from "react";
import { Form, Input, Radio, DatePicker, Select } from "antd";
import fetchApi from "../../../../../../modules/api";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
const filterOption = (input, option) =>
  (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

const StoreForm = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchAccountList();
  }, []);

  const fetchAccountList = async () => {
    try {
      const response = await fetchApi.get("/account");
      setList(response.data.data);
    } catch (error) {
      console.error("목록 조회 에러:", error);
    }
  };
  const fetchOrderList = async () => {
    try {
      const response = await fetchApi.get("/order/");
      setList(response.data.data);
    } catch (error) {
      console.error("목록 조회 에러:", error);
    }
  };

  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
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
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
        >
          {list.map((account) => (
            <Select.Option key={account.id} value={account.bnm}>
              {account.bnm}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="주문번호"
        name="orderId"
        rules={[
          {
            required: true,
            message: "주문번호를 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="구분"
        name="sort"
        rules={[
          {
            required: true,
            message: "유형을 선택해주세요",
          },
        ]}
      >
        <Radio.Group value="구분">
          <Radio value="출고">출고</Radio>
          <Radio value="입고">입고</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="입/출고일자"
        name="storeDate"
        rules={[
          {
            required: true,
            message: "입/출고일자를 입력해주세요",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
    </div>
  );
};

export default StoreForm;
