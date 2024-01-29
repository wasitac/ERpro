
insert into user values (1001, "홍길동", "1969-05-23", "010-2398-4849", "hong@gmail.com", "ADMIN", "CEO", "ROLE_SUPERADMIN", "정규직", "2001-10-24", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into user values (1002, "이미자", "1987-07-02", "010-4049-3303", "lee@gmail.com", "HR", "EXECUTIVE", "ROLE_SUPERADMIN", "정규직", "2010-05-02", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into user values (1003, "박보검", "1994-12-30", "010-2342-3892", "park@gmail.com", "SALES", "TEAM_LEADER", "ROLE_ADMIN", "정규직", "2013-10-24", null, "$2a$10$J/H3gJjxKuJ/h/9sGeZXN.i0xhA4udGfuKA5U5Rf21PQiyR/KyR3C");
insert into user values (1004, "김주원", "1996-12-23", "010-4892-3444", "kim@gmail.com", "SALES", "DIRECTOR", "ROLE_ADMIN", "정규직", "2017-11-10", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into user values (1005, "정유진", "1996-02-20", "010-2377-4573", "jung@gmail.cm", "PRODUCTION", "MANAGER", "ROLE_ADMIN", "정규직", "2019-09-07", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into user values (1006, "이지홍", "1997-08-17", "010-8874-7098", "ghong817@gmail.com", "LOGISTICS", "EMPLOYEE", "ROLE_MEMBER", "정규직", "2024-01-21", null, "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");
insert into user values (1007, "송창민", "1994-03-17", "010-2232-2900", "kingsv12@gmail.com", "LOGISTICS", "EMPLOYEE", "ROLE_MEMBER", "계약직", "2023-10-24", "2024-01-20", "$2a$10$xNsseao2cwCVld7nZDZZaeig93/KU49hlgWA2c4QxnSlEZXUjnEVK");

insert into item values (1, "자재", "밀가루", "포대", "20Kg", 10000, 11000);
insert into item values (2, "자재", "식용유", "상자", "10L", 5000, 5500);
insert into item values (3, "자재", "사과", "개", "", 1000, 1100);
insert into item values (4, "자재", "바나나", "송이", "", 2000, 2100);
insert into item values (5, "자재", "소금", "BOX", "10Kg", 20000, 22000);
insert into item values (6, "자재", "설탕", "BOX", "10Kg", 10000, 11000);
insert into item values (7, "제품", "어묵", "BOX", "1Kg", 10000, 11000);
insert into item values (8, "제품", "떡", "BOX", "1Kg", 10000, 11000);
insert into item values (9, "제품", "과자", "BOX", "100g", 40000, 44000);

insert into account values (1, 1003, "111-11-11111", "가나테크", "매입처", "홍길동", "제조업", "기타 제품 제조업", "02-3159-2368", "경기도 화성시 팔탄면 3.1만세로", "gildong@gmail.com");
insert into account values (2, 1004, "222-22-22222", "가가상사", "매출처", "이미자", "도매 및 소매업", "산업용 기계 및 장비 도매업", "02-5198-4566", "인천광역시 미추홀구 한나루로 563", "mija@gmail.com");
insert into account values (3, 1004, "333-33-33333", "나나금속", "매입처", "강호동", "제조업", "1차 금속제품 도매업", "031-2833-5919", "서울특별시 금천구 시흥대로 46 13동", "hodong@gmail.com");
insert into account values (4, 1003, "444-44-44444", "다다전자", "매출처", "유지태", "제조업", "기타 제품 제조업", "02-3845-6847", "인천광역시 남동구 경인로 744", "jitae@gmail.com");
insert into account values (5, 1003, "555-55-55555", "가다산업", "매입처", "이수근", "제조업", "기타 기계 및 장비 제조업", "031-6443-4325", "경기도 시흥시 매화산단로 45", "sugun@gmail.com");  


insert into orders values (1, 1, 9, 1004, "판매", "과자", "BOX", "100g", 100, 44000, 4400000, 440000, 4840000, "2024-1-25", "2024-01-29");
insert into orders values (2, 2, 8, 1004, "판매", "피자", "BOX", "100g", 10, 11000, 110000, 11000, 121000, "2024-1-25", "2024-02-27");
insert into orders values (3, 3, 5, 1004, "구매", "소금", "BOX", "100g", 100, 22000, 2200000, 220000, 2420000, "2024-1-25", "2024-02-28");
insert into orders values (4, 4, 7, 1004, "판매", "어묵", "BOX", "100g", 100, 11000, 1100000, 110000, 1210000, "2024-02-07", null);
insert into orders values (5, 3, 6, 1004, "구매", "설탕", "BOX", "100g", 100, 11000, 1100000, 110000, 1210000, "2024-02-20", null);
insert into orders values (6, 3, 4, 1004, "구매", "바나나", "송이", "100g", 100, 2100, 210000, 21000, 231000, "2024-02-17", null);
insert into orders values (7, 4, 8, 1004, "판매", "피자", "BOX", "100g", 100, 11000, 1100000, 110000, 1210000, "2024-02-28", null);
insert into orders values (8, 2, 9, 1004, "판매", "과자", "BOX", "100g", 100, 44000, 4400000, 440000, 4840000, "2024-02-15", null);


insert into production values (1, 1, 1, 1005, 3, "CDL-3LR", "1개", "700*2100", 10, "2024-01-29");
insert into production values (2, 2, 2, 1005, 3, "K8015-5", "1개", "600*600", 1, "2024-01-30");
insert into production values (3, 3, 3, 1005, 3, "SNOW WASH", "1개", "7*8.5*900", 5, "2024-01-30");
insert into production values (4, 4, 4, 1005, 3, "SW-루미노소", "1개", "300*600", 5, "2024-02-04");
insert into production values (5, 5, 5, 1005, 3, "DQH3297OB", "1개", "300*600", 5, "2024-02-21");

insert into store values (1, 1, 1, 9, "과자", "BOX", "100g", 100, 44000, 4400000, 440000, 4840000, "2024-01-29");
insert into store values (2, 1, 1, 7, "어묵", "BOX", "100g", 100, 11000, 1100000, 110000, 1210000, "2024-02-07");
insert into store values (3, 1, 1, 6, "설탕", "BOX", "100g", 100, 11000, 1100000, 110000, 1210000, "2024-02-20");
insert into store values (4, 1, 1, 4, "바나나", "송이", "100g", 100, 2100, 210000, 21000, 231000, "2024-02-17");
insert into store values (5, 1, 1, 8, "피자", "BOX", "100g", 100, 11000, 1100000, 110000, 1210000, "2024-02-28");
insert into store values (6, 1, 1, 9, "과자", "BOX", "100g", 100, 44000, 4400000, 440000, 4840000, "2024-02-15");

insert into invoice values (1, 1, "매출", 1, "카드", "-", "2024-01-10");
insert into invoice values (2, 2, "매출", 2, "카드", "2차 주문", "2024-01-12");
insert into invoice values (3, 3, "매입", 3, "현금", "장부 문의", "2024-01-17");
insert into invoice values (4, 4, "매출", 4, "카드", "-", "2024-01-21");
insert into invoice values (5, 5, "매입", 5, "카드", "추가 매입", "2024-02-02");
insert into invoice values (6, 6, "매입", 6, "현금", "3차 발주", "2024-02-10");

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

insert into inventory values (1, 1, 1, 10, 10000, 10, 5, 15, 20, 5, 5, 5);
insert into inventory values (2, 2, 2, 20, 12000, 15, 10, 25, 50, 25, 25, 25);
insert into inventory values (3, 3, 3, 30, 9000, 20, 12, 38, 40, 2, 38, 5);
insert into inventory values (4, 4, 4, 40, 7000, 30, 20, 50, 80, 30, 20, 35);
insert into inventory values (5, 5, 5, 50, 150000, 45, 35, 60, 70, 10, 35, 12);
insert into inventory values (6, 6, 6, 60, 11000, 50, 70, 40, 100, 60, 70, 30);

insert into estimate values (1, 1, "2024-01-05", "2024-02-20", 9, "곰표밀가루", "포대", "10kg", 15000, 70, "2024-01-8", 1050000, "진행중");
insert into estimate values (2, 2, "2024-01-10", "2024-02-20", 8, "검은콩두유", "BOX", "190ml", 23000, 20, "2024-01-10", 1050000, "진행중");
insert into estimate values (3, 3, "2024-01-12", "2024-02-20", 7, "별표생수", "6개", "2L", 14000, 30, "2024-01-25", 1050000, "완료");
insert into estimate values (4, 4, "2024-01-26", "2024-02-20", 8, "양반현미밥", "BOX", "130g", 17000, 20, "2024-01-31", 1050000, "취소");
insert into estimate values (5, 5, "2024-02-01", "2024-02-20", 6, "우유분말", "50개", "22g", 16000, 25, "2024-02-03", 1050000, "진행중");
insert into estimate values (6, 3, "2024-02-17", "2024-02-20", 4, "탈피단호박", "2개", "1kg", 12000, 10, "2024-02-25", 1050000, "취소");
insert into estimate values (7, 5, "2024-02-20", "2024-02-20", 5, "페레로로쉐", "BOX", "608g", 20000, 15, "2024-02-28", 1050000, "완료");

## 검사요청번호, 입출고번호, 신청자 번호, 검수자 번호, 물품번호, 품목명, 단위, 규격, 생산량, 적격, 부적격, 합격여부, 일자
insert into inspection values (1, 1, 1004, 1006, "7", "현수막", "개", "1800*600", 10, 10, 0, "합격", "2024-01-05");
insert into inspection values (2, 2, 1005, 1006, "5", "안전매뉴얼", "개", "700*600", 15, 7, 8, "불합격",  "2024-01-10");
insert into inspection values (3, 3, 1006, 1006, "6", "엠블럼", "개", "4*5", 100, 92, 8, "합격", "2024-01-12");
insert into inspection values (4, 4, 1003, 1006, "9", "리플릿", "개", "245*140", 200, 198, 2, "합격", "2024-01-26");
insert into inspection values (5, 5, 1004, 1006, "8", "K8015-5", "개", "1800*600", 5, 0, 5, "불합격", "2024-02-01");
insert into inspection values (6, 6, 1005, 1006, "6", "CDL-3LR", "개", "1800*600", 30, 20, 10, "합격", "2024-02-17");