const menus = {
  account: {
    label: "거래처 목록",
    key: "account",
    column: [
      {
        title: "코드",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "사업자 유형",
        dataIndex: "sort",
        filters: [
          {
            text: "매입",
            value: "매입",
          },
          {
            text: "매출",
            value: "매출",
          },
          // {
          //   text: "Submenu",
          //   value: "Submenu",
          //   children: [
          //     {
          //       text: "Green",
          //       value: "Green",
          //     },
          //     {
          //       text: "Black",
          //       value: "Black",
          //     },
          //   ],
          // },
        ],
        onFilter: (value, record) => record.sort.indexOf(value) === 0,
      },
      {
        title: "거래처명",
        dataIndex: "bnm",
      },
      {
        title: "사업자 번호",
        dataIndex: "bno",
      },
      {
        title: "대표자",
        dataIndex: "pnm",
      },
      {
        title: "업태",
        dataIndex: "bsector",
      },
      {
        title: "종목",
        dataIndex: "btype",
      },
      {
        title: "전화번호",
        dataIndex: "phone",
      },
    ],
  },
  item: {
    label: "물품 목록",
    key: "item",
  },
  bom: {
    label: "BOM",
    key: "bom",
  },
  user: {
    label: "사원 대장",
    key: "user",
  },
  buy: {
    label: "구매 발주서",
    key: "buy",
  },
  estimate: {
    label: "견적서",
    key: "estimate",
  },
  sell: {
    label: "판매 주문서",
    key: "sell",
  },
  invoice: {
    label: "매입/매출 전표",
    key: "invoice",
  },
  store: {
    label: "입고/출고 관리",
    key: "store",
  },
  inventory: {
    label: "재고 관리",
    key: "inventory",
  },
  production: {
    label: "생산 지시",
    key: "production",
  },
  inspection: {
    label: "제품 검수",
    key: "inspection",
  },
};

export default menus;
