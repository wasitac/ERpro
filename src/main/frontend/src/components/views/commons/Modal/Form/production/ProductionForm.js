// 이지홍
import React, { useEffect, useState } from "react";
import { DatePicker, Form, Input, Select } from "antd";
import fetchApi from "../../../../../../modules/api";

// 대/소문자 구분없이 비교
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const ProductionForm = (props) => {
  const [list, setList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [ordersIdList, setOrdersIdList] = useState([]);
  const [ordersItemList, setOrdersItemList] = useState([]);
  const [ordersItem, setOrdersItem] = useState([]);

  const bnmChange = (value) => {
    fetchOrdersIdList(value);
  };

  const orderIdChange = (value) => {
    fetchOrdersItemList(value);
  };

  const orderItemChange = (value) => {
    setOrdersItem(ordersItemList.find((item) => item.itemId === value));
  };

  useEffect(() => {
    fetchList();
    fetchMemberList();
  }, []);

  useEffect(() => {
    // ordersItem이 변경될 때마다 품목 업데이트
    props.form.setFieldsValue({
      itemName: ordersItem.itemName,
      unit: ordersItem.unit,
      spec: ordersItem.spec,
      count: ordersItem.count,
    });
  }, [ordersItem]);

  const fetchList = async () => {
    try {
      const response = await fetchApi.get("/account");
      setList(response.data.data);
    } catch (error) {
      console.error("목록 조회 에러:", error);
    }
  };

  // 거래처의 모든 주문 조회
  const fetchOrdersIdList = async (value) => {
    try {
      const response = await fetchApi.get(`/orders/bnm/${value}`);
      setOrdersIdList(response.data.data);
    } catch (error) {
      console.error("목록 조회 에러:", error);
    }
  };

  // 주문번호가 일치하는 품목 조회
  const fetchOrdersItemList = async (value) => {
    try {
      const response = await fetchApi.get(`/ordersItem/${value}`);
      setOrdersItemList(response.data.data);
    } catch (error) {
      console.error("목록 조회 에러:", error);
    }
  };

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
          onChange={bnmChange}
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
        label="주문번호"
        name="orderId"
        rules={[
          {
            required: true,
            message: "주문번호를 입력해주세요",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="주문번호"
          optionFilterProp="children"
          onChange={orderIdChange}
        >
          {ordersIdList.map((value) => (
            <Select.Option key={value.id} value={value.id}>
              {value.id}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="물품번호"
        name="itemId"
        rules={[
          {
            required: true,
            message: "물품번호를 입력해주세요",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="물품번호"
          optionFilterProp="children"
          onChange={orderItemChange}
        >
          {ordersItemList.map((value) => (
            <Select.Option key={value.itemId} value={value.itemId}>
              {value.itemId}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="물품명"
        name="itemName"
        rules={[
          {
            required: true,
            message: "물품명을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="단위" name="unit">
        <Input />
      </Form.Item>
      <Form.Item label="규격" name="spec">
        <Input />
      </Form.Item>
      <Form.Item
        label="생산량"
        name="count"
        rules={[
          {
            required: true,
            message: "생산량을 입력해주세요",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="담당자"
        name="memberName"
        rules={[
          {
            required: true,
            message: "담당자명을 입력해주세요",
          },
        ]}
      >
        <Select showSearch>
          {memberList.map((member) => (
            <Select.Option key={member.id} value={member.name}>
              {member.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="지시 일자" name="productionDate">
        <DatePicker />
      </Form.Item>
    </div>
  );
};

export default ProductionForm;
