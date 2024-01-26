/**
 * 정유진 
 */
import React, { useState } from 'react';
import { Button, Table } from 'antd';

const SalesPage = () => {
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

// 테이블 컬럼
const columns = [
  {
    title: "주문번호",
    dataIndex: "id",
  },
  {
    title: "거래처명",
    dataIndex: "bNm",
  },
  {
    title: "품목명",
    dataIndex: "itemName",
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
    title: "매출단가",
    dataIndex: "salesPrice",
  },
  {
    title: "부가세",
    dataIndex: "vat",
  },
  {
    title: "합계금액",
    dataIndex: "total",
  },
  {
    title: "납기예정일",
    dataIndex: "dueDate",
  },
  {
    title: "납기완료일",
    dataIndex: "completionDate",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `${i}`,
    type: "구매",
    bNm: "고고상사",
    itemName: "Gellaxy24",
    count: "2",
    price: "1,000,000",
    salesPrice: "2,000,000",
    vat: "200,000",
    total: "1,800,000",
    dueDate: "2023-12-01",
    completionDate: "2024-12-10",
  });
}

export default SalesPage;