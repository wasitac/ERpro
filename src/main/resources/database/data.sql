use erpro;

insert into member values (1001, "홍길동", "1969-05-23", "010-2398-4849", "hong@gmail.com", "ADMIN", "CEO", "ROLE_SUPERADMIN", "정규직", "2001-10-24", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into member values (1002, "이미자", "1987-07-02", "010-4049-3303", "lee@gmail.com", "HR", "EXECUTIVE", "ROLE_SUPERADMIN", "정규직", "2010-05-02", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into member values (1003, "박보검", "1994-12-30", "010-2342-3892", "park@gmail.com", "SALES", "TEAM_LEADER", "ROLE_ADMIN", "정규직", "2013-10-24", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into member values (1004, "김주원", "1996-12-23", "010-4892-3444", "kim@gmail.com", "SALES", "DIRECTOR", "ROLE_ADMIN", "정규직", "2017-11-10", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into member values (1005, "정유진", "1996-02-20", "010-2377-4573", "jung@gmail.cm", "PRODUCTION", "MANAGER", "ROLE_ADMIN", "정규직", "2019-09-07", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into member values (1006, "이지홍", "1997-08-17", "010-8874-7098", "ghong817@gmail.com", "LOGISTICS", "EMPLOYEE", "ROLE_MEMBER", "정규직", "2024-01-21", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into member values (1007, "송창민", "1994-03-17", "010-2232-2900", "kingsv12@gmail.com", "LOGISTICS", "EMPLOYEE", "ROLE_MEMBER", "계약직", "2023-10-24", "2024-01-20", "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");

insert into item values (1, "자재", "밀가루", "포대", "20Kg", 10000, 11000);
insert into item values (2, "자재", "식용유", "상자", "10L", 5000, 5500);
insert into item values (3, "자재", "사과", "개", "", 1000, 1100);
insert into item values (4, "자재", "바나나", "송이", "", 2000, 2100);
insert into item values (5, "자재", "소금", "BOX", "10Kg", 20000, 22000);
insert into item values (6, "자재", "설탕", "BOX", "10Kg", 10000, 11000);
insert into item values (7, "제품", "어묵", "BOX", "1Kg", 10000, 11000);
insert into item values (8, "제품", "떡", "BOX", "1Kg", 10000, 11000);
insert into item values (9, "제품", "과자", "BOX", "100g", 40000, 44000);

insert into account values (1, "이지홍", "111-11-11111", "가나테크", "매입처", "홍길동", "제조업", "기타 제품 제조업", "02-3159-2368", "경기도 화성시 팔탄면 3.1만세로", "gildong@gmail.com");
insert into account values (2, "이지홍", "222-22-22222", "가가상사", "매출처", "이미자", "도매 및 소매업", "산업용 기계 및 장비 도매업", "02-5198-4566", "인천광역시 미추홀구 한나루로 563", "mija@gmail.com");
insert into account values (3, "이미자", "333-33-33333", "나나금속", "매입처", "강호동", "제조업", "1차 금속제품 도매업", "031-2833-5919", "서울특별시 금천구 시흥대로 46 13동", "hodong@gmail.com");
insert into account values (4, "박보검", "444-44-44444", "다다전자", "매출처", "유지태", "제조업", "기타 제품 제조업", "02-3845-6847", "인천광역시 남동구 경인로 744", "jitae@gmail.com");
insert into account values (5, "김주원", "555-55-55555", "가다산업", "매입처", "이수근", "제조업", "기타 기계 및 장비 제조업", "031-6443-4325", "경기도 시흥시 매화산단로 45", "sugun@gmail.com");  

insert into orders values (1, "가나테크", "111-11-11111", "판매", "2024-1-25", "2024-01-29");
insert into orders values (2, "가가상사", "222-22-22222", "판매", "2024-1-25", "2024-02-27");
insert into orders values (3, "나나금속", "333-33-33333", "구매", "2024-1-25", "2024-02-28");
insert into orders values (4, "다다전자", "444-44-44444", "판매", "2024-02-07", null);
insert into orders values (5, "가다산업", "555-55-55555", "구매", "2024-02-20", null);
insert into orders values (6, "가나테크", "333-33-33333", "구매", "2024-02-17", null);
insert into orders values (7, "나나금속", "444-44-44444", "판매", "2024-02-28", null);
insert into orders values (8, "가다산업", "555-55-55555", "판매", "2024-02-15", null);

insert into orders_item values (1, 1, "자재", 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into orders_item values (2, 2, "제품", 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (3, 3, "제품", 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (4, 4, "자재", 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into orders_item values (5, 5, "제품", 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (6, 6, "자재", 6, "소금", "포대", "600*600", 100, 100, 10, 11000);
insert into orders_item values (7, 7, "제품", 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (8, 8, "자재", 8, "설탕", "포대", "600*600", 100, 100, 10, 11000);
insert into orders_item values (null, 2, "제품", 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into orders_item values (null, 2, "자재", 8, "설탕", "포대", "600*600", 100, 100, 10, 11000);

insert into production values (1, 1, "가나테크", "이지홍", 3, "CDL-3LR", "1개", "700*2100", 10, "2024-01-29");
insert into production values (2, 2, "가가상사", "이지홍", 2, "K8015-5", "1개", "600*600", 1, "2024-01-30");
insert into production values (3, 3, "나나금속", "이미자", 1, "SNOW WASH", "1개", "7*8.5*900", 5, "2024-01-30");
insert into production values (4, 4, "다다전자", "박보검", 4, "SW-루미노소", "1개", "300*600", 5, "2024-02-04");
insert into production values (5, 5, "가다산업", "김주원", 5, "DQH3297OB", "1개", "300*600", 5, "2024-02-21");

insert into store values (null, "IN", "가나테크", 1, "2024-01-29");
insert into store values (null, "OUT", "가가상사", 2, "2024-02-07");
insert into store values (null, "OUT", "나나금속", 5, "2024-02-20");
insert into store values (null, "IN", "다다전자", 3, "2024-02-17");
insert into store values (null, "IN", "가다산업", 4, "2024-02-28");

insert into store_item values (1, 1, 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into store_item values (2, 2, 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (3, 3, 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (4, 4, 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into store_item values (5, 5, 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (6, 2, 6, "소금", "포대", "600*600", 100, 100, 10, 11000);
insert into store_item values (7, 3, 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into store_item values (8, 4, 8, "설탕", "포대", "600*600", 100, 100, 10, 11000);

insert into invoice values (1, 1, "매출", "카드", "-", "2024-01-10");
insert into invoice values (2, 2, "매출", "카드", "2차 주문", "2024-01-12");
insert into invoice values (3, 3, "매입", "현금", "장부 문의", "2024-01-17");
insert into invoice values (4, 4, "매출", "카드", "-", "2024-01-21");
insert into invoice values (5, 5, "매입", "카드", "추가 매입", "2024-02-02");
insert into invoice values (6, 5, "매입", "현금", "3차 발주", "2024-02-10");

insert into invoice_item values (1, 1, 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (2, 2, 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (3, 3, 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (4, 4, 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into invoice_item values (5, 5, 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);

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

insert into inventory values (1, 1, "곰표밀가루", 1, 10, 10000, 10, 5, 15, 20, 5, 5, 5);
insert into inventory values (2, 2, "검은콩두유", 2, 20, 12000, 15, 10, 25, 50, 25, 25, 25);
insert into inventory values (3, 3, "별표생수", 3, 30, 9000, 20, 12, 38, 40, 2, 38, 5);
insert into inventory values (4, 4, "양반현미밥", 4, 40, 7000, 30, 20, 50, 80, 30, 20, 35);
insert into inventory values (5, 5, "우유분말", 5, 50, 150000, 45, 35, 60, 70, 10, 35, 12);

insert into estimate values (1, 1, "2024-01-05", "2024-02-20", 1050000, "진행중");
insert into estimate values (2, 2, "2024-01-10", "2024-02-20", 1050000, "진행중");
insert into estimate values (3, 3, "2024-01-12", "2024-02-20", 1050000, "완료");
insert into estimate values (4, 4, "2024-01-26", "2024-02-20", 1050000, "취소");
insert into estimate values (5, 5, "2024-02-01", "2024-02-20", 1050000, "진행중");
insert into estimate values (6, 3, "2024-02-17", "2024-02-20", 1050000, "취소");
insert into estimate values (7, 5, "2024-02-20", "2024-02-20", 1050000, "완료");

insert into estimate_item values (1, 1, 1, "밀가루", "포대", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (2, 2, 2, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (3, 3, 3, "과자", "BOX", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (4, 4, 4, "식용유", "포대", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (5, 5, 5, "떡", "BOX", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (6, 6, 6, "소금", "포대", "600*600", 100, 100, 10, 11000);
insert into estimate_item values (7, 7, 7, "과자", "BOX", "600*600", 100, 100, 10, 11000);

insert into inspection values (1, 1, "이지홍", "박보검", "7", "현수막", "개", "1800*600", 10, 10, 0, "PASS", "2024-01-05");
insert into inspection values (2, 2, "송창민", "홍길동", "5", "안전매뉴얼", "개", "700*600", 15, 7, 8, "FAIL",  "2024-01-10");
insert into inspection values (3, 3, "정유진", "이미자", "6", "엠블럼", "개", "4*5", 100, 92, 8, "PASS", "2024-01-12");
insert into inspection values (4, 4, "이지홍", "박보검", "9", "리플릿", "개", "245*140", 200, 198, 2, "PASS", "2024-01-26");
insert into inspection values (5, 5, "김주원", "홍길동", "8", "K8015-5", "개", "1800*600", 5, 0, 5, "FAIL", "2024-02-01");