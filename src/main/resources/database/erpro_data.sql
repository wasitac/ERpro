use erpro;

## 사번, 이름, 비밀번호, 생년월일, 전화번호, 이메일, 부서, 직급, 권한, 근무형태, 입사일, 퇴사일, 비밀번호
insert into member values (1001, "홍길동", "1969-05-23", "010-2398-4849", "hong@gmail.com", "ADMIN", "CEO", "ROLE_SUPERADMIN", "정규직", "2001-10-24", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into member values (1002, "이미자", "1987-07-02", "010-4049-3303", "lee@gmail.com", "HR", "EXECUTIVE", "ROLE_SUPERADMIN", "정규직", "2010-05-02", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into member values (1003, "박보검", "1994-12-30", "010-2342-3892", "park@gmail.com", "SALES", "TEAM_LEADER", "ROLE_ADMIN", "정규직", "2013-10-24", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into member values (1004, "김주원", "1996-12-23", "010-4892-3444", "kim@gmail.com", "SALES", "DIRECTOR", "ROLE_ADMIN", "정규직", "2017-11-10", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into member values (1005, "정유진", "1996-02-20", "010-2377-4573", "jung@gmail.cm", "PRODUCTION", "MANAGER", "ROLE_ADMIN", "정규직", "2019-09-07", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into member values (1006, "이지홍", "1997-08-17", "010-8874-7098", "ghong817@gmail.com", "LOGISTICS", "EMPLOYEE", "ROLE_MEMBER", "정규직", "2024-01-21", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into member values (1007, "송창민", "1994-03-17", "010-2232-2900", "kingsv12@gmail.com", "LOGISTICS", "EMPLOYEE", "ROLE_MEMBER", "계약직", "2023-10-24", "2024-01-20", "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");

select * from member;

## 품목번호, 품목구분, 품목명, 단위, 규격, 매입단가, 매출단가 
insert into item values (1, "자재", "3mm 스웨이드 가죽끈", "개(EA)", "3mm", 900, 2000);
insert into item values (2, "자재", "원형 스냅 단추", "개(EA)", "15mm", 200, 800);
insert into item values (3, "자재", "가방 마감 직사각 링", "개(EA)", "150*150(mm)", 800, 2800);
insert into item values (4, "자재", "소꼬발 원형 가죽", "장", "200mm", 600, 2000);
insert into item values (5, "자재", "가방 잠금 버클 락장식", "개(EA)", "30*40(mm)", 900, 3000);
insert into item values (6, "자재", "체인 가방끈 스트랩", "개(EA)", "110(cm)", 1000, 5000);
insert into item values (7, "자재", "라운드 나사형 리벳", "개(EA)", "10*10(mm)", 10000, 11000);
insert into item values (8, "자재", "짧은 가방 가죽 스트랩", "개(EA)", "40(cm)", 2000, 9000);
insert into item values (9, "자재", "모던 시크 가방발 세트 4p", "개(EA)", "10(cm)", 400, 2000);
insert into item values (10, "자재", "슈발베 RAPID ROB 폴딩 타이어", "개(EA)", "275x210(mm)", 10000, 31000);
insert into item values (11, "자재", "WAKE 라이져핸들바", "개(EA)", "780(mm)", 3000, 19000);
insert into item values (12, "자재", "DDK 더블폼 메모리 안장", "개(EA)", "265*212(mm)", 9000, 28000);
insert into item values (13, "자재", "에르고스 액티브 621 안장", "개(EA)", "180*277(mm)", 9000, 130000);
insert into item values (null, "자재", "DST-2060 3베어링 와이드 경량페달", "개(EA)", "85*85(mm)", 11000, 28000);
insert into item values (null, "자재", "ROCKBROS CNC 알루미늄 양면페달", "개(EA)", "85*85(mm)", 10000, 55000);
insert into item values (null, "자재", "시마노 M311 크랭크", "개(EA)", "50(mm)", 8000, 45000);
insert into item values (null, "자재", "SUNRUN 자전거 앞뒤변속기", "개(EA)", "28.6*31.8(mm)*", 9000, 45000);
insert into item values (null, "자재", "TZ31 시마노 변속기", "개(EA)", "28.6(mm)", 2500, 10000);
insert into item values (null, "자재", "시마노 MTB 알리비오 FH-M4050 허브", "개(EA)", "135*146(mm)", 12000, 45000);
insert into item values (null, "자재", "BARADINE 로드 접이식 자전거용 V브레이크패드", "개(EA)", "55(mm)", 1000, 6000);
insert into item values (null, "자재", "MTB 알루미늄 블랙 브레이크레버", "개(EA)", "135*95(mm)", 1400, 10000);
insert into item values (null, "자재", "radius 픽시 브레이크레버", "개(EA)", "55(mm)", 900, 6500);
insert into item values (null, "자재", "ST-F15 자전거 2홀(4cm) 길이조절 킥스텐드", "개(EA)", "40(mm)", 5000, 1600);
insert into item values (null, "자재", "헤드셋용 베어링 41mm", "개(EA)", "41mm", 500, 3500);
insert into item values (null, "자재", "헤드셋용 베어링 47mm", "개(EA)", "47mm", 500, 3500);
insert into item values (null, "자재", "SHIKRA 알루미늄 스템 7도", "개(EA)", "318(mm)", 1500, 14500);
insert into item values (null, "자재", "MTB 자전거용 심보 허브축 퀵릴리즈 레버", "개(EA)", "135mm", 3000, 13000);
insert into item values (null, "자재", "COS 20인치 미니벨로용 노바텍 이중림 앞뒤세트", "개(EA)", "앞100mm 뒤135mm", 40000, 200000);
insert into item values (null, "제품", "메라다 스킬타라", "대", "8.54(kg)", 250000, 1500000);
insert into item values (null, "제품", "캐논도일 올뉴 하이모드", "대", "10.22(kg)", 170000, 1100000);
insert into item values (null, "제품", "CBC 탐머신 SKR01 FU 울테라 ", "대", "13.12(kg)", 200000, 1200000);
insert into item values (null, "제품", "포카스 헌터 아틀란티스5", "대", "8.7(kg)", 500000, 3200000);
insert into item values (null, "제품", "데일리 탑 핸드백", "개", "17*14*10(cm)", 9000, 135000);
insert into item values (null, "제품", "데일리 탑 핸드백", "개", "17*14*10(cm)", 30000, 135000);
insert into item values (null, "제품", "고르고쉬 가죽 체인 백", "개", "21*15*12(cm)", 10000, 77000);
insert into item values (null, "제품", "케이글 데일리 크로스 바디백", "개", "30*17*15(cm)", 50000, 20000);

select * from item;

## 거래처 번호, 담당자명, 사업자등록번호, 거래처명, 유형, 대표자, 업태, 종목, 연락처, 사업장주소, 이메일
insert into account values (1, "김주원", "654-32-10987", "퓨어그로우 바이크", "매출처", "이수근", "운동용품 및 자전거 소매업", "자전거 및 자전거 용품 소매", "031-6443-4325", "경기도 시흥시 매화산단로 45", "sugun@gmail.com"); 
insert into account values (2, "이지홍", "123-45-67890", "블루스카이 인더스트리", "매출처", "이미자", "건설 및 건축", "리모델링 ", "02-5198-4566", "인천광역시 미추홀구 한나루로 563", "mija@gmail.com");
insert into account values (3, "이미자", "543-21-09876", "센트럴 솔루션", "매입처", "강호동", "건설 및 건축", "주택 건설", "031-2833-5919", "서울특별시 금천구 시흥대로 46 13동", "hodong@gmail.com");
insert into account values (4, "박보검", "987-65-43210", "실버웨이브 그룹", "매출처", "유지태", "건설 및 건축", "상업물 건축", "02-3845-6847", "인천광역시 남동구 경인로 744", "jitae@gmail.com");
insert into account values (5, "이지홍", "201-88-18954", "그린테크 솔루션즈", "매입처", "홍길동", " IT 서비스", "시스템 개발,", "02-3159-2368", "경기도 화성시 팔탄면 3.1만세로", "gildong@gmail.com");  
insert into account values (null, "김마리", "789-01-23456", "테크놀로지 엑스플로어", "매입처", "김수로", "IT 서비스", "시스템 개발", "02-1224-5778", "서울특별시 강남구 테헤란로 12", "adventureExplorer@yahoo.com");
insert into account values (null, "소낙려", "345-67-89012", "타고르고타", "매입처", "마장평", " 자전거 제조", "자전거 구성품 제조", "031-9876-5432", "경기도 성남시 분당구 대왕판교로 789", "fashionista.email@gmail.com");  
insert into account values (null, "마추일", "890-12-34567", "금수강산", "매출처", "강유순", "운동용품 및 자전거 소매업", "자전거 및 액세서리 판매", "032-2345-6789", "인천광역시 남동구 인하로 33-1 901호", "codingPro@hotmail.com");  
insert into account values (null, "김관평", "234-56-78901", "미라지 마운트", "매입처", "손상향", "자전거 제조", "자전거 구성품 제조", "051-4567-8901", "부산광역시 해운대구 송정해변로 456", "musicLover@naver.com");  
insert into account values (null, "곽관창", "678-90-12345", "라이트닝 라이더즈", "매출처", "하후돈", "운동용품 및 자전거 소매업", "자전거 및 자전거 용품 소매", "053-7890-1234", "대구광역시 중구 동성로 78", "emailNinja567@gmail.com");  
insert into account values (null, "민시호", "432-10-98765", "어반플로우 패션백스", "매입처", "조이권", "핸드백 및 지갑 제조업", "가방 제조", "042-5678-9012", "대전광역시 서구 계룡로 23", "happyCamper@gmail.com");  
insert into account values (null, "남궁소하", "109-87-65432", "아임플라잉", "매출처", "황손권", "가방 및 기타 가죽제품 소매업", "여행용 가방 소매", "062-3456-7890", "광주광역시 서구 농성로 54 12호", "galaxyExplorer@daum.net");  
insert into account values (null, "이사라", "765-43-21098", "트렌드토트", "매입처", "김여채", "핸드백 및 지갑 제조업", "가죽제 수공예 재료 도매", "044-6789-0123", "충청북도 청주시 상당구 충대로 67", "rocketScience@gmail.com");  
insert into account values (null, "최주유", "321-09-87654", "룩앤로드", "매출처", "박두락", "가방 및 기타 가죽제품 소매업", "가방 소매업", "053-4321-0987", "대구광역시 달서구 학정로 43", "cryptoWhiz@gmail.com");  
insert into account values (null, "박제오", "876-54-32109", "에어포트패션 터치", "매출처", "윤여포", "가방 및 기타 가죽제품 소매업", "가방 소매업", "032-1098-7654", "인천광역시 남동구 구월로 109", "stealthyCoder@gmail.com");  
insert into account values (null, "정장료", "234-56-78901", "스타일캐리어", "매입처", "임루주", "핸드백 및 지갑 제조업", " 가죽가방 소매", "063-8907-6543", "전라남도 목포시 영산로 106", "creativeGenius@daum.net");  
insert into account values (null, "김마리", "210-98-76543", "스피드사이클 ", "매출처", "신사유", "운동용품 및 자전거 소매업", "자전거 및 자전거 용품 소매", "063-8907-6543", "전라북도 전주시 완산구 한나로 97-2", "skyHigh@gmail.com");  
insert into account values (null, "김관평", "987-65-43210", "라이딩플로우", "매입처", "정지후", "이륜 자전거 제조", "자전거 구성품 제조", "041-6789-0123", "충청남도 천안시 동남구 만남로 678", "futuristicMind@gmail.com");  
insert into account values (null, "민시호", "876-54-32109", "어드벤처사이클", "매입처", "소향아", "자전거 액세서리 및 의류 제조", "자전거 구성품 제조", "044-1234-5678", "충청북도 청주시 상당구 상당로 41 209호", "malangoo@gmail.com");  
insert into account values (null, "이사라", "210-98-76543", "바이크마스터", "매출처", "한무제", "운동용품 및 자전거 소매업", "자전거 및 자전거 용품 소매", "051-8901-2345", "부산광역시 사하구 다대로 27-1 612호", "zigzag@gmail.com");  

  



select * from account;

## 주문 번호, 거래처명, 사업자등록번호, 유형(구매/판매), 예정일, 완료일
insert into orders values (1, "퓨어그로우 바이크", "654-32-10987", "판매", "2023-06-25", "2023-07-10");
insert into orders values (2, "금수강산", "890-12-34567", "판매", "2023-07-12", "2023-07-27");
insert into orders values (3, "타고르고타", "345-67-89012", "구매", "2023-8-18", "2023-08-30");
insert into orders values (4, "라이트닝 라이더즈", "678-90-12345", "판매", "2023-08-30", "2023-09-06");
insert into orders values (5, "미라지 마운트", "234-56-78901", "구매", "2023-09-09", "2023-09-21");
insert into orders values (6, "어반플로우 패션백스", "432-10-98765", "구매", "2023-09-30", "2023-10-10");
insert into orders values (7, "아임플라잉", "109-87-65432", "판매", "2023-10-10", "2023-10-29");
insert into orders values (8, "룩앤로드", "321-09-87654", "판매", "2023-10-30", "2023-11-11");
insert into orders values (null, "트렌드토트", "765-43-21098", "구매", "2023-10-30", "2023-11-01");
insert into orders values (null, "라이딩플로우", "987-65-43210", "구매", "2023-11-12", "2023-11-17");
insert into orders values (null, "스타일캐리어", "234-56-78901", "구매", "2023-11-20", "2023-11-28");
insert into orders values (null, "어드벤처사이클", "876-54-32109", "구매", "2023-12-05", "2023-12-25");
insert into orders values (null, "바이크마스터", "210-98-76543", "판매", "2023-12-05", "2023-12-25");
insert into orders values (null, "스피드사이클", "210-98-76543", "판매", "2023-12-07", "2023-12-12");
insert into orders values (null, "에어포트패션 터치", "876-54-32109", "판매", "2023-12-15", "2023-12-20");
insert into orders values (null, "타고르고타", "876-54-32109", "구매", "2023-12-16", "2023-12-22");
insert into orders values (null, "어반플로우 패션백스", "876-54-32109", "구매", "2023-12-23", "2023-12-26");
insert into orders values (null, "스피드사이클", "210-98-76543", "판매", "2023-12-31", "2024-01-06");
insert into orders values (null, "트렌드토트", "765-43-21098", "구매", "2024-01-15", "2023-01-18");
insert into orders values (null, "금수강산", "890-12-34567", "판매", "2024-02-08", "2023-02-14");

## 주문품목번호, 주문번호, 구분, 품목번호, 품목명, 단위, 규격, 수량, 단가, 부가세, 합계금액
insert into orders_item values (1, 1, "자재", 13, "DST-2060 3베어링 와이드 경량페달", "개(EA)", "85*85(mm)", 50, 28000, 10, 1540000);
insert into orders_item values (2, 2, "자재", 20, "BARADINE 로드 접이식 자전거용 V브레이크패드", "개(EA)", "55(mm)", 100, 6000, 10, 660000);
insert into orders_item values (3, 3, "자재", 21, "MTB 알루미늄 블랙 브레이크레버", "개(EA)", "135*95(mm)", 300, 10000, 10, 3300000);
insert into orders_item values (4, 4, "자재", 24, "헤드셋용 베어링 41mm", "개(EA)", "41mm", 210, 500, 10, 115,500);
insert into orders_item values (5, 5, "자재", 28, "COS 20인치 미니벨로용 노바텍 이중림 앞뒤세트", "개(EA)", "앞100mm*뒤135mm", 100, 200000, 10, 22000000);
insert into orders_item values (6, 6, "자재", 6, "소금", "포대", "600*600", 100, 100, 10, 11000);
insert into orders_item values (7, 7, "제품", 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (8, 8, "자재", 8, "설탕", "포대", "600*600", 100, 100, 10, 11000);
insert into orders_item values (null, 2, "제품", 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (null, 2, "자재", 8, "설탕", "포대", "600*600", 100, 100, 10, 11000);

select * from orders_item;

## 생산지시서 번호, 주문 번호, 거래처명, 담당자명, 품목번호, 품목명, 단위, 규격, 생산량, 지시일자
insert into production values (1, 1, "가나테크", "이지홍", 3, "CDL-3LR", "1개", "700*2100", 10, "2024-01-29");
insert into production values (2, 2, "가가상사", "이지홍", 2, "K8015-5", "1개", "600*600", 1, "2024-01-30");
insert into production values (3, 3, "나나금속", "이미자", 1, "SNOW WASH", "1개", "7*8.5*900", 5, "2024-01-30");
insert into production values (4, 4, "다다전자", "박보검", 4, "SW-루미노소", "1개", "300*600", 5, "2024-02-04");
insert into production values (5, 5, "가다산업", "김주원", 5, "DQH3297OB", "1개", "300*600", 5, "2024-02-21");

select * from production;

## 입출고번호, 구분(입고/출고), 거래처명, 주문번호, 입출고일자

insert into store values (null, "IN", "가나테크", 1, "2024-01-29");
insert into store values (null, "OUT", "가가상사", 2, "2024-02-07");
insert into store values (null, "OUT", "나나금속", 5, "2024-02-20");
insert into store values (null, "IN", "다다전자", 3, "2024-02-17");
insert into store values (null, "IN", "가다산업", 4, "2024-02-28");

select * from store;

## 입출고품목번호, 입출고번호, 품목번호, 품목명, 단위, 규격, 수량, 단가, 부가세, 합계금액
insert into store_item values (1, 1, 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into store_item values (2, 2, 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (3, 3, 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (4, 4, 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into store_item values (5, 5, 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (6, 2, 6, "소금", "포대", "600*600", 100, 100, 10, 11000);
insert into store_item values (7, 3, 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (8, 4, 8, "설탕", "포대", "600*600", 100, 100, 10, 11000);

select * from store_item;

## 전표번호, 입출고 번호, 거래구분, 결제방법, 비고, 거래일자
insert into invoice values (1, 1, "매출", "카드", "-", "2024-01-10");
insert into invoice values (2, 2, "매출", "카드", "2차 주문", "2024-01-12");
insert into invoice values (3, 3, "매입", "현금", "장부 문의", "2024-01-17");
insert into invoice values (4, 4, "매출", "카드", "-", "2024-01-21");
insert into invoice values (5, 5, "매입", "카드", "추가 매입", "2024-02-02");
insert into invoice values (6, 5, "매입", "현금", "3차 발주", "2024-02-10");

select * from invoice;

## 전표품목번호, 전표번호, 품목번호, 품목명, 단위, 규격, 수량, 단가, 부가세, 합계금액
insert into invoice_item values (1, 1, 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (2, 2, 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (3, 3, 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (4, 4, 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (5, 5, 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);

## BOM번호, 품목 번호, 자재 번호, 소요량, 비고
insert into BOM values (1, 1, 5, 150, "-");
insert into BOM values (2, 1, 6, 200, "-");
insert into BOM values (3, 1, 7, 4800, "-");
insert into BOM values (4, 2, 7, 3570, "-");
insert into BOM values (5, 2, 8, 34600, "-");
insert into BOM values (6, 3, 9, 350, "-");
insert into BOM values (7, 3, 5, 12300, "-");
insert into BOM values (8, 3, 8, 1900, "-");
insert into BOM values (9, 4, 5, 6700, "-");
insert into BOM values (10, 4, 6, 80, "-");
insert into BOM values (11, 4, 7, 240, "-");
select * from BOM;

 ## 재고번호, 품목 번호, 품목명, 입출고번호, 기초재고 수량, 기초재고 금액, 입고(반출), 출고(반입), 현재고량, 적정재고, 부족수량, 매출수량, 예상발주량
insert into inventory values (1, 1, "곰표밀가루", 1, 10, 10000, 10, 5, 15, 20, 5, 5, 5);
insert into inventory values (2, 2, "검은콩두유", 2, 20, 12000, 15, 10, 25, 50, 25, 25, 25);
insert into inventory values (3, 3, "별표생수", 3, 30, 9000, 20, 12, 38, 40, 2, 38, 5);
insert into inventory values (4, 4, "양반현미밥", 4, 40, 7000, 30, 20, 50, 80, 30, 20, 35);
insert into inventory values (5, 5, "우유분말", 5, 50, 150000, 45, 35, 60, 70, 10, 35, 12);

select * from inventory;

## 견적 번호, 거래처명, 작성일자, 유효기간, 납기일자, 견적금액, 주문처리
insert into estimate values (1, 1, "2024-01-05", "2024-02-20", 1050000, "진행중");
insert into estimate values (2, 2, "2024-01-10", "2024-02-20", 1050000, "진행중");
insert into estimate values (3, 3, "2024-01-12", "2024-02-20", 1050000, "완료");
insert into estimate values (4, 4, "2024-01-26", "2024-02-20", 1050000, "취소");
insert into estimate values (5, 5, "2024-02-01", "2024-02-20", 1050000, "진행중");
insert into estimate values (6, 3, "2024-02-17", "2024-02-20", 1050000, "취소");
insert into estimate values (7, 5, "2024-02-20", "2024-02-20", 1050000, "완료");

## 견적품목번호, 견적번호, 품목번호, 품목명, 단위, 규격, 수량, 단가, 부가세, 합계금액
insert into estimate_item values (1, 1, 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (2, 2, 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (3, 3, 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (4, 4, 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (5, 5, 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (6, 6, 6, "소금", "포대", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (7, 7, 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);

## 검사요청번호, 입출고번호, 신청자명, 검수자명, 물품번호, 품목명, 단위, 규격, 생산량, 적격, 부적격, 합격여부, 일자
insert into inspection values (1, 1, "이지홍", "박보검", "7", "현수막", "개", "1800*600", 10, 10, 0, "PASS", "2024-01-05");
insert into inspection values (2, 2, "송창민", "홍길동", "5", "안전매뉴얼", "개", "700*600", 15, 7, 8, "FAIL",  "2024-01-10");
insert into inspection values (3, 3, "정유진", "이미자", "6", "엠블럼", "개", "4*5", 100, 92, 8, "PASS", "2024-01-12");
insert into inspection values (4, 4, "이지홍", "박보검", "9", "리플릿", "개", "245*140", 200, 198, 2, "PASS", "2024-01-26");
insert into inspection values (5, 5, "김주원", "홍길동", "8", "K8015-5", "개", "1800*600", 5, 0, 5, "FAIL", "2024-02-01");

select * from inspection;