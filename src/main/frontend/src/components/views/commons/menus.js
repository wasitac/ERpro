const menus = {
  main: {
    label: "메인 페이지",
    key: "main",
  },
  // 거래처 - 김주원
  account: {
    label: "거래처 목록",
    key: "account",

    column: [
      {
        title: "번호",
        dataIndex: "id",
        width: 120,
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "사업자 유형",
        dataIndex: "sort",
        width: 120,
        filters: [
          {
            text: "매입처",
            value: "매입처",
          },
          {
            text: "매출처",
            value: "매출처",
          },
        ],
        onFilter: (value, record) => record.sort.indexOf(value) === 0,
      },
      {
        title: "거래처명",
        dataIndex: "bnm",
        width: 200,
      },
      {
        title: "사업자 번호",
        dataIndex: "bno",
        width: 140,
      },
      {
        title: "대표자",
        dataIndex: "pnm",
        width: 100,
      },
      {
        title: "업태",
        dataIndex: "bsector",
        width: 200,
      },
      {
        title: "종목",
        dataIndex: "btype",
        width: 200,
      },
      {
        title: "전화번호",
        dataIndex: "phone",
        width: 140,
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
        width: 120,
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목구분",
        dataIndex: "sort",
        width: 120,
        filters: [
          {
            text: "자재",
            value: "자재",
          },
          {
            text: "제품",
            value: "제품",
          },
        ],
        onFilter: (value, record) => record.sort.indexOf(value) === 0,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "매입단가",
        dataIndex: "buyPrice",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.buyPrice - b.buyPrice,
      },
      {
        title: "매출단가",
        dataIndex: "sellPrice",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.sellPrice - b.sellPrice,
      },
      {},
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
        width: 120,
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "매입단가",
        dataIndex: "buyPrice",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.buyPrice - b.buyPrice,
      },
      {
        title: "매출단가",
        dataIndex: "sellPrice",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.sellPrice - b.sellPrice,
      },
      {},
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
        width: 120,
        // 정렬
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "이름",
        dataIndex: "name",
        width: 100,
      },
      {
        title: "생년월일",
        dataIndex: "birthDate",
        width: 100,
      },
      {
        title: "연락처",
        dataIndex: "phone",
        width: 140,
      },
      {
        title: "부서",
        dataIndex: "department",
        width: 100,
        filters: [
          {
            text: "관리",
            value: "관리",
          },
          {
            text: "인사",
            value: "인사",
          },
          {
            text: "영업",
            value: "영업",
          },
          {
            text: "생산",
            value: "생산",
          },
          {
            text: "물류",
            value: "물류",
          },
        ],
        onFilter: (value, record) => record.department.indexOf(value) === 0,
      },
      {
        title: "직급",
        dataIndex: "memberRank",
        width: 100,
        filters: [
          {
            text: "사장",
            value: "사장",
          },
          {
            text: "부장",
            value: "부장",
          },
          {
            text: "차장",
            value: "차장",
          },
          {
            text: "과장",
            value: "과장",
          },
          {
            text: "대리",
            value: "대리",
          },
          {
            text: "사원",
            value: "사원",
          },
        ],
        onFilter: (value, record) => record.memberRank.indexOf(value) === 0,
      },
      {
        title: "근무 형태",
        dataIndex: "workType",
        width: 120,
        filters: [
          {
            text: "정규직",
            value: "정규직",
          },
          {
            text: "계약직",
            value: "계약직",
          },
        ],
        onFilter: (value, record) => record.workType.indexOf(value) === 0,
      },
      {
        title: "입사일",
        dataIndex: "insertDate",
        width: 100,
      },
      {
        title: "퇴사일",
        dataIndex: "retireDate",
        width: 100,
      },
      {},
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
        width: 120,
        // 정렬
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "거래처명",
        dataIndex: "bnm",
        width: 200,
      },
      {
        title: "사업자 등록번호",
        dataIndex: "bno",
        width: 140,
      },
      {
        title: "유형",
        dataIndex: "sort",
        width: 100,
        filters: [
          {
            text: "구매",
            value: "구매",
          },
          {
            text: "판매",
            value: "판매",
          },
        ],
        onFilter: (value, record) => record.sort.indexOf(value) === 0,
      },
      {
        title: "예정일",
        dataIndex: "dueDate",
        width: 100,
      },
      {
        title: "완료일",
        dataIndex: "completionDate",
        width: 100,
      },
      {},
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
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "거래처 번호",
        dataIndex: "accountId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.accountId - b.accountId,
      },
      {
        title: "작성일자",
        dataIndex: "insertDate",
        width: 100,
      },
      {
        title: "납기일자",
        dataIndex: "dueDate",
        width: 100,
      },
      {
        title: "합계금액",
        dataIndex: "total",
        width: 200,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.total - b.total,
      },
      {
        title: "주문처리",
        dataIndex: "isOrder",
        width: 120,
        filters: [
          {
            text: "진행중",
            value: "진행중",
          },
          {
            text: "완료",
            value: "완료",
          },
          {
            text: "취소",
            value: "취소",
          },
        ],
        onFilter: (value, record) => record.isOrder.indexOf(value) === 0,
      },
      {},
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
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "입출고번호",
        dataIndex: "storeId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.storeId - b.storeId,
      },
      {
        title: "거래구분",
        dataIndex: "sort",
        width: 120,
        filters: [
          {
            text: "구매",
            value: "구매",
          },
          {
            text: "판매",
            value: "판매",
          },
        ],
        onFilter: (value, record) => record.sort.indexOf(value) === 0,
      },
      {
        title: "결제방법",
        dataIndex: "payment",
        width: 100,
        filters: [
          {
            text: "카드",
            value: "카드",
          },
          {
            text: "현금",
            value: "현금",
          },
        ],
        onFilter: (value, record) => record.payment.indexOf(value) === 0,
      },
      {
        title: "거래일자",
        dataIndex: "invoiceDate",
        width: 100,
      },
      {
        title: "비고",
        dataIndex: "note",
      },
      {},
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
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "구분",
        dataIndex: "sort",
        width: 80,
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
        title: "거래처명",
        dataIndex: "bnm",
        width: 200,
      },
      {
        title: "주문 번호",
        dataIndex: "orderId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.orderId - b.orderId,
      },
      {
        title: "입출고 일자",
        dataIndex: "storeDate",
        width: 100,
      },
      {},
    ],
  },

  // 재고 관리 - 이지홍
  inventory: {
    label: "재고 관리",
    key: "inventory",
    column: [
      {
        title: "품목 번호",
        dataIndex: "id",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 250,
      },
      {
        title: "기초재고 수량",
        dataIndex: "openingCount",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.openingCount - b.openingCount,
      },
      {
        title: "기초재고 금액",
        dataIndex: "openingAmount",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.openingAmount - b.openingAmount,
      },
      {
        title: "입고",
        dataIndex: "storeIn",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.storeIn - b.storeIn,
      },
      {
        title: "출고",
        dataIndex: "storeOut",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.storeOut - b.storeOut,
      },
      {
        title: "현재고량",
        dataIndex: "currentInventory",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.currentInventory - b.currentInventory,
      },
      {
        title: "적정재고",
        dataIndex: "appropriateInventory",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.appropriateInventory - b.appropriateInventory,
      },
      {
        title: "부족수량",
        dataIndex: "lack",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.lack - b.lack,
      },
    ],
  },

  // 생산 지시
  production: {
    label: "생산 지시",
    key: "production",
    column: [
      {
        title: "지시 번호",
        dataIndex: "id",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "거래처명",
        dataIndex: "bnm",
        width: 200,
      },
      {
        title: "주문 번호",
        dataIndex: "orderId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.orderId - b.orderId,
      },
      {
        title: "물품 번호",
        dataIndex: "itemId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.itemId - b.itemId,
      },
      {
        title: "물품명",
        dataIndex: "itemName",
        width: 250,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "생산량",
        dataIndex: "count",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: "담당자명",
        dataIndex: "memberName",
        width: 100,
      },
      {
        title: "지시 일자",
        dataIndex: "productionDate",
        width: 100,
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
        width: 110,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "입/출고 번호",
        dataIndex: "storeId",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.storeId - b.storeId,
      },
      {
        title: "신청자",
        dataIndex: "proposerName",
        width: 90,
      },
      {
        title: "검수자",
        dataIndex: "inspectorName",
        width: 90,
      },
      {
        title: "품목 번호",
        dataIndex: "itemId",
        width: 100,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.itemId - b.itemId,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 70,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "생산량",
        dataIndex: "count",
        width: 70,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: "적격",
        dataIndex: "eligible",
        width: 70,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.eligible - b.eligible,
      },
      {
        title: "부적격",
        dataIndex: "ineligible",
        width: 70,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.ineligible - b.ineligible,
      },
      {
        title: "합격",
        dataIndex: "pass",
        width: 60,
        filters: [
          {
            text: "PASS",
            value: "PASS",
          },
          {
            text: "FAIL",
            value: "FAIL",
          },
        ],
        onFilter: (value, record) => record.pass.indexOf(value) === 0,
      },
      {
        title: "검수일자",
        dataIndex: "inspectionDate",
        width: 100,
      },
    ],
  },
  ordersItem: {
    label: "주문 품목 상세",
    key: "ordersItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "itemId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "수량",
        dataIndex: "count",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: "단가",
        dataIndex: "price",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: "부가세",
        dataIndex: "vat",
        width: 150,
      },
      {
        title: "합계금액",
        dataIndex: "total",
        width: 200,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.total - b.total,
      },
      {},
    ],
  },
  storeItem: {
    label: "입출고 품목 상세",
    key: "storeItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "itemId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "수량",
        dataIndex: "count",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: "단가",
        dataIndex: "price",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: "부가세",
        dataIndex: "vat",
        width: 150,
      },
      {
        title: "합계금액",
        dataIndex: "total",
        width: 200,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.total - b.total,
      },
      {},
    ],
  },

  invoiceItem: {
    label: "전표 품목 상세",
    key: "invoiceItem",
    column: [
      {
        title: "품목번호",
        width: 120,
        dataIndex: "itemId",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.itemId - b.itemId,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "수량",
        dataIndex: "count",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: "단가",
        dataIndex: "price",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: "부가세",
        dataIndex: "vat",
        width: 150,
      },
      {
        title: "합계금액",
        dataIndex: "total",
        width: 200,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.total - b.total,
      },
      {},
    ],
  },

  estimateItem: {
    label: "견적 품목 상세",
    key: "estimateItem",
    column: [
      {
        title: "품목번호",
        dataIndex: "itemId",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.itemId - b.itemId,
      },
      {
        title: "품목명",
        dataIndex: "itemName",
        width: 330,
      },
      {
        title: "단위",
        dataIndex: "unit",
        width: 100,
      },
      {
        title: "규격",
        dataIndex: "spec",
        width: 160,
      },
      {
        title: "수량",
        dataIndex: "count",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: "단가",
        dataIndex: "price",
        width: 150,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: "부가세",
        dataIndex: "vat",
        width: 150,
      },
      {
        title: "합계금액",
        dataIndex: "total",
        width: 200,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.total - b.total,
      },
      {},
    ],
  },
};

export default menus;
