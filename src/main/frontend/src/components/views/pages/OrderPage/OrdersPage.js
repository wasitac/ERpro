/**
 * 정유진 
 */
import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: "발주번호",
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
    title: "합계금액",
    dataIndex: "total",
  },
  {
    title: "발주일자",
    dataIndex: "dueDate",
  },
  {
    title: "입고일자",
    dataIndex: "completionDate",
  },
];

const OrdersPage = () => {

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
      <Table rowSelection={rowSelection} columns={columns} />
    </div>
  );
};

export default OrdersPage;