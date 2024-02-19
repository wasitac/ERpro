/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import { Table, Button, Flex, Tabs } from "antd";
import menus from "../../commons/menus";
import fetchApi from "../../../../img/modules/api";
import CustomModal from "../../commons/Modal/CustomModal";

import dayjs from "dayjs";

const onChange = (filters, sorter, extra) => {
  console.log("params", filters, sorter, extra);
};
const DataTable = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [secondTable, setSecondTable] = useState("");
  const [tableHeight, setTableHeight] = useState("70vh");

  const columns = menus[props.keyOfmenu].column;

  const fetchData = async () => {
    var url = `/${props.keyOfmenu}`;
    if (props.id !== undefined) {
      url += `/${props.id}`;
    }
    try {
      const response = await fetchApi.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [props.id]);

  // 선택 데이터 삭제 - 김주원
  const handleDelete = async () => {
    if (window.confirm("선택된 데이터를 삭제 하시겠습니까?")) {
      try {
        const response = await fetchApi.delete(`/${props.keyOfmenu}`, {
          data: selectedRowKeys, // 요청 본문에 데이터 전달
          headers: {
            "Content-Type": "application/json", // 요청 본문의 데이터 타입 설정
          },
        });
        if (response.data?.message) {
          fetchData();
        } else {
          alert("삭제에 실패하였습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("Error delete data", error);
        if (error.response.status == 403) {
          alert("삭제 권한이 없습니다.");
        }
      }
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
  // 모달 상태 - 김주원
  const [modalStatus, setModalStatus] = useState(false);
  // 수정 모달 오픈 시 모달 전달용 상세데이터 - 김주원
  const [selectDetailData, setSelectDetailData] = useState(null);
  // 수정 모달 오픈 - 김주원
  const handleEdit = async (dataId) => {
    var url = `/${props.keyOfmenu}/${dataId}`;
    if (props.id !== undefined) {
      url = `/${props.keyOfmenu}/${localStorage.getItem("rowId")}/${dataId}`;
    }
    try {
      const response = await fetchApi.get(url);
      // DatePicker 사용을 위한 포맷팅 - 이지홍
      Object.keys(response.data.data).forEach((key) => {
        if (key.endsWith("Date")) {
          response.data.data[key] =
            response.data.data[key] != null
              ? dayjs(response.data.data[key])
              : null;
        }
      });

      setSelectDetailData(response.data.data);
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

  // 두 번째 모달 상태
  const [secondModalStatus, setSecondModalStatus] = useState(false);

  // 두 번째 모달을 여는 함수
  const openSecondModal = () => {
    setSecondModalStatus(true);
  };

  // 두 번째 모달 닫기
  const closeSecondModal = () => {
    setSecondModalStatus(false);
  };

  // 로우 클릭 시 상세 테이블 출력 - 이지홍
  const onClickHandler = async (dataId) => {
    const menu = `${props.keyOfmenu}Item`;
    setSelectedRowKeys([dataId]);
    if (menu in menus) {
      localStorage.setItem("rowId", dataId);
      try {
        setSecondTable(
          <div>
            <Tabs
              type="card"
              items={[{ label: "품목 상세", key: 0 }]}
              style={{ marginLeft: "20px" }}
            />
            <DataTable keyOfmenu={menu} id={dataId} />
          </div>
        );
        setTableHeight("35vh");
      } catch (error) {
        console.error("Error get data", error);
      }
    }
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
              style={{
                backgroundColor: hasSelected ? "#ffc432" : "#c4c4c4",
                color: hasSelected ? "#3d3d3d" : "#ffffff",
              }}
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
        pagination={{
          pageSize: 50,

          position: ["bottomLeft"],
        }}
        onChange={onChange}
        onRow={(record) => ({
          onDoubleClick: () => handleEdit(record.id),
          onClick: () => onClickHandler(record.id),
        })}
        columns={columns}
        dataSource={data}
        scroll={{ y: tableHeight }}
      />
      {secondTable}
      <CustomModal
        keyOfmenu={props.keyOfmenu}
        modalStatus={modalStatus}
        handleCloseModal={handleCloseModal}
        dataForEdit={selectDetailData} // 로우 데이터
        fetchData={fetchData}
        openSecondModal={openSecondModal}
      />

      {secondModalStatus && (
        <CustomModal
          keyOfmenu={`${props.keyOfmenu}Item`}
          modalStatus={secondModalStatus}
          fetchData={fetchData}
          handleCloseModal={closeSecondModal}
        />
      )}
    </div>
  );
};

export default DataTable;
