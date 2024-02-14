drop database if exists erpro;
CREATE DATABASE erpro character set = utf8mb4;
use erpro;

CREATE TABLE account (
 id bigint NOT NULL auto_increment,
 member_name varchar(30) NOT NULL,
 b_no varchar(13) NOT NULL,
 b_nm varchar(30) NOT NULL,
 sort enum('매입처', '매출처') NOT NULL,
 p_nm varchar(30) NOT NULL,
 b_sector varchar(30) NOT NULL,
 b_type varchar(30) NOT NULL,
 phone varchar(13) NOT NULL,
 b_adr varchar(100) NOT NULL,
 email varchar(30) NOT NULL,
 primary key(id)
);

CREATE TABLE item (
 id bigint NOT NULL auto_increment,
 sort enum('제품', '자재') NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 buy_price int NOT NULL,
 sell_price int NOT NULL,
 primary key(id)
);

CREATE TABLE bom (
 id bigint NOT NULL auto_increment,
 item_id bigint NOT NULL,
 material_id bigint NOT NULL,
 required_amount int NOT NULL,
 note varchar(255) NULL,
 primary key(id),
 foreign key(item_id) references item(id) on delete cascade,
 foreign key(material_id) references item(id) on delete cascade
);

CREATE TABLE member (
 id bigint NOT NULL auto_increment,
 name varchar(30) NOT NULL,
 birth_date date NOT NULL,
 phone varchar(13) NOT NULL,
 email varchar(30) NOT NULL,
 department varchar(10) NOT NULL,
 member_rank varchar(30) NOT NULL,
 role enum('ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_MEMBER') NOT NULL,
 work_type varchar(10) NOT NULL,
 insert_date date NOT NULL,
 retire_date date,
 password varchar(100) NOT NULL,
 primary key(id)
);

CREATE TABLE orders (
 id bigint NOT NULL auto_increment,
 b_nm varchar(30) NOT NULL,
 b_no varchar(13) NOT NULL,
 sort enum('구매', '판매') NOT NULL,
 due_date date NOT NULL,
 completion_date date,
 primary key(id)
);

CREATE TABLE orders_item (
 id bigint NOT NULL auto_increment,
 orders_id bigint NOT NULL,
 sort varchar(10) NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 price int NOT NULL,
 vat int NOT NULL,
 total int NOT NULL,
 primary key(id),
 foreign key(orders_id) references orders(id) on delete cascade
);

CREATE TABLE estimate (
 id bigint NOT NULL auto_increment,
 account_id bigint NOT NULL,
 insert_date date NOT NULL DEFAULT (current_date),
 due_date date NOT NULL,
 total int NOT NULL,
 is_order varchar(10) NOT NULL,
 primary key(id)
);

CREATE TABLE estimate_item (
 id bigint NOT NULL auto_increment,
 estimate_id bigint NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 price int NOT NULL,
 vat int NOT NULL,
 total int NOT NULL,
 primary key(id),
 foreign key(estimate_id) references estimate(id) on delete cascade
);

CREATE TABLE store (
 id bigint NOT NULL auto_increment,
 sort enum('IN', 'OUT') NOT NULL,
 b_nm varchar(30) NOT NULL,
 order_id bigint NOT NULL,
 store_date date NOT NULL DEFAULT (current_date),
 primary key(id)
);

CREATE TABLE store_item (
	id bigint NOT NULL auto_increment,
	store_id bigint NOT NULL,
	item_id bigint NOT NULL,
	item_name varchar(30) NOT NULL,
	unit varchar(30) NOT NULL,
	spec varchar(30) NOT NULL,
	count int NOT NULL,
	price int NOT NULL,
	vat int NOT NULL,
	total int NOT NULL,
	primary key(id),
	foreign key(store_id) references store(id) on delete cascade
);

CREATE TABLE invoice (
 id bigint NOT NULL auto_increment,
 store_id bigint NOT NULL,
 sort enum('매출', '매입') NOT NULL,
 payment varchar(10) NOT NULL,
 note varchar(255) NULL,
 invoice_date date NOT NULL DEFAULT (current_date),
 primary key(id),
 foreign key(store_id) references store(id) on delete cascade
);

CREATE TABLE invoice_item (
 id bigint NOT NULL auto_increment,
 invoice_id bigint NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 price int NOT NULL,
 vat int NOT NULL,
 total int NOT NULL,
 primary key(id),
 foreign key(invoice_id) references invoice(id) on delete cascade
);



CREATE TABLE inventory (
 id bigint NOT NULL auto_increment,
 item_name varchar(30) NOT NULL,
 opening_count int NOT NULL,
 opening_amount int NOT NULL,
 store_in int NOT NULL,
 store_out int NOT NULL,
 current_inventory int NOT NULL,
 appropriate_inventory int NOT NULL,
 lack int NOT NULL,
 primary key(id),
 foreign key(id) references item(id) on delete cascade
);

CREATE TABLE production (
 id bigint NOT NULL auto_increment,
 order_id bigint NOT NULL,
 b_nm varchar(30) NOT NULL,
 member_name varchar(30) NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 production_date date NOT NULL DEFAULT (current_date),
 primary key(id)
);

CREATE TABLE inspection (
 id bigint NOT NULL auto_increment,
 store_id bigint NOT NULL,
 proposer_name varchar(30) NOT NULL,
 inspector_name varchar(30) NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 eligible int NOT NULL,
 ineligible int NOT NULL,
 pass enum('PASS', "FAIL") NOT NULL,
 inspection_date date NOT NULL DEFAULT (current_date),
 primary key(id),
 foreign key(store_id) references store(id) on delete cascade
);
