drop database erpro;
CREATE DATABASE erpro character set = utf8mb4;
use erpro;

CREATE TABLE user (
 id bigint NOT NULL auto_increment,
 name varchar(30) NOT NULL,
 birth date NOT NULL,
 phone varchar(13) NOT NULL,
 email varchar(30) NOT NULL,
 department varchar(10) NOT NULL,
 user_rank varchar(30) NOT NULL,
 work_type varchar(10) NOT NULL,
 insert_date date NOT NULL,
 retire_date date,
 password varchar(100) NOT NULL,
 primary key(id)
);

CREATE TABLE item (
 id bigint NOT NULL auto_increment,
 sort enum('제품', '자재') NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 purchase_price int NOT NULL,
 sales_price int NOT NULL,
 primary key(id)
);

CREATE TABLE account (
 id bigint NOT NULL auto_increment,
 user_id bigint NOT NULL,
 b_no varchar(13) NOT NULL,
 b_nm varchar(30) NOT NULL,
 sort enum('개인', '법인') NOT NULL,
 p_nm varchar(30) NOT NULL,
 b_sector varchar(30) NOT NULL,
 b_type varchar(30) NOT NULL,
 phone varchar(13) NOT NULL,
 b_adr varchar(100) NOT NULL,
 email varchar(30) NOT NULL,
 primary key(id),
 foreign key(user_id) references user(id)
);

CREATE TABLE orders (
 id bigint NOT NULL auto_increment,
 account_id bigint NOT NULL,
 item_id bigint NOT NULL,
 user_id bigint NOT NULL,
 type enum('구매', '판매') NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 price int NOT NULL,
 supply_price int NOT NULL,
 vat int NOT NULL,
 total int NOT NULL,
 due_date date NOT NULL,
 completion_date date NULL,
 primary key(id),
 foreign key(account_id) references account(id),
 foreign key(item_id) references item(id),
 foreign key(user_id) references user(id)
);

CREATE TABLE production (
 id bigint NOT NULL auto_increment,
 order_id bigint NOT NULL,
 account_id bigint NOT NULL,
 user_id bigint NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 date date NOT NULL DEFAULT (current_date),
 primary key(id),
 foreign key(order_id) references orders(id),
 foreign key(account_id) references account(id),
 foreign key(user_id) references user(id),
 foreign key(item_id) references item(id)
);

CREATE TABLE store (
 id bigint NOT NULL auto_increment,
 account_id bigint NOT NULL,
 order_id bigint NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 price int NOT NULL,
 supply_price int NOT NULL,
 vat int NOT NULL,
 total int NOT NULL,
 date date NOT NULL DEFAULT (current_date),
 primary key(id),
 foreign key(account_id) references account(id),
 foreign key(order_id) references orders(id),
 foreign key(item_id) references item(id)
);

CREATE TABLE invoice (
 store_id bigint NOT NULL,
 sort enum('매출', '매입') NOT NULL,
 payment varchar(10) NOT NULL,
 note varchar(255) NULL,
 date date NOT NULL DEFAULT (current_date),
 foreign key(store_id) references store(id) on update cascade on delete cascade
);

CREATE TABLE bom (
 item_id bigint NOT NULL,
 material_id bigint NOT NULL,
 required_amount int NOT NULL,
 note varchar(255) NULL,
 foreign key(item_id) references item(id) on update cascade on delete cascade,
 foreign key(material_id) references item(id)
);

CREATE TABLE inventory (
 item_id bigint NOT NULL,
 store_id bigint NOT NULL,
 opening_count int NOT NULL,
 opening_amount int NOT NULL,
 store_in int NOT NULL,
 store_out int NOT NULL,
 current_inventory int NOT NULL,
 appropriate_inventory int NOT NULL,
 lack int NOT NULL,
 sales int NOT NULL,
 expected_order int NOT NULL,
 foreign key(item_id) references item(id) on update cascade on delete cascade,
 foreign key(store_id) references store(id)
);

CREATE TABLE estimate (
 id bigint NOT NULL auto_increment,
 account_id bigint NOT NULL,
 insert_date date NOT NULL DEFAULT (current_date),
 expiration int NOT NULL DEFAULT 30,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 price int NOT NULL,
 count int NOT NULL,
 due_date date NOT NULL,
 total int NOT NULL,
 is_order boolean NOT NULL,
 primary key(id),
 foreign key(account_id) references account(id),
 foreign key(item_id) references item(id)
);

CREATE TABLE inspection (
 id bigint NOT NULL auto_increment,
 store_id bigint NOT NULL,
 proposer_id bigint NOT NULL,
 inspector_id bigint NOT NULL,
 item_id bigint NOT NULL,
 item_name varchar(30) NOT NULL,
 unit varchar(30) NOT NULL,
 spec varchar(30) NOT NULL,
 count int NOT NULL,
 eligible int NOT NULL,
 ineligible int NOT NULL,
 pass boolean NOT NULL,
 date date NOT NULL DEFAULT (current_date),
 primary key(id),
 foreign key(store_id) references store(id),
 foreign key(proposer_id) references user(id),
 foreign key(inspector_id) references user(id),
 foreign key(item_id) references item(id)
);