/**
 * 정유진
 */
import React, { useState } from "react";
import { Menu } from "antd";
import infoIcon from "../../../img/infoIcon.png";
import tradeIcon from "../../../img/tradeIcon.png";
import logisticsIcon from "../../../img/logisticsIcon.png";
import productionIcon from "../../../img/productIcon.png";
import logo from "../../../img/logo.png";
import "./reset.css";
import Profiledropdown from "./Profiledropdown";
import menus from "../commons/menus";

const items = [
  {
    label: "기초정보",
    key: "info",
    icon: <img src={infoIcon} alt="기초정보 아이콘" />,
    children: [
      {
        type: "group",
        children: [menus.account, menus.item, menus.bom, menus.user],
      },
    ],
  },
  {
    label: "거래",
    key: "trade",
    icon: <img src={tradeIcon} alt="거래 아이콘" />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "구매/판매 발주서",
            key: "order",
          },
          {
            label: "견적서",
            key: "estimate",
          },
          {
            label: "매입/매출 전표",
            key: "invoice",
          },
        ],
      },
    ],
  },
  {
    label: "물류/재고",
    key: "logistics",
    icon: <img src={logisticsIcon} alt="물류재고 아이콘" />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "입고/출고 관리",
            key: "store",
          },
          {
            label: "재고 관리",
            key: "inventory",
          },
        ],
      },
    ],
  },
  {
    label: "생산",
    key: "product",
    icon: <img src={productionIcon} alt="생산 아이콘" />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "생산 지시",
            key: "production",
          },
          {
            label: "제품 검수",
            key: "inspection",
          },
        ],
      },
    ],
  },
];

const Navbar = ({ onMenuChange }) => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    setCurrent(e.key);
    onMenuChange(e.key);
  };
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        height: "90px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: "150px", margin: "20px 20px 12px 20px" }}
          src={logo}
          alt="logo"
        />
        <Menu
          onClick={onClick}
          mode="horizontal"
          selectedKeys={[current]}
          items={items}
          style={{
            backgroundColor: "#f4f4f4",
            marginTop: "26px",
            width: "600px",
          }}
        />
      </div>
      <div style={{ marginLeft: "auto", marginRight: "30px" }}>
        <Profiledropdown />
      </div>
    </div>
  );
};

export default Navbar;
