import React, { useState, useEffect } from "react";
import { Table, Button, Flex } from "antd";
import menus from "../../commons/menus";
import axios from "axios";
import CustomModal from "../../commons/Modal/CustomModal";

const onChange = (filters, sorter, extra) => {
  console.log("params", filters, sorter, extra);
};
const DataTable = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const mapMenu = menus[props.keyOfmenu].column.map((item) => {
    return {
      ...item,
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    };
  });
  const columns = mapMenu;

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

  const handleDelete = async (dataId) => {
    try {
      const response = await axios.delete(`/${props.keyOfmenu}`, dataId);
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

  // 모달
  // 모달 상태 - 김주원
  const [modalStatus, setModalStatus] = useState(false);
  // 수정 모달 오픈 시 모달 전달용 상세데이터 - 김주원
  const [selectDetailData, setSelectDetailData] = useState(null);

  // 수정 모달 오픈 - 김주원
  const handleEdit = async (dataId) => {
    try {
      const response = await axios.get(`/${props.keyOfmenu}/${dataId}`);
      const resData = response.data.data;

      console.log(`resData: ${resData}`);

      setSelectDetailData(resData);
      setModalStatus(true);
    } catch (error) {
      console.error("Error put data", error);
    }
  };
  // 모달 닫기
  const handleCloseModal = () => {
    setSelectDetailData(null);
    setModalStatus(false);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 5,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              marginLeft: 20,
            }}
          >
            {hasSelected ? `${selectedRowKeys.length} 개 선택됨` : ""}
          </span>
        </div>
        <div style={{ marginRight: 10 }}>
          <Flex gap="small" wrap="wrap" justify="flex-end">
            <Button
              type="primary"
              onClick={(event) => {
                setModalStatus(true);
              }}
              style={{ backgroundColor: "#66bd00" }}
            >
              추가
            </Button>
            <Button
              type="primary"
              onClick={handleDelete}
              disabled={!hasSelected}
              style={{ backgroundColor: "#c4c4c4" }}
            >
              삭제
            </Button>
          </Flex>
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
        keyOfmenu={props.keyOfmenu}
        modalStatus={modalStatus}
        handleCloseModal={handleCloseModal}
        dataForEdit={selectDetailData} // 로우 데이터
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
