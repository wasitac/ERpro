import React, { useState, useEffect } from 'react';
import { Divider, Table, Flex, Button } from 'antd';
import AccountModal from './AccountModal';

const AccountPage = () => {

  const [accountList, setAccountList] = useState([]);

  const data = [
    {
      key: '1',
      id: '1',
      bNm: '가나테크',
      sort: '법인',
      bNo: '111-11-11111',
      pNm: '홍길동',
      bAdr: '서울특별시',
      bSector: '제조업',
      bType: '전자부품 제조업',
      phone: '02-000-0000',
      email: 'hong@gmail.com',
    },
    {
      key: '2',
      id: '2',
      bNm: '가가전기',
      sort: '개인',
      bNo: '111-11-11111',
      pNm: '홍길동',
      bAdr: '서울특별시',
      bSector: '제조업',
      bType: '전자부품 제조업',
      phone: '02-000-0000',
      email: 'hong@gmail.com',
    },
    {
      key: '3',
      id: '3',
      bNm: '나나상사',
      sort: '개인',
      bNo: '111-11-11111',
      pNm: '홍길동',
      bAdr: '서울특별시',
      bSector: '제조업',
      bType: '전자부품 제조업',
      phone: '02-000-0000',
      email: 'hong@gmail.com',
    },
    {
      key: '4',
      id: '4',
      bNm: '다다전자',
      sort: '법인',
      bNo: '111-11-11111',
      pNm: '홍길동',
      bAdr: '서울특별시',
      bSector: '제조업',
      bType: '전자부품 제조업',
      phone: '02-000-0000',
      email: 'hong@gmail.com',
    },
  ];

  const getAccountList = async () => {
    setAccountList(data);
  }

  useEffect(() => {
    getAccountList();
  }, []);

  const columns = [
    {
      title: '코드',
      dataIndex: 'id',
      render: (text) => <a onClick={() => handleEdit(text)}>{text}</a>,
    },
    {
      title: '거래처명',
      dataIndex: 'bNm',
    },
    {
      title: '사업자 유형',
      dataIndex: 'sort',
    },
    {
      title: '사업자 번호',
      dataIndex: 'bNo',
    },
    {
      title: '사업장 주소',
      dataIndex: 'bAdr',
    },
    {
      title: '대표자',
      dataIndex: 'pNm',
    },
    {
      title: '업태',
      dataIndex: 'bSector',
    },
    {
      title: '종목',
      dataIndex: 'bType',
    },
    {
      title: '전화번호',
      dataIndex: 'phone',
    },
    {
      title: '이메일',
      dataIndex: 'email',
    },
  ];
  
  const [ selectedRows, setSelectedRows ] = useState([]);

  // 체크 박스 선택 데이터
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // 체크박스 선택시 실행
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.disabled,
      name: record.name,
    }),
  };
  
  // 모달 상태
  const [modalStatus, setModalStatus] = useState(false);

  // 모달 닫기
  const handleCloseModal = () => {
    setModalStatus(false);
  }

  return (
    <>
      <div
        style={{
          minHeight: 280,
          padding: 24,
        }}
      > 
        {/* 추가, 삭제버튼 영역시작 */}
        <Flex
          gap="small"
          wrap="wrap"
          justify='flex-end'
        >
          <Button
            type="primary"
            onClick={(event) => {
              setModalStatus(true);
            }}
            style={{ backgroundColor : '#66bd00'}}
          >
            추가
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor : 'black'}}
           >
            삭제
          </Button>
        </Flex>

        {/* 테이블 영역 시작 */}
        <div>
          <Divider />
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            pagination={{
              position: ['bottomCenter']
            }}
            columns={columns}
            dataSource={accountList}
            />
        </div>
      </div>

      <AccountModal modalStatus={modalStatus} handleCloseModal={handleCloseModal}/>
    </>
  );
};
export default AccountPage;