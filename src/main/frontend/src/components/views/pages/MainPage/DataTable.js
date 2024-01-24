/**
 * 이지홍
 */
import React from "react";
import { Divider, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];
const DataTable = () => (
  // 위아래로 2등분
  <>
    <Divider>Small size table</Divider>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={false}
      scroll={{ y: 240 }}
    />
    <Divider>Small size table</Divider>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={false}
      scroll={{ y: 240 }}
    />
  </>
  // 좌우로 2등분
  // <>
  //   <div style={{ display: "flex" }}>
  //     <div style={{ marginRight: "16px" }}>
  //       <Divider>Small size table</Divider>
  //       <Table
  //         columns={columns}
  //         dataSource={data}
  //         size="small"
  //         pagination={false}
  //         scroll={{ y: 240 }}
  //       />
  //     </div>

  //     <div>
  //       <Divider>Small size table</Divider>
  //       <Table
  //         columns={columns}
  //         dataSource={data}
  //         size="small"
  //         pagination={false}
  //         scroll={{ y: 240 }}
  //       />
  //     </div>
  //   </div>
  // </>
);
export default DataTable;
