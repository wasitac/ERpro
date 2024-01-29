CREATE TABLE user (
 id bigint NOT NULL auto_increment COMMENT '사번: 1001에서 시작',
 name varchar(30) NOT NULL COMMENT '이름',
 birth date NOT NULL COMMENT '생년월일',
 phone varchar(13) NOT NULL COMMENT '연락처',
 email varchar(30) NOT NULL COMMENT '이메일',
 department varchar(10) NOT NULL COMMENT '부서',
 user_rank varchar(30) NOT NULL COMMENT '직급',
 role enum('ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_MEMBER') NOT NULL COMMENT '권한',
 work_type varchar(10) NOT NULL COMMENT '정규직/비정규직',
 insert_date date NOT NULL COMMENT '입사일',
 retire_date date COMMENT '퇴사일',
 password varchar(100) NOT NULL COMMENT '비밀번호',
 primary key(id)
);

CREATE TABLE item (
 id bigint NOT NULL auto_increment COMMENT '품목번호',
 sort enum('제품', '자재') NOT NULL COMMENT '품목구분',
 item_name varchar(30) NOT NULL COMMENT '품목명',
 unit varchar(30) NOT NULL COMMENT '단위',
 spec varchar(30) NOT NULL COMMENT '규격',
 buy_price int NOT NULL COMMENT '매입단가',
 sell_price int NOT NULL COMMENT '매출단가',
 primary key(id)
);

CREATE TABLE account (
 id bigint NOT NULL auto_increment COMMENT '거래처번호',
 user_id bigint NOT NULL COMMENT '담당자사번',
 b_no varchar(13) NOT NULL COMMENT '사업자번호',
 b_nm varchar(30) NOT NULL COMMENT '거래처명',
 sort enum('매입처', '매출처') NOT NULL COMMENT '유형',
 p_nm varchar(30) NOT NULL COMMENT '대표자명',
 b_sector varchar(30) NOT NULL COMMENT '업태',
 b_type varchar(30) NOT NULL COMMENT '업종',
 phone varchar(13) NOT NULL COMMENT '전화번호',
 b_adr varchar(100) NOT NULL COMMENT '사업장주소',
 email varchar(30) NOT NULL COMMENT '이메일',
 primary key(id),
 foreign key(user_id) references user(id)
);

CREATE TABLE orders (
 id bigint NOT NULL auto_increment COMMENT '주문번호',
 account_id bigint NOT NULL COMMENT '거래처번호',
 item_id bigint NOT NULL COMMENT '품목번호',
 user_id bigint NOT NULL COMMENT '담당자사번',
 type enum('구매', '판매') NOT NULL COMMENT '유형',
 item_name varchar(30) NOT NULL COMMENT '품목명',
 unit varchar(30) NOT NULL COMMENT '단위',
 spec varchar(30) NOT NULL COMMENT '규격',
 count int NOT NULL COMMENT '수량',
 price int NOT NULL COMMENT '단가',
 supply_price int NOT NULL COMMENT '공급가액',
 vat int NOT NULL COMMENT '부가세',
 total int NOT NULL COMMENT '합계금액',
 due_date date NOT NULL COMMENT '발주일자',
 completion_date date NULL COMMENT '입고일자',
 primary key(id),
 foreign key(item_id) references item(id),
 foreign key(user_id) references user(id)
);

CREATE TABLE production (
 id bigint NOT NULL auto_increment COMMENT '생산지시서 번호',
 order_id bigint NOT NULL COMMENT '주문번호',
 account_id bigint NOT NULL COMMENT '거래처번호',
 user_id bigint NOT NULL COMMENT '담당자',
 item_id bigint NOT NULL COMMENT '물품번호',
 item_name varchar(30) NOT NULL COMMENT '물품명',
 unit varchar(30) NOT NULL COMMENT '단위',
 spec varchar(30) NOT NULL COMMENT '규격',
 count int NOT NULL COMMENT '수량',
 production_date date NOT NULL DEFAULT (current_date) COMMENT '지시 일자',
 primary key(id),
 foreign key(order_id) references orders(id),
 foreign key(user_id) references user(id),
 foreign key(item_id) references item(id)
);

CREATE TABLE store (
 id bigint NOT NULL auto_increment COMMENT '입출고번호',
 account_id bigint NOT NULL COMMENT '거래처번호',
 order_id bigint NOT NULL COMMENT '발주번호',
 item_id bigint NOT NULL COMMENT '물품번호',
 item_name varchar(30) NOT NULL COMMENT '물품명',
 unit varchar(30) NOT NULL COMMENT '단위',
 spec varchar(30) NOT NULL COMMENT '규격',
 count int NOT NULL COMMENT '수량',
 price int NOT NULL COMMENT '단가',
 supply_price int NOT NULL COMMENT '공급가액',
 vat int NOT NULL COMMENT '부가세',
 total int NOT NULL COMMENT '합계금액',
 date date NOT NULL DEFAULT (current_date) COMMENT '입출고일자',
 primary key(id),
 foreign key(order_id) references orders(id),
 foreign key(item_id) references item(id)
);

CREATE TABLE invoice (
 id bigint NOT NULL COMMENT '전표번호',
 store_id bigint NOT NULL COMMENT '입출고번호',
 sort enum('매출', '매입') NOT NULL COMMENT '거래구분',
 item_id bigint NOT NULL COMMENT '품목번호',
 payment varchar(10) NOT NULL COMMENT '결제방법',
 note varchar(255) NULL COMMENT '비고',
 date date NOT NULL DEFAULT (current_date) COMMENT '거래일자',
 primary key(id),
 foreign key(store_id) references store(id) on update cascade on delete cascade,
 foreign key(item_id) references item(id) 
);

CREATE TABLE bom (
 id bigint NOT NULL auto_increment COMMENT 'BOM번호',
 item_id bigint NOT NULL COMMENT '품목번호',
 material_id bigint NOT NULL COMMENT '자재번호',
 required_amount int NOT NULL COMMENT '소요량',
 note varchar(255) NULL COMMENT '비고',
 primary key(id),
 foreign key(item_id) references item(id) on update cascade on delete cascade,
 foreign key(material_id) references item(id)
);

CREATE TABLE inventory (
id bigint auto_increment NOT NULL COMMENT '재고번호',
 item_id bigint NOT NULL COMMENT '품목번호',
 store_id bigint NOT NULL COMMENT '입출고번호',
 opening_count int NOT NULL COMMENT '기초재고수량',
 opening_amount int NOT NULL COMMENT '기초재고금액',
 store_in int NOT NULL COMMENT '입고(반출)',
 store_out int NOT NULL COMMENT '출고(반입)',
 current_inventory int NOT NULL COMMENT '현재고량',
 appropriate_inventory int NOT NULL COMMENT '적정재고',
 lack int NOT NULL COMMENT '부족수량',
 sales int NOT NULL COMMENT '매출수량',
 expected_order int NOT NULL COMMENT '예상발주량',
 primary key(id),
 foreign key(item_id) references item(id) on update cascade on delete cascade,
 foreign key(store_id) references store(id)
);

CREATE TABLE estimate (
 id bigint NOT NULL auto_increment COMMENT '견적번호',
 account_id bigint NOT NULL COMMENT '거래처번호',
 insert_date date NOT NULL DEFAULT (current_date) COMMENT '작성일자',
 expiration_date date NOT NULL DEFAULT((current_date) + 30) COMMENT '유효기간',
 item_id bigint NOT NULL COMMENT '품목번호',
 item_name varchar(30) NOT NULL COMMENT '품목명',
 unit varchar(30) NOT NULL COMMENT '단위',
 spec varchar(30) NOT NULL COMMENT '규격',
 price int NOT NULL COMMENT '단가',
 count int NOT NULL COMMENT '수량',
 due_date date NOT NULL COMMENT '납기일자',
 total int NOT NULL COMMENT '견적금액',
 is_order varchar(10) NOT NULL COMMENT '주문처리',
 primary key(id),
 foreign key(item_id) references item(id)
);

CREATE TABLE inspection (
 id bigint NOT NULL auto_increment COMMENT '검사요청번호',
 store_id bigint NOT NULL COMMENT '입출고번호',
 proposer_id bigint NOT NULL COMMENT '신청자',
 inspector_id bigint NOT NULL COMMENT '검수자',
 item_id bigint NOT NULL COMMENT '품목번호',
 item_name varchar(30) NOT NULL COMMENT '품목명',
 unit varchar(30) NOT NULL COMMENT '단위',
 spec varchar(30) NOT NULL COMMENT '규격',
 count int NOT NULL COMMENT '생산량',
 eligible int NOT NULL COMMENT '적격',
 ineligible int NOT NULL COMMENT '부적격',
 pass varchar(10) NOT NULL COMMENT '합격여부',
 inspection_date date NOT NULL DEFAULT (current_date) COMMENT '작성일자',
 primary key(id),
 foreign key(store_id) references store(id),
 foreign key(proposer_id) references user(id),
 foreign key(inspector_id) references user(id),
 foreign key(item_id) references item(id)
);