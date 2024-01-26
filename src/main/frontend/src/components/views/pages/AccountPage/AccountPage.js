import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';



// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const AccountPage = () => {
  const data = [
    {
      key: '1',
      id: '1',
      sort: '법인',
      bNm: '가나테크',
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
      sort: '개인',
      bNm: '가가전기',
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
      sort: '개인',
      bNm: '나나상사',
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
      sort: '법인',
      bNm: '다다전자',
      bNo: '111-11-11111',
      pNm: '홍길동',
      bAdr: '서울특별시',
      bSector: '제조업',
      bType: '전자부품 제조업',
      phone: '02-000-0000',
      email: 'hong@gmail.com',
    },
  ];

  const columns = [
    {
      title: '코드',
      dataIndex: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '사업자 유형',
      dataIndex: 'sort',
    },
    {
      title: '거래처명',
      dataIndex: 'bNm',
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
 
  return (
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
        dataSource={data}
      />
    </div>
  );
};
export default AccountPage;