/**
 * 정유진 
 */
import React, { useState } from 'react';
import { Button, Table } from 'antd';
const columns = [
  {
    title: "견적ID",
    dataIndex: "id",
  },
  {
    title: "거래처명",
    dataIndex: "bNm",
  },
  {
    title: "물품ID",
    dataIndex: "itemId",
  },
  {
    title: "품목명",
    dataIndex: "itemName",
  },
  {
    title: "단위",
    dataIndex: "unit",
  },
  {
    title: "규격",
    dataIndex: "spec",
  },
  {
    title: "수량",
    dataIndex: "count",
  },
  {
    title: "단가",
    dataIndex: "price",
  },
  {
    title: "견적금액",
    dataIndex: "total",
  },
  {
    title: "주문처리",
    dataIndex: "order",
  },
  {
    title: "작성일자",
    dataIndex: "insertDate",
  },
  {
    title: "납기일자",
    dataIndex: "dueDate",
  },
  {
    title: "유효기간",
    dataIndex: "expiration",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `${i}`,
    bNm: "가나제조",
    itemId: "K2301",
    itemName: "Gellaxy24",
    unit: "100",
    spec: "9.5",
    count: "1",
    price: "700,000",
    vat: "70,000",
    total: "770,000",
    order: "진행",
    insertDate: "2024-01-01",
    dueDate: "2023-12-01",
    expiration: "30일까지",
  });
}
const EstimatePage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default EstimatePage;