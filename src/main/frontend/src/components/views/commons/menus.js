const menus = {
  // 거래처 - 김주원
  account: {
    label: "거래처 목록",
    key: "account",
    column: [
      {
        title: "번호",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "ascend",
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
    column: [
      {
        title: "품목번호",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목구분",
        dataIndex: "sort",
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
        title: "매입단가",
        dataIndex: "buyPrice",
      },
      {
        title: "매출단가",
        dataIndex: "sellPrice",
      },
    ],
  },

  // BOM
  bom: {
    label: "BOM",
    key: "bom",
    column: [
      {
        title: "품목번호",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목구분",
        dataIndex: "sort",
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
        title: "매입단가",
        dataIndex: "buyPrice",
      },
      {
        title: "매출단가",
        dataIndex: "sellPrice",
      },
    ],
  },

  // 사원 대장
  member: {
    label: "사원 대장",
    key: "member",
    column: [
      {
        title: "사번",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "이름",
        dataIndex: "name",
      },
      {
        title: "생년월일",
        dataIndex: "birth",
      },
      {
        title: "연락처",
        dataIndex: "phone",
      },
      {
        title: "부서",
        dataIndex: "department",
      },
      {
        title: "직급",
        dataIndex: "memberRank",
      },
      {
        title: "근무 형태",
        dataIndex: "workType",
      },
      {
        title: "입사일",
        dataIndex: "insertDate",
      },
      {
        title: "퇴사일",
        dataIndex: "retireDate",
      },
    ],
  },

  // 구매/판매 주문서 - 정유진
  orders: {
    label: "구매/판매 주문서",
    key: "orders",
    column: [
      //컬럼들
      {
        title: "주문번호",
        dataIndex: "id",
        // 정렬
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "거래처명",
        dataIndex: "bnm",
      },
      {
        title: "사업자 등록번호",
        dataIndex: "bno",
      },
      {
        title: "유형",
        dataIndex: "type",
        filters: [
          {
            text: "구매",
            value: "BUY",
          },
          {
            text: "판매",
            value: "SELL",
          },
        ],
      },
      {
        title: "예정일",
        dataIndex: "dueDate",
      },
      {
        title: "완료일",
        dataIndex: "completionDate",
      },
    ],
  },

  // 견적서 - 정유진
  estimate: {
    label: "견적서",
    key: "estimate",
    column: [
      {
        title: "견적번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "거래처번호",
        dataIndex: "accountId",
      },
      {
        title: "작성일자",
        dataIndex: "insertDate",
      },
      {
        title: "유효기간",
        dataIndex: "expirationDate",
      },
      {
        title: "납기일자",
        dataIndex: "dueDate",
      },
      {
        title: "합계금액",
        dataIndex: "total",
      },
      {
        title: "주문처리",
        dataIndex: "isOrder",
      },
    ],
  },

  // 매입/매출 전표 - 정유진
  invoice: {
    label: "매입/매출 전표",
    key: "invoice",
    column: [
      {
        title: "전표번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "입출고번호",
        dataIndex: "storeId",
      },
      {
        title: "거래구분",
        dataIndex: "sort",
        filters: [
          {
            text: "구매",
            value: "PURCHASE",
          },
          {
            text: "판매",
            value: "SALES",
          },
        ],
      },
      {
        title: "결제방법",
        dataIndex: "payment",
      },
      {
        title: "비고",
        dataIndex: "note",
      },
      {
        title: "거래일자",
        dataIndex: "invoiceDate",
      },
    ],
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
        title: "구분",
        dataIndex: "sort",
        filters: [
          {
            text: "입고",
            value: "입고",
          },
          {
            text: "출고",
            value: "출고",
          },
        ],
        onFilter: (value, record) => record.sort.indexOf(value) === 0,
      },
      {
        title: "거래처 명",
        dataIndex: "bnm",
      },
      {
        title: "주문 번호",
        dataIndex: "orderId",
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
        title: "재고 번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목 번호",
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
        title: "거래처명",
        dataIndex: "bnm",
      },
      {
        title: "주문 번호",
        dataIndex: "orderId",
      },
      {
        title: "물품 번호",
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
        title: "담당자 번호",
        dataIndex: "memberName",
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
        dataIndex: "proposerName",
      },
      {
        title: "검수자",
        dataIndex: "inspectorName",
      },
      {
        title: "품목 번호",
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
  orderItem: {
    label: "주문 품목 상세",
    key: "estimateItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "주문번호",
        dataIndex: "ordersId",
      },
      {
        title: "구분",
        dataIndex: "sort",
      },
      {
        title: "품목번호",
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
        title: "부가세",
        dataIndex: "vat",
      },
      {
        title: "합계금액",
        dataIndex: "total",
      },
    ],
  },
  storeItem: {
    label: "입출고 품목 상세",
    key: "storeItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "itemId",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
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
        title: "부가세",
        dataIndex: "vat",
      },
      {
        title: "합계금액",
        dataIndex: "total",
      },
    ],
  },

  invoiceItem: {
    label: "전표 품목 상세",
    key: "invoiceItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "전표번호",
        dataIndex: "invoice",
      },
      {
        title: "품목번호",
        dataIndex: "item",
      },
      {
        title: "품목명",
        dataIndex: "item",
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
        title: "부가세",
        dataIndex: "vat",
      },
      {
        title: "합계금액",
        dataIndex: "total",
      },
    ],
  },

  estimateItem: {
    label: "견적 품목 상세",
    key: "estimateItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "견적번호",
        dataIndex: "estimateId",
      },
      {
        title: "품목번호",
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
        title: "부가세",
        dataIndex: "vat",
      },
      {
        title: "합계금액",
        dataIndex: "total",
      },
    ],
  },
};

export default menus;
