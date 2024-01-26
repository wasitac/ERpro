/**
 * 김주원
 */
import React, { useState, useEffect } from "react";
import { Layout, theme, Divider, Table, Flex, Button } from "antd";
import axios from "axios";

import AccountModal from "./AccountModal";

const AccountPage = () => {
  // 거래처 목록
  const [accountList, setAccountList] = useState([]);

  // 거래처 목록 조회
  const getAccountList = async () => {
    const resp = await (await axios.get("/account")).data;
    setAccountList(resp.data);
  };

  // 거래처 목록 조회 실행
  useEffect(() => {
    getAccountList();
  }, []);

  // 테이블 컬럼
  const columns = [
    {
      title: "코드",
      dataIndex: "id",
      render: (text) => <a onClick={() => handleEdit(text)}>{text}</a>,
    },
    {
      title: "사업자 유형",
      dataIndex: "sort",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
    {
      title: "거래처명",
      dataIndex: "bnm",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
    {
      title: "사업자 유형",
      dataIndex: "sort",
    },
    {
      title: "사업자 번호",
      dataIndex: "bno",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
    {
      title: "대표자",
      dataIndex: "pnm",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
    {
      title: "업태",
      dataIndex: "bsector",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
    {
      title: "종목",
      dataIndex: "btype",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
    {
      title: "전화번호",
      dataIndex: "phone",
      render: (text, record) => (
        <a onClick={() => handleEdit(record.id)}>{text}</a>
      ),
    },
  ];

  // 체크박스 선택 데이터
  const [selectedRows, setSelectedRows] = useState([]);

  // 체크박스 선택
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // 체크박스 선택시 실행
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRows(selectedRows);
    },
    getCheckboxProps: (record) => ({
      // 데이터에 disabled true시 체크불가 처리
      disabled: record.disabled,
      name: record.name,
    }),
  };

  // 선택 데이터 삭제
  const deleteAccountList = async () => {
    console.log(selectedRows);
    // TODO:: 삭제 API 호출해서 데이터 삭제 확인
    // const resp = await (await axios.get('')).data;
    // setAccountList(resp.data);
    // console.log(boardList);
  };

  // 모달 상태
  const [modalStatus, setModalStatus] = useState(false);

  // 수정 모달 오픈 시 모달 전달용 상세데이터
  const [selectDetailData, setSelectDetailData] = useState(null);

  // 수정 모달 오픈
  const handleEdit = async (dataId) => {
    const resp = await (await axios.get("/account/" + dataId)).data;
    console.log(resp.data);
    setSelectDetailData(resp.data);
    setModalStatus(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectDetailData(null);
    setModalStatus(false);
  };

  return (
    <>
      <div
        style={{
          minHeight: 280,
          padding: 24,
        }}
      >
        {/* 추가, 삭제 버튼영역 시작 */}
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
            onClick={deleteAccountList}
            style={{ backgroundColor: "black" }}
          >
            삭제
          </Button>
        </Flex>
        {/* 추가, 삭제 버튼영역 끝 */}

        {/* 테이블 영역 시작 */}
        <div>
          <Divider />
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            pagination={{
              position: ["bottomCenter"],
            }}
            columns={columns}
            dataSource={accountList}
            rowKey="id"
          />
        </div>
      </div>
      {/*  테이블 영역 끝 */}

      {/*  모달 영역 시작 */}
      <AccountModal
        modalStatus={modalStatus}
        handleCloseModal={handleCloseModal}
        dataForEdit={selectDetailData}
      />
      {/* 모달 영역 끝 */}
    </>
  );
};
export default AccountPage;
