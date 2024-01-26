/**
 * 정유진 
 */
import React from "react";
import { Table } from "antd";

const columns = [
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
    title: "매입단가",
    dataIndex: "purchasePrice",
  },
  {
    title: "매출단가",
    dataIndex: "salesPrice",
  },
];
const data = [
  {
    key: "1",
    itemId: "K2301",
    sort: "제품",
    itemName: "Gellaxy24",
    unit: "100",
    spec: "9.5",
    count: "1",
    purchasePrice: "500,000",
    salesPrice: "1,000,000",
  },
];

const OrderAddDataTable = () => (
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
export default OrderAddDataTable;
