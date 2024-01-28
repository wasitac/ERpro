const menus = {
  // 거래처 - 김주원
  account: {
    label: "거래처 목록",
    key: "account",
    column: [
      {
        title: "코드",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "사업자 유형",
        dataIndex: "sort",
        filters: [
          {
            text: "매입처",
            value: "매입처",
          },
          {
            text: "매출처",
            value: "매출처",
          },
          {
            text: "혼합",
            value: "혼합",
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

  // 품목
  item: {
    label: "물품 목록",
    key: "item",
  },

  // BOM
  bom: {
    label: "BOM",
    key: "bom",
  },

  // 사원 대장
  user: {
    label: "사원 대장",
    key: "user",
  },

  // 구매/판매 주문서 - 정유진
  buy: {
    label: "구매/판매 주문서",
    key: "order",
    column: [
      //컬럼들
      {
        title: "코드",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
    ],
  },

  // 견적서
  estimate: {
    label: "견적서",
    key: "estimate",
  },

  // 매입/매출 전표
  invoice: {
    label: "매입/매출 전표",
    key: "invoice",
  },

  // 입고/출고 관리 - 이지홍
  store: {
    label: "입고/출고 관리",
    key: "store",
    column: [
      {
        title: "입출고 번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "거래처 코드",
        dataIndex: "accountId",
      },
      {
        title: "발주 번호",
        dataIndex: "orderId",
      },
      {
        title: "품목 코드",
        dataIndex: "itemId",
      },
      {
        title: "품목명",
        dataIndex: "itemName",
      },
      {
        title: "단위",
        dataIndex: "unit",
      },
      {
        title: "규격",
        dataIndex: "spec",
      },
      {
        title: "수량",
        dataIndex: "count",
      },
      {
        title: "단가",
        dataIndex: "price",
      },
      {
        title: "공급가액",
        dataIndex: "supplyPrice",
      },
      {
        title: "부가세액",
        dataIndex: "vat",
      },
      {
        title: "합계금액",
        dataIndex: "total",
      },
      {
        title: "입출고 일자",
        dataIndex: "storeDate",
      },
    ],
  },

  // 재고 관리 - 이지홍
  inventory: {
    label: "재고 관리",
    key: "inventory",
    column: [
      {
        title: "재고 코드",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목 코드",
        dataIndex: "itemId",
      },
      {
        title: "입/출고 번호",
        dataIndex: "storeId",
      },
      {
        title: "기초재고 수량",
        dataIndex: "openingCount",
      },
      {
        title: "기초재고 금액",
        dataIndex: "openingAmount",
      },
      {
        title: "입고",
        dataIndex: "storeIn",
      },
      {
        title: "출고",
        dataIndex: "storeOut",
      },
      {
        title: "현재고량",
        dataIndex: "currentInventory",
      },
      {
        title: "적정재고",
        dataIndex: "appropriateInventory",
      },
      {
        title: "부족수량",
        dataIndex: "lack",
      },
      {
        title: "매출수량",
        dataIndex: "sales",
      },
      {
        title: "예상발주량",
        dataIndex: "expectedOrder",
      },
    ],
  },

  // 생산 지시
  production: {
    label: "생산 지시",
    key: "production",
    column: [
      {
        title: "생산 지시서 번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "주문 번호",
        dataIndex: "order_id",
      },
      {
        title: "거래처 코드",
        dataIndex: "account_id",
      },
      {
        title: "담당자 코드",
        dataIndex: "user_id",
      },
      {
        title: "물품 코드",
        dataIndex: "itemId",
      },
      {
        title: "물품명",
        dataIndex: "itemName",
      },
      {
        title: "단위",
        dataIndex: "unit",
      },
      {
        title: "규격",
        dataIndex: "spec",
      },
      {
        title: "생산량",
        dataIndex: "count",
      },
      {
        title: "지시 일자",
        dataIndex: "productionDate",
      },
    ],
  },

  // 제품 검수 - 이지홍
  inspection: {
    label: "제품 검수",
    key: "inspection",
    column: [
      {
        title: "검수 번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "입/출고 번호",
        dataIndex: "storeId",
      },
      {
        title: "신청자",
        dataIndex: "proposerId",
      },
      {
        title: "검수자",
        dataIndex: "inspectorId",
      },
      {
        title: "품목 코드",
        dataIndex: "itemId",
      },
      {
        title: "품목명",
        dataIndex: "itemName",
      },
      {
        title: "단위",
        dataIndex: "unit",
      },
      {
        title: "규격",
        dataIndex: "spec",
      },
      {
        title: "생산량",
        dataIndex: "count",
      },
      {
        title: "적격",
        dataIndex: "eligible",
      },
      {
        title: "부적격",
        dataIndex: "ineligible",
      },
      {
        title: "합격여부",
        dataIndex: "pass",
      },
      {
        title: "검수일자",
        dataIndex: "inspectionDate",
      },
    ],
  },
};

export default menus;
