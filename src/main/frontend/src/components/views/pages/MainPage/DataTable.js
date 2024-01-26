/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import menus from "../../commons/menus";
import axios from "axios";
import CustomModal from "../../commons/Modal/CustomModal";

const onChange = (filters, sorter, extra) => {
  console.log("params", filters, sorter, extra);
};
const DataTable = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const columns = menus[props.keyOfmenu].column;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${props.keyOfmenu}`);
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleCreate = async () => {
    
  };

  const handleEdit = async (dataId) => {
    try {
      const response = await axios.put(`/${props.keyOfmenu}/${dataId}`);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error put data", error);
    }
  };

  const handleDelete = async (dataId) => {
    try {
      const response = await axios.delete(`/${props.keyOfmenu}/${dataId}`);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error delete data", error);
    }
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
          onClick={handleCreate}
          style={{
            marginRight: 5,
          }}
        >
          추가
        </Button>
        <Button type="primary" onClick={handleDelete} disabled={!hasSelected}>
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
        rowSelection={rowSelection}
        rowKey="id"
        size="small"
        pagination={false}
        onChange={onChange}
        columns={columns}
        dataSource={data}
        scroll={{ y: `calc(40vh - 32px)` }}
      />
      {/*  모달 영역 시작 */}
      <CustomModal
        // name={props.keyOfmenu}
        // modalStatus={modalStatus}
        // handleCloseModal={handleCloseModal}
        // dataForEdit={selectDetailData}
      />
      {/* 모달 영역 끝 */}
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
