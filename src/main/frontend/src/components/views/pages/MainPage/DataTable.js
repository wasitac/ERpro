/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import { Table, Button, Flex, Divider, Tabs } from "antd";
import menus from "../../commons/menus";
import fetchApi from "../../../../modules/api";
import CustomModal from "../../commons/Modal/CustomModal";

import dayjs from "dayjs";
import TableTabs from "./TableTabs";

const onChange = (filters, sorter, extra) => {
  console.log("params", filters, sorter, extra);
};
const DataTable = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [secondTable, setSecondTable] = useState("");

  const [tableHeight, setTableHeight] = useState("70vh");
  const columns = menus[props.keyOfmenu].column.map((item) => {
    return {
      ...item,
      render: (text, record) => (
        <a
          onDoubleClick={() => handleEdit(record.id)}
          onClick={() => onClickHandler(record.id)}
        >
          {text}
        </a>
      ),
    };
  });

  const fetchData = async () => {
    try {
      const response = await fetchApi.get(`/${props.keyOfmenu}`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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

  // 모달
  // 모달 상태 - 김주원
  const [modalStatus, setModalStatus] = useState(false);
  // 수정 모달 오픈 시 모달 전달용 상세데이터 - 김주원
  const [selectDetailData, setSelectDetailData] = useState(null);

  // 수정 모달 오픈 - 김주원
  const handleEdit = async (dataId) => {
    try {
      const response = await fetchApi.get(`/${props.keyOfmenu}/${dataId}`);

      if (`${props.keyOfmenu} == 'user'`) {
        response.data.data.birth = dayjs(response.data.data.birth);
        response.data.data.insertDate = dayjs(response.data.data.insertDate);
        response.data.data.retireDate =
          response.data.data.retireDate != null
            ? dayjs(response.data.data.retireDate)
            : null;
      }

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

  // 로우 클릭 시 상세 테이블 출력 - 이지홍
  const onClickHandler = async (dataId) => {
    const menu = `${props.keyOfmenu}Item`;
    console.log(menu in menus);
    if (menu in menus) {
      try {
        const response = await fetchApi.get(
          `/${props.keyOfmenu}Item/${dataId}`
        );
        setSelectedRowKeys([dataId]);
        setSecondTable(
          <div>
            <Tabs
              type="card"
              items={[{ label: "품목 상세", key: 0 }]}
              style={{ marginLeft: "20px" }}
            />
            <Table
              rowKey="id"
              size="small"
              pagination={false}
              onChange={onChange}
              columns={menus[menu].column}
              dataSource={response.data.data}
              scroll={{ y: "25vh" }}
            />
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
              style={{ backgroundColor: "#c4c4c4" }}
            >
              삭제
            </Button>
          </Flex>
        </div>
      </div>
      {/* todo: 테이블 개수 동적처리 */}
      <Table
        rowSelection={rowSelection}
        rowKey="id"
        size="small"
        pagination={false}
        onChange={onChange}
        columns={columns}
        dataSource={data}
        scroll={{ y: tableHeight }}
        style={{ marginBottom: "30px" }}
      />
      {secondTable}
      {/*  모달 영역 시작 */}
      <CustomModal
        keyOfmenu={props.keyOfmenu}
        modalStatus={modalStatus}
        handleCloseModal={handleCloseModal}
        dataForEdit={selectDetailData} // 로우 데이터
        fetchData={fetchData}
      />
      {/* 모달 영역 끝 */}
    </div>
  );
};

export default DataTable;
