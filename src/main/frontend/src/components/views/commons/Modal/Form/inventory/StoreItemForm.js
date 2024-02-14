import React, { useEffect, useState } from "react";
import { Form, Input, Select } from "antd";
import fetchApi from "../../../../../../modules/api";

const StoreItemForm = (props) => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    props.form.setFieldsValue({
      itemName: item.itemName,
      unit: item.unit,
      spec: item.spec,
    });
  }, [item]);

  useEffect(() => {
    var price = 0;
    store();
    if (sort === "입고") {
      price = parseInt(item.buyPrice);
    } else {
      price = parseInt(item.sellPrice);
    }
    const vat = parseInt(price / 10);

    props.form.setFieldsValue({
      price: price * count,
      vat: vat * count,
      total: (price + vat) * count,
    });
  }, [count, item, sort]);

  const fetchList = async () => {
    try {
      const response = await fetchApi.get("/item");
      setList(response.data.data);
    } catch (error) {
      console.error("품목 목록 조회 에러:", error);
    }
  };

  const store = async () => {
    try {
      const response = await fetchApi.get(
        `/store/${localStorage.getItem("rowId")}`
      );
      setSort(response.data.data.sort);
    } catch (error) {
      console.error("거래처 조회 에러:", error);
    }
  };

  const fetchItem = async (value) => {
    try {
      const response = await fetchApi.get(`/item/${value}`);
      setItem(response.data.data);
    } catch (error) {
      console.error("품목 조회 에러:", error);
    }
  };

  const countChange = (e) => {
    setCount(parseInt(e.target.value, 10) || 0);
  };

  return (
    <div>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        name="storeId"
        initialValue={localStorage.getItem("rowId")}
        noStyle
      >
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        label="품목번호"
        name="itemId"
        rules={[
          {
            required: true,
            message: "품목번호를 입력해주세요",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="품목번호"
          optionFilterProp="children"
          onChange={fetchItem}
        >
          {list.map((value) => (
            <Select.Option key={value.id} value={value.id}>
              {value.id}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="품목명"
        name="itemName"
        rules={[
          {
            required: true,
            message: "품목명을 입력해주세요",
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
        label="수량"
        name="count"
        rules={[
          {
            required: true,
            message: "수량을 입력해주세요",
          },
        ]}
      >
        <Input type="number" onChange={countChange} />
      </Form.Item>
      <Form.Item
        label="단가"
        name="price"
        rules={[
          {
            required: true,
            message: "단가를 입력해주세요",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="부가세"
        name="vat"
        rules={[
          {
            required: true,
            message: "부가세를 입력해주세요",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="총합"
        name="total"
        rules={[
          {
            required: true,
            message: "총합금액을 입력해주세요",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
    </div>
  );
};

export default StoreItemForm;
