/**
 * 정유진 
 */
import React, { useState } from 'react';
import { Table, Typography } from 'antd';

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
    title: "부가세",
    dataIndex: "vat",
  },
  {
    title: "매출단가",
    dataIndex: "sellPrice",
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

const totalColumns = [
  {
    title: "매출 단가",
    dataIndex: "totalSellPrice",
    align: 'right',
  },
  {
    title: "매출 부가세",
    dataIndex: "totalSellVat",
    align: 'right',
  },
  {
    title: "매출 합계",
    dataIndex: "sellTotal",
    align: 'right',
  },
  {
    title: "매입 단가",
    dataIndex: "totalBuyPrice",
    align: 'right',
  },
  {
    title: "매입 부가세",
    dataIndex: "totalBuyVat",
    align: 'right',
  },
  {
    title: "매입 합계",
    dataIndex: "BuyTotal",
    align: 'right',
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
    sellPrice: "500,000",
    total: "500,000",
    dueDate: "2023-12-01",
    completionDate: "2024-12-10",
  });
}

const totalData = [
  {
    totalSellPrice: "500,000",
    totalSellVat: "100,000",
    sellTotal: "600,000",
    totalBuyPrice: "222,000",
    totalBuyVat: "333,000",
    BuyTotal: "555,000"
  }
];

const InvoicePage = () => {
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />

      <>
        <Table
          columns={totalColumns}
          dataSource={totalData}
          size="small"
          pagination={false}
          style={{ marginTop: "50px" }}
        />
      </>
    </div>
  );
};

export default InvoicePage;