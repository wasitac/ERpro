/**
 * 정유진 
 */
import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "물품번호",
    dataIndex: "itemId",
  },
  {
    title: "품목명",
    dataIndex: "itemName",
  },
  {
    title: "규격",
    dataIndex: "spec",
  },
  {
    title: "단위",
    dataIndex: "unit",
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
    title: "공급가액",
    dataIndex: "supplyPrice",
  },
  {
    title: "부가세액",
    dataIndex: "vat",
  },
  {
    title: "합계금액",
    dataIndex: "total",
  },
];
const data = [
  {
    key: "1",
    itemId: "K2301",
    sort: "자재",
    itemName: "Gellaxy24",
    unit: "100",
    spec: "9.5",
    count: "1",
    price: "700,000",
    supplyPrice: "700,000",
    vat: "70,000",
    total: "770,000",
  },
];

const SalesAddDataTable = () => (
  <>
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "16px" }}>
        <span style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "22px" }}>품목</span>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={false}
          scroll={{ y: 240 }}
          style={{ marginTop: "16px" }}
        />
      </div>
    </div>
  </>
);
export default SalesAddDataTable;
