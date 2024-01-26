/**
 * 정유진 
 */
import React, { useState } from 'react';
import { Button, Table } from 'antd';
const columns = [
  {
    title: "전표번호",
    dataIndex: "id",
  },
  {
    title: "거래구분",
    dataIndex: "sort",
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
    title: "공급가",
    dataIndex: "supplyPrice",
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
    title: "결제방법",
    dataIndex: "payment",
  },
  {
    title: "거래일자",
    dataIndex: "date",
  },
  {
    title: "비고",
    dataIndex: "note",
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
    count: "1",
    purchacsePrice: "500,000",
    total: "500,000",
    dueDate: "2023-12-01",
    completionDate: "2024-12-10",
  });
}
const OrderPage = () => {
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

export default OrderPage;