import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "주문ID",
    dataIndex: "id",
  },
  {
    title: "구분",
    dataIndex: "type",
  },
  {
    title: "거래처ID",
    dataIndex: "accountId",
  },
  {
    title: "품목명",
    dataIndex: "itemName",
  },
  {
    title: "단위",
    dataIndex: "bNm",
  },
  {
    title: "규격",
    dataIndex: "pNm",
  },
  {
    title: "수량",
    dataIndex: "bNo",
  },
  {
    title: "단가",
    dataIndex: "price",
  },
  {
    title: "공급가액",
    dataIndex: "provisionPrice",
  },
  {
    title: "부가세",
    dataIndex: "vat",
  },
  {
    title: "합계",
    dataIndex: "bAdr",
  },
];
const data = [
  {
    key: "1",
    id: "John Brown",
    productName: "Hey",
    size: "9.5",
    measure: "예제",
    quantity: "100",
    salesPrice: "50000",
    provisionPrice: "20000",
    tax: "5000",
    total: "",
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
