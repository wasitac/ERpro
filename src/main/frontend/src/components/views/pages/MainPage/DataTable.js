/**
 * 이지홍
 */
import React, { useState } from "react";
import { Table, Button } from "antd";
const columns = [
  // 필터 설정
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const data = [];
for (let i = 0; i < 200; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const onChange = (filters, sorter, extra) => {
  console.log("params", filters, sorter, extra);
};
const DataTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const createRow = () => {
    // 추가 모달 생성
  };
  const deleteRow = () => {
    //선택된 로우 삭제
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
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
          marginBottom: 5,
          display: "grid",
          gridTemplateColumns: "1fr auto auto 0.15fr",
          alignItems: "center",
        }}
      >
        <span></span>
        <Button
          type="primary"
          onClick={createRow}
          style={{
            marginRight: 5,
          }}
        >
          추가
        </Button>
        <Button type="primary" onClick={deleteRow} disabled={!hasSelected}>
          삭제
        </Button>
        <div>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `${selectedRowKeys.length} 개 선택됨` : ""}
          </span>
        </div>
      </div>
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={data}
        size="small"
        pagination={false}
        onChange={onChange}
        scroll={{ y: `calc(40vh - 32px)` }}
      />
    </div>
  );
};

// const DataTable = () => (
//   // 위아래로 2등분
//   <>
//     <Divider>Small size table</Divider>
//     <Table
//       columns={columns}
//       dataSource={data}
//       size="small"
//       pagination={false}
//       scroll={{ y: `calc(0vh - 32px)` }}
//     />
//     <Divider>Small size table</Divider>
//     <Table
//       columns={columns}
//       dataSource={data}
//       size="small"
//       pagination={false}
//       scroll={{ y: 240 }}
//     />
//   </>
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
// );
export default DataTable;
